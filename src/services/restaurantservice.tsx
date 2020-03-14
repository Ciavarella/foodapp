const corsFix = "https://cors-anywhere.herokuapp.com/"
const request = async (text: string) => {
  return fetch(`${corsFix}https://api.yelp.com/v3/autocomplete?text=${text}&latitude=59.334591&longitude=18.063240`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    }
  })
}

export const search = async (text: string) => {
  const res = await request(text)
  return res.json()
}
