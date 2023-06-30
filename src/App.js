import './App.css';
import { useState, useRef } from "react"

function App() {
  const [images, setImages] = useState([])
  const inputRef = useRef(null)

  const addImage = (image) => {
    setImages([...images, image])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(images)
    inputRef.current.value = ""
  }

  return (
    <>
      <div className="App">
        <h2>Enter a URL to add an image</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="url" id="url" className="imgurl" onChange={(e) => addImage(e.target.value)} ref={inputRef} />
          <button type="submit" className="sbutton">Submit</button>
        </form>
      </div>
      <div className="images">
        {images.map((image, index) => (
          image ? <img src={image} alt="images" key={index} style={{ height: 200, width: 200 }} /> : ""
        ))}
      </div>
    </>
  );
}

export default App;
