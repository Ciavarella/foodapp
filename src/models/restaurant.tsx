import { Action, action } from 'easy-peasy'
import { uuid } from 'uuidv4'

export interface Restaurant {
  id: string,
  name: string
}

export interface RestaurantModel {
  items: Restaurant[]
  addRestaurant: Action<RestaurantModel, Restaurant>
}

const restaurantModel: RestaurantModel = {
  items: [{ name: "McDonalds", id: uuid() },
  { name: "Hawaiian Poke", id: uuid() },
  { name: "Pom & Flora", id: uuid() }],
  addRestaurant: action((state, payload) => {
    state.items.push(payload)
  })
}

export default restaurantModel