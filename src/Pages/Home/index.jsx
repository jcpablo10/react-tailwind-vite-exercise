import {useState, useEffect} from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import GetProductsUseCase from '../../../app/products/application/getProductsUseCase'

const Home = () => {

  const getProductsUseCase = new GetProductsUseCase()
  const [products, setProducts] = useState(null)

  const fetchData = async () => {
    const data = await getProductsUseCase.get()
    setProducts(data)
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log("🚀 ~ file: index.jsx:18 ~ useEffect ~ error:", error)
    }
  }, [])

  


  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-screen-lg px-1'>
        {
          products?.map((item) => {
            return <Card key={item.id} {...item}/>
          })
        }
      </div>
    </Layout>
  )
}

export default Home