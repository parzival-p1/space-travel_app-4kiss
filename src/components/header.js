import { Link } from "react-router-dom"
import logo from "../root-code/assets/shared/logo.svg"
import {CgMenuLeft} from "react-icons/cg"

export default function header()
{
    const handleClick = () =>{
        const navbar = document.querySelector(".navbar")
        const listItems = document.querySelectorAll(".list-item")

        navbar.classList.toggle("open")

        listItems.forEach((item) => item.addEventListener("click", () => navbar.classList.remove("open")))
    }   
    return (
        <>
            <header className="header flex items-center justify-between w-full lg:flex-row">
                <div>
                    <Link to="/destination">
                    <img src={logo} alt="Logo space" title="Space Travel" />
                    </Link>
                </div>

                <nav className="navbar">
                    <ul>
                        <li className="list-item">
                            <Link to="/" className="lg:text-white lg:flex lg:items-center"><span className="lg:text-l lg:font-bold mr-2">00</span> Home</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/destination" className="lg:text-white lg:flex lg:items-center"><span className="lg:text-l lg:font-bold mr-2">01</span>Destination</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/" className="lg:text-white lg:flex lg:items-center"><span className="lg:text-l lg:font-bold mr-2">02</span> Crew</Link>
                        </li>
                        <li className="list-item">
                            <Link to="/" className="lg:text-white lg:flex lg:items-center"><span className="lg:text-l lg:font-bold mr-2">03</span> Technology</Link>
                        </li>
                    </ul>
                </nav>

                <div className="lg:hidden">
                    <button onClick={handleClick}>
                        <CgMenuLeft className="text-white text-4xl"/>
                    </button>
                </div>
            </header>
        </>
    )
}
