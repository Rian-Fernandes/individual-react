import styles from './Search.module.css'

function Search () {

    const dateBuilder = (d) =>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return(
        <div className={styles.app}>
            <main>
                <div className={styles.search_box}>
                <input
                type ="text"
                className={styles.search_box}
                placeholder="Search..."
                />
                </div>
                <div className="location-box">
                    <div className={styles.location}>Petrópolis, RJ</div>
                    <div className={styles.date}>{dateBuilder(new Date())}</div>
                </div>
                <div className={styles.weather_box}>
                    <div className={styles.temp}>15°C</div>
                    <div className={styles.weath}>Ensolarado</div>
                </div>
                </main>
                </div>          
       
    )
}

export default Search