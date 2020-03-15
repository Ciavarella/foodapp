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
  items: [{ name: "McDonald's", id: '1', coordinates: { longitude: 18.0596199, latitude: 59.3306084 } },
  { name: "Hawaii Poké", id: '2', coordinates: { longitude: 18.07203, latitude: 59.33422 } },
  { name: "Pom och Flora", id: '3', coordinates: { longitude: 18.05869, latitude: 59.34463 } }],
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
