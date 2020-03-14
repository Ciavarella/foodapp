import React from 'react'
import { Restaurant } from '../models/restaurant'

interface ItemProp {
  item: Restaurant
}

const ListItem: React.FC<ItemProp> = ({ item }) => {
  return (
    <div>
      {item.name}
    </div>
  )
}

export default ListItem