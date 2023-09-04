import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div>
                <Link to='/'>
                    home
                </Link>
                <Link to='/add-todo'>
                    add todo
                </Link>
            </div>
        </div>
    )
}

export default Navbar