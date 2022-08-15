import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Article(props){

  const navigate = useNavigate()

  const [floridaMan, setFloridaMan] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://content.guardianapis.com/search?q="florida%20man"&to-date=2022-${props.date}&api-key=test`)
      setFloridaMan(response.data.response.results[0])
      console.log(response.data.response.results[0])
    }
    fetchData()
  }, [])

  return(
    <div id="article">
      <h1>{floridaMan.webTitle}</h1>
      <a href={floridaMan.webUrl}>
        <input type="button" value="Read More" />
      </a>
    </div>
  )
}