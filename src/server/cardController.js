const cards = require('./data/data.json')
  //Get last 6 cards from newest first
  
let createLastCards= (lastC)=>{
    let arr=[]
    for(let i=lastC.length-10;i<lastC.length;i++){
            arr.unshift(cards[i])
        }
        return arr
}

        
module.exports={
    // Get all cards
    getCards:(req,res)=>res.status(200).send(cards),
  //Get last 6 cards from newest first
    getLastCards:(req,res)=>{        
        res.status(200).send(createLastCards(cards))
    },
    
    addCard:(req,res)=>{
        let card_id = cards[cards.length-1].card_id+1        
        const {title,img,text} = req.body
        console.log(title)
        const card={
            card_id,
            title,
            img,
            text,
            comments:[]
        }
       
        cards.push(card)        
        card_id++
       
        res.status(201).send(createLastCards(cards))
    },
    editCard:(req,res)=>{
        const {title,img,text} = req.body
        console.log(req.body)
        let indexToEdit = cards.findIndex(card=>card.card_id===+req.params.card_id)        
        cards[indexToEdit]={
            card_id:Number(req.params.card_id),
            title:title||cards[indexToEdit].title,
            img:img||cards[indexToEdit].img,
            text:text||cards[indexToEdit].text,
            comments:cards[indexToEdit].comments,
        }        
        res.status(200).send(createLastCards(cards))
       
    },
    deleteCard:(req,res)=>{
        
        let indexToDelete = cards.findIndex(card=>card.card_id===+req.params.card_id)
        cards.splice(indexToDelete,1)

        
        res.status(200).send(createLastCards(cards))

    },
    addComment:(req,res)=>{
       const {text,time,date,img}= req.body
       const card = cards.find(card=>card.card_id===+req.params.card_id)
       let com_id=Math.max(...card.comments.map(prop=>prop.com_id))+1
       console.log("comment add")
        const comment={
            com_id,
            text,
            time,
            date,
            img,
        }
        card.comments.push(comment)
        com_id++
        res.status(201).send(createLastCards(cards))

    },
    editComment:(req,res)=>{
        const {text,time,date,img} =req.body
        const {card_id,com_id} = req.params
        const card = cards.find(card=>card.card_id===+card_id)
        const indexCommentToEdit = card.comments.findIndex(comment=>comment.com_id===+com_id)
        card.comments[indexCommentToEdit]={
            com_id:Number(com_id),
            text:text||card.comments[indexCommentToEdit].text,
            time:time||card.comments[indexCommentToEdit].time,
            date:date||card.comments[indexCommentToEdit].date,
            img:img||card.comments[indexCommentToEdit].img,
        }
        res.status(200).send(createLastCards(cards))
        
    },
    deleteComment:(req,res)=>{
        const {card_id,com_id} =req.params
        const card = cards.find(card=>card.card_id===+card_id)
        const indexToDelete = card.comments.findIndex(comment=>comment.com_id===+com_id)
        card.comments.splice(indexToDelete,1)
        res.status(200).send(createLastCards(cards))
    },
    filter:(req,res)=>{        
        const filterCards=(input)=>{
            let arr = cards.filter(card=>card.title.toLowerCase().includes(req.query.q.toLowerCase()))
            return arr
        }
        res.status(200).send(filterCards(cards))
    },

}

