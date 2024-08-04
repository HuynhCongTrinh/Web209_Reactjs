import Product from "../product/Product";

  
function ProductList({ products }: any) {
  return (
    <div>
      <div className="bg-white ">
        <div  className="mt-6 p-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 border-black shadow-lg ">
          {products.map((product : any) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
