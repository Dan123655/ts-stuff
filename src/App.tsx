
import  Loader from './components/Loader';
import  Error  from './components/Error';
import { Product } from './components/Product';
import { useProducts } from './hooks/hooks';



const App = () => {
const {loading,err,products} = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading&&<Loader/>}
      {err && <Error err={err} />}
      {products.map((item) => (<Product product={item} key={item.id} />))}
  </div>
)
}

export default App;
