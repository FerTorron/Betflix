import { useState } from "react"

const Prueba = () => {
    const [numero, setNumero] = useState(0)

    const sumarNumero = () => {
        setNumero(numero + 1);
    }
    const restarNumero = () => {
        if (numero > 0) {
            setNumero(numero - 1);
        }
    }

    return (
        <div className="w-full flex items-center justify-center gap-5">
            <button onClick={restarNumero} className="text-white text-3xl bg-titleColor hover:bg-zinc-900 transition-all border-titleColor border-2 rounded-lg py-1 px-4">-</button>
            <span className="text-white text-3xl"> {numero} </span>
            <button onClick={sumarNumero} className="text-white text-3xl bg-titleColor hover:bg-zinc-900 transition-all border-titleColor border-2 rounded-lg py-1 px-4">+</button>
        </div>
    )
}

export default Prueba