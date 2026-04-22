import './Buscador.css'

function Buscador(){
    const [busqueda, setBusqueda] = useState("")

     const handleSubmit = (e) => {
        setBusqueda(e.target.value)
     }
    return <>
     <form onSubmit={handleSubmit}>
        <input type="text" className="" value={busqueda}  placeholder="___"/>
     </form>
    </>
}

export default Buscador