// export interface Root {
//   product: Product[]
// }

export interface Products {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductRating

}

export interface ProductRating {
  rate: number
  count: number
}
