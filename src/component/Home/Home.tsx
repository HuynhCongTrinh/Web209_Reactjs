import  { products } from '../../data'
import ProductList from '../ProductList/ProductList'

function Home() {
    return (
        <>
        <ProductList products={products}/>
        </>
      )
}

export default Home