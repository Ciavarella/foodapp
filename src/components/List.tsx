import React from 'react'
import ItemType from '../types'
import ListItem from './ListItem'

interface ListProps {
  data: ItemType[]
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div className="column">
      {data.map(item =>
        <ListItem key={item.id} item={item} />
      )}
    </div>
  )
}

export default List