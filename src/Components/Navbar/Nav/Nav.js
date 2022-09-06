import React from 'react'

export const Nav = ({ categorias }) => {
    return (
        <nav>
            {categorias.map((categoria) => {
                return <a key={categoria.id} style={styles.links} href="#">{categoria.nombre}</a>
            })}
        </nav>
    )
}

const styles = {
    links: {
        padding: 10,
    }
}
