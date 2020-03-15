import Input from './Input'
import Button from './Button'
import { useStoreActions } from '../hooks'
import { Restaurant } from '../models/restaurant'
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react"

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}

interface YelpResponse {
  id: string
  name: string,
}

const Form: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [restaurant, setRestautant] = useState<YelpResponse>({ id: '', name: '' })
  const saveRestaurant = useStoreActions(actions => actions.restaurant.addRestaurant)
  const searchRestaurant = useStoreActions(actions => actions.restaurant.searchRestaurant)
  const getRestaurantCoordinates = useStoreActions(actions => actions.restaurant.getCoordinates)
  const debouncedQuery = useDebounce(name, 300)

  useEffect(() => {
    if (debouncedQuery !== "") {
      searchRestaurant(debouncedQuery).then((res: any) => setRestautant(res))
    }
  }, [debouncedQuery])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const choosenRestaurant: Restaurant = {
      name: restaurant.name,
      id: restaurant.id,
      coordinates: { longitude: 0, latitude: 0 }
    }
    if (choosenRestaurant.id !== '') {
      const fullRestaurant = await getRestaurantCoordinates(choosenRestaurant.id)
      choosenRestaurant.coordinates = fullRestaurant.coordinates
      saveRestaurant(choosenRestaurant)
      setName('')
      setRestautant({ id: '', name: '' })
    }
  }

  return (
    <div className="w60">
      <form className="column align-center" onSubmit={onSubmit}>
        <Input placeholder="Search restaruant" value={name} onInputChange={handleChange} />
        {restaurant && <p>{restaurant.name}</p>}
        <Button text="Save" />
      </form>
    </div>
  )
}

export default Form