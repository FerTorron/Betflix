import { useState, useEffect } from 'react'

const MovieList = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const MI_KEY = "c9f04fa4";

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setPeliculas(data.Search)
            })
            .catch(error => console.log(error))
    }, [busqueda])

    const manejadorSubmit = (event) => {
        event.preventDefault();
        setBusqueda(event.target.busqueda.value)
        event.target.busqueda.value = ""
    }

    return (
        <div className='w-4/5 m-auto p-6 flex justify-between items-center flex-col gap-9'>
            <form className='flex items-center justify-between gap-8
            ' onSubmit={manejadorSubmit}>
                <input className='rounded-lg py-2.5 px-5 focus:border-titleColor border-2 border-white' name='busqueda' type="text" />
                <button className='py-2.5 px-5 text-white font-semibold bg-titleColor hover:bg-zinc-900 transition-all border-titleColor border-2 rounded-lg' type='submit'>Buscar</button>
            </form>

            <ul className='w-full flex items-center justify-center flex-wrap gap-7'>
                {
                    peliculas === undefined ? <h2 className='text-white text-notFound font-Bebas'>Película no encontrada</h2> : peliculas.map(peli => {
                        return (
                            <li className='w-56 h-auto flex items-center justify-center flex-col gap-2 hover:scale-105 transition-all' key={peli.imdbID}>
                                <img className='w-full h-80 object-cover' src={peli.Poster} alt={peli.Title} />
                                <span className='text-center text-white font-semibold font-Bebas text-lg'> {peli.Title} </span>
                            </li>
                        )
                    })
                }
            </ul >
        </div>
    )
}

export default MovieList