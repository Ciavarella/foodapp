import model from './models'
import { createStore } from 'easy-peasy'
import * as restaurantService from './services/restaurantservice'

export interface Injections {
  restaurantService: typeof restaurantService
}

const store = createStore(model, { injections: { restaurantService } })

export default store