// export interface Root {
//   product: Product[]
// }

export interface Products {
  id: string 
  title: string
  price:string
  description: string
  category: string
  image: string
  rating: ProductRating
}
export interface Products2 {
  id: number
  price: number
ids: number
}
export interface ProductRating {
  rate: number
  count: number
}
