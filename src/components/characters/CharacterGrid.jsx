import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items,isLoading}) => {
   return isLoading ? (<h1>
       <Spinner></Spinner>
   </h1>) : (
       <section className="cards">
           {items.map((item,index) => {
              return <CharacterItem key={index} item={item}></CharacterItem> 
           })}
       </section>
   )
}

export default CharacterGrid;