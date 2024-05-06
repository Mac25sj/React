import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'
import TituloComponente from './components/TituloComponente';



function App() {

    return (
        <>
        <Navbar/>
        <ItemListContainer greeting ='Bienvenido a Guitarcoder 🎸'/>
        </>
    )
}
export default App;
