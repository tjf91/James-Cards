const cards = require('./data/data.json')
module.exports={
    getCards:(req,res)=>res.status(200).send(cards),
    
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
       
        cards.unshift(card)
        card_id++
        res.status(201).send(cards)
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
        res.status(200).send(cards)
       
    },
    deleteCard:(req,res)=>{
        let indexToDelete = cards.findIndex(card=>card.card_id===+req.params.card_id)
        cards.splice(indexToDelete,1)
        res.status(200).send(cards)

    },
    addComment:(req,res)=>{
       const {text,time,date}= req.body
       const card = cards.find(card=>card.card_id===+req.params.card_id)
       const com_id=Math.max(...card.comments.map(prop=>prop.com_id))+1
       
        const comment={
            com_id,
            text,
            time,
            date,
        }
        card.comments.push(comment)
        res.status(201).send(cards)

    },
    editComment:(req,res)=>{
        const {text,time,date} =req.body
        const {card_id,com_id} = req.params
        const card = cards.find(card=>card.card_id===+card_id)
        const indexCommentToEdit = card.comments.findIndex(comment=>comment.com_id===+com_id)
        card.comments[indexCommentToEdit]={
            com_id:Number(com_id),
            text:text||card.comments[indexCommentToEdit].text,
            time:time||card.comments[indexCommentToEdit].time,
            date:date||card.comments[indexCommentToEdit].date,
        }
        res.status(200).send(cards)
        
    },
    deleteComment:(req,res)=>{
        const {card_id,com_id} =req.params
        const card = cards.find(card=>card.card_id===+card_id)
        const indexToDelete = card.comments.findIndex(comment=>comment.com_id===+com_id)
        card.comments.splice(indexToDelete,1)
        res.status(200).send(cards)
    }

}

