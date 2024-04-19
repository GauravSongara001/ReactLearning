import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='text-center' style={{backgroundColor: 'black', color: 'white'}}>
      <Link to="/"><li>Home</li></Link>
      <Link to="/register"><li>Register</li></Link>
    </div>
  )
}
