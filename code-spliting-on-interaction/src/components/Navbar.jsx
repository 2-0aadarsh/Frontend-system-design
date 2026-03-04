import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="bg-blue-500 text-white flex justify-between items-center">
            <h1 className="text-2xl font-bold" > <Link to="/"> My Website </Link></h1>
            <ul className="flex gap-4 py-4 px-2  justify-center items-center list-none font-semibold text-xl ">
                <li className="hover:text-gray-100 hover:bg-blue-600 rounded-md p-2 transition-all duration-300 " ><Link to="/about">About</Link></li>
                <li className="hover:text-gray-100 hover:bg-blue-600 rounded-md p-2 transition-all duration-300 " ><Link to="/contact">Contact</Link></li>
                <li className="hover:text-gray-100 hover:bg-blue-600 rounded-md p-2 transition-all duration-300 " ><Link to="/faqs">FAQs</Link></li>
                <li className="hover:text-gray-100 hover:bg-blue-600 rounded-md p-2 transition-all duration-300 " ><Link to="/profile">Profile</Link></li>
                <li className="hover:text-gray-100 hover:bg-blue-600 rounded-md p-2 transition-all duration-300 " ><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}