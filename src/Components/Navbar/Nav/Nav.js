import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = ({ categories }) => {
    return (
        <nav>
            {categories.map((category) => {
                return <NavLink key={category.id} to={category.route} style={styles.links}>{category.title}</NavLink>
            })}
        </nav>
    )
}

const styles = {
    links: {
        padding: 10,
    }
}
