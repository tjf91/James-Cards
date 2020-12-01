import React from 'react'
import Card from './Card'

export default function CardDisplay (props){
    const mappedCards = props.cards.map(card=>{
        return(
            <Card
                key={card.card_id}
                card={card}
                />
        )
    })
    return(
    <div className='card-display'>{mappedCards}</div>
    )
}