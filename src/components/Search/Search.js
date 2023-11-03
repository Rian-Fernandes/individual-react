import styles from './Search.module.css'

function Search () {
    return(
        <div className={styles.app}>
            <main>
                <div className={styles.search_box}>
                <input
                type ="text"
                className="search-bar"
                placeholder="Search..."
                />
                </div>
                </main>
                </div>          
       
    )
}
export default Search