
import  Loader from '../components/Loader';
import  Error  from '../components/Error';
import { Product } from '../components/Product';
import { useProducts } from '../hooks/hooks';
import { Modal } from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import { useContext} from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';


export function ProductPage (){
const { loading, err, products, addProduct } = useProducts();
const { modal,open,close}=useContext(ModalContext)



const handleCreate = (product: IProduct) => {
  close();
  addProduct(product)
}
return (
  <div className='container mx-auto max-w-2xl pt-5'>
    {loading&&<Loader/>}
    {err && <Error err={err} />}
    {products.map((item) => (<Product product={item} key={item.id} />))}
    {modal&&<Modal onClose={()=>close()} title='Create new product'>
    <CreateProduct onCreate={handleCreate}/>
    </Modal>}
    <button onClick={()=>open()} className='font-bold fixed bottom-5 right-5 rounded-full bg-yellow-400 text-white text-2xl items-center content-center px-4 py-2'>+</button>
    
</div>
)
}