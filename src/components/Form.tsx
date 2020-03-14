import Input from './Input'
import { uuid } from 'uuidv4'
import Button from './Button'
import { useStoreActions } from '../hooks'
import React, { ChangeEvent, FormEvent, useState } from "react"



const Form: React.FC = () => {
  const [name, setName] = useState<string>('')
  const saveRestaurant = useStoreActions(actions => actions.restaurant.addRestaurant);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    saveRestaurant({ name, id: uuid() })
    setName('')
  }

  return (
    <div className="w60">
      <form className="column align-center" onSubmit={onSubmit}>
        <Input placeholder="Add restaurant" value={name} onInputChange={handleChange} />
        <Button text="Save" />
      </form>
    </div>
  )
}

export default Form