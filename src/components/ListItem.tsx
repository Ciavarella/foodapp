import React from 'react'
import ItemType from '../types'

interface ItemProp {
  item: ItemType
}

const ListItem: React.FC<ItemProp> = ({ item }) => {
  return (
    <div>
      {item.name}
    </div>
  )
}

export default ListItem