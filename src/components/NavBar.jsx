import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import './NavBar.css';

export default function Navbar() {
    return (
        <header className='Guitarbarra'>
            <h1>GuitarCoder 🎸</h1>
            <nav className='menu'>
                <ButtonComponent name="Inicio"/>
                <ButtonComponent name="Instrumentos" callback />
                <ButtonComponent name="Accesorios" />
                <ButtonComponent name="Partituras"/>
            </nav>
            <CartWidget />
            </header >
            );
}