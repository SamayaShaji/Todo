import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import Button from "../Components/Button"
import Trial from "./trial"
import Social from "./Home/Social"
import Recipes from "./Home/Recipes"
import { Template } from "./Home/Template/temp"
import { Todo } from "./Home/Todo"
import UseStateExample from "./Home/UseStateExmple"






const Router = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/hello" element={<div>Hello</div>} />
        <Route path="/tr" element={<Trial/>}/>
        <Route path="/social" element={<Social/>}/>
        <Route path="/recipe" element={<Recipes/>}/>
        <Route path="/temp" element={<Template/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/usestate" element={<UseStateExample/>}/>
        
        



    </Routes>
  )
}

export default Router