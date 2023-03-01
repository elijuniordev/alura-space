import React from 'react'
import styles from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, filtrarFotos, setItens}) {
  return (
    <div className={styles.tags}>
        <p>
            Filtre por Tags:
        </p>
        <ul className={styles.tags__lista}>
          <li onClick={() => setItens(fotos) } >Todas</li>
          {tags.map((tag) => {
            return <li key={tag} onClick={() => filtrarFotos(tag)} >{tag}</li>;
          })}   
        </ul>
    </div>
  )
}
