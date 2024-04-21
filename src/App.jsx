import Navbar from "./Componenets/Navbar"
import NewsBoard from "./Componenets/NewsBoard"
import NewsItem from "./Componenets/NewsItem"
import { useState } from "react";

const App = () => {
  const[category,setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App
