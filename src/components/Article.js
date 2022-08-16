import axios from "axios"
import { useState, useEffect } from "react"

export default function Article(props){

  const [floridaMan, setFloridaMan] = useState([])

  let date = ''
  switch(props.month){
    case "January":
      date = `01-${props.day}`
      break
    case "February":
      date = `02-${props.day}`
      break
    case "March":
      date = `03-${props.day}`
      break
    case "April":
      date = `04-${props.day}`
      break
    case "May":
      date = `05-${props.day}`
      break
    case "June":
      date = `06-${props.day}`
      break
    case "July":
      date = `07-${props.day}`
      break
    case "August":
      date = `08-${props.day}`
      break
    case "September":
      date = `09-${props.day}`
      break
    case "October":
      date = `10-${props.day}`
      break
    case "November":
      date = `11-${props.day}`
      break
    default:
      date = `12-${props.day}`
  }

  const years=[2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
  const year = years[Math.floor(Math.random()*years.length)]

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://content.guardianapis.com/search?q="florida%20man"&to-date=${year}-${date}&api-key=test`)
      setFloridaMan(response.data.response.results[0])
      console.log(response.data.response.results[0])
    }
    fetchData()
  }, [])

  return(
    <div id="article">
      <h1>{floridaMan.webTitle}</h1>
      <img id="articleImg" src="https://thispersondoesnotexist.com/image" />
      <a href={floridaMan.webUrl}>
        <input type="button" value="Read More" />
      </a>
    </div>
  )
}