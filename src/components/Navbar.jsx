import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navLink}>🏠 Home</Link>
            <Link to="/tasks" className={styles.navLink}>📋 Tarefas</Link>
            <Link to="/people" className={styles.navLink}>👥 Pessoas</Link>
        </nav>
    );
};

export default Navbar;
