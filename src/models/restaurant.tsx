import { Action, action, Thunk, thunk } from 'easy-peasy'
import { Injections } from '../store'

export interface Restaurant {
  id: string,
  name: string,
  coordinates: {
    latitude: number
    longitude: number
  }
}

export interface RestaurantModel {
  items: Restaurant[]
  addRestaurant: Action<RestaurantModel, Restaurant>
  searchRestaurant: Thunk<RestaurantModel, string, Injections>
  getCoordinates: Thunk<RestaurantModel, string, Injections>
}

const restaurantModel: RestaurantModel = {
  items: [{ name: "McDonalds", id: '1', coordinates: { longitude: 0, latitude: 0 } },
  { name: "Hawaiian Poke", id: '2', coordinates: { longitude: 0, latitude: 0 } },
  { name: "Pom & Flora", id: '3', coordinates: { longitude: 0, latitude: 0 } }],
  addRestaurant: action((state, payload) => {
    state.items.push(payload)
  }),
  searchRestaurant: thunk(async (actions, payload, { injections }) => {
    const { restaurantService } = injections
    const result = await restaurantService.search(payload)
    return result.businesses[0] !== undefined
      ? result.businesses[0]
      : { name: 'No result found.', id: '' }
  }),
  getCoordinates: thunk(async (actions, payload, { injections }) => {
    const { restaurantService } = injections
    const result = await restaurantService.getCoordinates(payload)
    return result
  })
}

export default restaurantModel
