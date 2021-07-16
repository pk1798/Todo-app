const Navbar = (props) => {
    

    const handleShow = (e) => {
        props.getShow(e.target.value)
    }

    return ( 
        <div className="navbar">
            <button onClick={handleShow} value="all">All</button>
            <button onClick={handleShow} value="active">Active</button>
            <button onClick={handleShow} value="completed">Completed</button>
        </div>
     );
}
 
export default Navbar;