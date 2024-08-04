import { Link } from 'react-router-dom';
import { products } from '../../data';

interface ProductProps {
  product: typeof products[number];
}
function Product({ product }: ProductProps) {
  return (
    <div className="group relative shadow-xl shadow-slate-400 rounded-xl">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 ml-2">
            <Link to={`/ProductDetails/${product.id}`}>            
              <span  className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-[#f97316] mr-3">{product.price}</p>
      </div>
      {/* <button className='w-full mt-2 bg-gray-900 dark:bg-gray-600 text-white py-1.5 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700'>Add To card</button> */}
    </div>
  );
}

export default Product;
