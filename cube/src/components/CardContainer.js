import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCardDetails ,removeCardDetails } from '../utils/CardDetailsSlice';
import { useState } from 'react';
import { CARD_DATA } from '../utils/constants';

const CardContainer = () => {
    const [cardData, setCardData] = useState();
    useEffect(()=>{
        getCardDetails()
    },[])

    const getCardDetails = async() => {
        const data = await fetch([CARD_DATA]);
        const json = await data.json();
        console.log(json[1].fullName)
        setCardData(json);

        
    }
    const [selectedButton, setSelectedButton] = useState(null)
    const dispatch = useDispatch();

    const handleClick = (card,fullName) =>{
        dispatch(addCardDetails(card))
        setSelectedButton(fullName)
    }

    const handleSecondClick = (card,fullName) =>{
        dispatch(removeCardDetails(card))
        setSelectedButton(fullName)
    }
    const cardItems = useSelector(store=>store.details.items)
    console.log(cardItems)

  return (
    <div className='flex flex-col w-[30%] border-r-4'>
        {cardData?.map((card) => (
            <>
            {cardItems.length<1 ?<button key= {card.index} className={`border p-4 h-36 mb-1 cursor-pointer ${
            selectedButton === card.fullName ? 'bg-gray-300 border-r-2' : 'bg-gray-50'}`} 
            onClick={()=>handleClick(card,card.fullName)}>
                <h1 className='p-1'>{card.fullName}</h1>
                <p className='p-1'>{card.rating}</p>
            </button> 

            : <button key= {card.index} className={`border p-4 h-36 mb-1 cursor-pointer ${
            selectedButton === card.fullName ? 'bg-gray-300 border-r-2' : 'bg-gray-50'
          }`} onClick={()=>handleSecondClick(card,card.fullName)}>
                <h1 className='p-1'>{card.fullName}</h1>
                <p className='p-1'>{card.rating}</p>
            </button>

            }
            
            </>
        ))}
        
    </div>
  )
}

export default CardContainer