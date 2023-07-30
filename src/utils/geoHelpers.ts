import axios from 'axios'
import { env } from '../env.mjs'
import { z } from 'zod'

const CoordsResponseSchema = z.object({
  features: z.array(
    z.object({
      geometry: z.object({
        coordinates: z.tuple([z.number(), z.number()])
      })
    })
  )
})

const AddressResponseSchema = z.object({
  features: z.array(
    z.object({
      properties: z.object({
        housenumber: z.string(),
        street: z.string(),
        city: z.string(),
        state_code: z.string(),
        country: z.string(),
      })
    })
  )
});


export async function getCoords(address: string) {
  const response = await axios.get(
    'https://api.geoapify.com/v1/geocode/search',
    {
      params: {
        apiKey: env.GEOAPIFY_API_KEY,
        text: address
      }
    }
  )

  return CoordsResponseSchema.parse(response.data)
}

export async function getAddress(coords: { lat: number; lon: number }) {
  const response = await axios.get(
    'https://api.geoapify.com/v1/geocode/reverse',
    {
      params: {
        apiKey: env.GEOAPIFY_API_KEY,

        lat: coords.lat,
        lon: coords.lon,
      }
    }
  )

  try {
    return AddressResponseSchema.parse(response.data).features[0]?.properties
  }
  catch (err) {
    console.log(err)
    return null
  }
}
