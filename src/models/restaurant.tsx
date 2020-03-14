import { Action, action, Thunk, thunk } from 'easy-peasy'
import { Injections } from '../store'

export interface Restaurant {
  id: string,
  name: string
}

export interface RestaurantModel {
  items: Restaurant[]
  addRestaurant: Action<RestaurantModel, Restaurant>
  searchRestaurant: Thunk<RestaurantModel, string, Injections>
}

const restaurantModel: RestaurantModel = {
  items: [{ name: "McDonalds", id: '1' },
  { name: "Hawaiian Poke", id: '2' },
  { name: "Pom & Flora", id: '3' }],
  addRestaurant: action((state, payload) => {
    state.items.push(payload)
  }),
  searchRestaurant: thunk(async (actions, payload, { injections }) => {
    const { restaurantService } = injections
    const result = await restaurantService.search(payload)
    return result.businesses[0]
  })
}

export default restaurantModel
