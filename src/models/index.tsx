import restaurantModel, { RestaurantModel } from './restaurant'

export interface StoreModel {
  restaurant: RestaurantModel
}

const storeModel: StoreModel = {
  restaurant: restaurantModel,
}

export default storeModel
