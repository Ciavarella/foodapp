import React from 'react'
import ListItem from './ListItem'
import { useStoreState } from '../hooks'

const List: React.FC = () => {
  const restaurants = useStoreState(state => state.restaurant.items)
  return (
    <div className="column w20 align-center">
      {restaurants.map(item =>
        <ListItem key={item.id} item={item} />
      )}
    </div>
  )
}

export default List
