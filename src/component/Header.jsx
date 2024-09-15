import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="border border-solid border-black bg-blue-400">
            <div className="flex justify-end">
                <ul className="flex p-6 font-bold">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4">About Us</li>
                    <li className="px-4"><Link to="/weather">Weather</Link></li>
                    <li className="px-4">Career</li>
                </ul>
            </div>
        </div>
    )
}

export default Header