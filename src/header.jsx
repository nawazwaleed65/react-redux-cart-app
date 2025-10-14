import { Link } from "react-router-dom";
import AddToCard from "./addtocard";
function Header() {
  return (
    <>
        <header className="flex justify-between items-center bg-blue-400 p-5">
            <div className="text-3xl font-bold">Logo</div>
            <nav>
                <ul className="flex space-x-10">
                    <li className=""><Link to="/">Home</Link></li>   
                </ul>
            </nav>
            <AddToCard />
        </header>
    </>
  );
}
export default Header;