import React from 'react'
import Card from './Card'

export default function CardDisplay (props){
    const mappedCards = props.cards.map(card=>{
        return(
            <Card
                key={card.card_id}
                card_id={card.card_id}
                card={card}
                editCard={props.editCard}
                deleteCard={props.deleteCard}
                addComment={props.addComment}
                editComment={props.editComment}
                deleteComment={props.deleteComment}
                />
        )
    })
    return(
    <div className='card-display'>{mappedCards}</div>
    )
}