import React, {useState} from  'react';
import styles from './Search.module.css'

const api ={
    key: "ed1ec14497365fb7fca5bc55a1713972",
    base: "https://api.openweathermap.org/data/2.5/"
  }

function Search () {

    const[query, setQuery] = useState('');
    const[weather, setWeather] = useState({});

    const search = evt => {
        if(evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('')
                    console.log(weather)

                })
        }
    }

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
        <div className={(typeof weather.main != "undefined") 
        ? ((weather.main.temp > 16) 
        ? styles.warm 
        : styles.app) 
        : ('')}>
            <main>
                <div className={styles.search_box}>
                <input
                type ="text"
                className={styles.search_box}
                placeholder="Search..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyDown={search}
                />
                </div>
                {(typeof weather.main != "undefined") ? (
                <div>
                    <div className="location-box">
                    <div className={styles.location}>{weather.name}, {weather.sys.country}</div>
                    <div className={styles.date}>{dateBuilder(new Date())}</div>
                </div>
                <div className={styles.weather_box}>
                <div className={styles.temp}>
                    {Math.round(weather.main.temp)}°c
                </div>
                <div className={styles.weath}>{weather.weather[0].main}</div>
                </div>
                </div>
                ) : ('')}
                </main>
                </div>          
       
    )
}

export default Search