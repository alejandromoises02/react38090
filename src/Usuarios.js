import React, { useState } from 'react'

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([{ nombre: 'Nirvana' }, { nombre: 'Bianca' }])

    console.log(usuarios);

    const nicolas = {nombre:'Nicolas'};

    const agregarNicolas = () => {
        setUsuarios([...usuarios,nicolas]);
    }

    return (
        <>
            <h1>Usuarios</h1>
            <button onClick={agregarNicolas}>Agregar a Nicolas</button>
            <ul>
                {usuarios.map((usuario,indice)=>(
                    <h2 key={indice}>{usuario.nombre}</h2>
                ))}
            </ul>
        </>
    )
}

export default Usuarios