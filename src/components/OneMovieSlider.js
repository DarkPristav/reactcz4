import './OneMovieSlider.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react"
import data from "../data"

const OneMovieSlider = () => {
  const [index, setIndex] = useState(0)
  const { image, title, description } = data[index]

  const checkMovieNumber = (movieIndex) => {
    if (movieIndex < 0) {
        return data.length - 1
    } else if (movieIndex > data.length - 1) {
        return 0
    } else {
        return movieIndex
    }
}

  const nextMovie = () => {
    const newIndex = index + 1
    setIndex(checkMovieNumber(newIndex))
  }
  
   const prevMovie = () => {
      const newIndex = index - 1
     setIndex(checkMovieNumber(newIndex))
  }

  return <div className="one-movie">
    <img src={image} alt="" />
    <h2>{title}</h2>
    <p>{description}</p>
    <button onClick={prevMovie}>
        <FaArrowAltCircleLeft />
    </button>
    <button onClick={nextMovie}>
        <FaArrowAltCircleRight />
    </button>
</div>
}

export default OneMovieSlider