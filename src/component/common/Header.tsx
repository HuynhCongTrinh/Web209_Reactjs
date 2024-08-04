import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
    <div className=" bg-slate-300 flex items-center justify-between font-semibold ">
    <div className="w-24 flex ml-16 ">
      <img src="https://e7.pngegg.com/pngimages/59/1016/png-clipart-adidas-logo-adidas-sports-brand-white-text.png"/> 
    </div>

    <div >
        <ul className="flex items-center gap-8 p-2 m-1 ">
          <li >
           <Link className="hover:text-gray-500" to="/">Products</Link>
           </li>
          <li>
           <Link className="hover:text-gray-500" to="/about">About</Link>
           </li>
          <li>
           <Link className="hover:text-gray-500" to="/Cart1/:id">CartState</Link>
           </li>
        </ul>
    </div>
    <button type="button" className="p-2 m-4 w-24 text-white bg-[#0070f3] rounded-3xl hover:bg-[#68c0f3]"><Link to="/login" className="disabled:cursor-not-allowed">Login</Link></button>
    </div>
    </nav>
  )
}
