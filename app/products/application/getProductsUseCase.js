export default class GetProductsUseCase {
  constructor(){}

  async get() {
    const url = 'https://api.escuelajs.co/api/v1/products'

    const result = await fetch(url).then(res => res.json())
    return result

  }

}