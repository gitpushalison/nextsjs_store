import NavLink from './navLink/navLink'
import styles from './links.module.css'
const navList = [
    {
       title:'HomePage',
       path:'/'
    },
    {
        title:'About',
        path:'/about'
     },
     {
        title:'Contact',
        path:'/contact'
     },
     {
        title:'Blog',
        path:'/blog'
     }
]
const Links = () => {
    return (
        <div className={styles.links}>
           {navList.map(link => <NavLink item={link} key={link.title} />)}
        </div>
    )
}

export default Links