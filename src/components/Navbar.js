const Navbar = () => {
    return (
        <nav style = {styles.navStyle}>
            <h1>Todos App</h1>
            <ul>
                <li>Home</li>
                <li>Things to Do</li>

            </ul>
        </nav>
    )
}

const styles = {
    navStyle: {
display: 'flex',
color: 'blue',
justifyContent: 'space-around',
border: 'solid red 2px',
    }
}

export default Navbar