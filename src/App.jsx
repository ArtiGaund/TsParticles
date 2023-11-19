import React, { useState } from "react"
import Original from "./components/Original/Original"
import BigCircle from "./components/BigCircle/BigCircle";
import Confetti from "./components/Confetti/Confetti";
import FireFly from "./components/FireFly/FireFly";
import Star from "./components/Star";
import Fire from './components/Fire'
import Fireworks from './components/Fireworks'
import Links from './components/Links'
import Snow from './components/Snow'
import Triangles from './components/Triangels'
import Growing from "./components/Growing";
import Slider from "./components/Slider/Slider";

function App() {
 
  const options = [
    'Original',
    'FireFly',
    'BigCircle',
    'Confetti',
    'Star',
    'Fire',
    'Fireworks',
    'Links',
    'Snow',
    'Triangles',
    'Growing',
    'Slider',
  ]
  const [ selectedOption, setSelectedOption ] = useState(options[0]);
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }
  return(
    <div className="w-full h-screen duration-200 bg-gray-900">
        <div className="fixed flex flex-wrap justify-center bg-white items-cente m-5 w-[250px] h-[150px] inset-x-8 rounded-lg z-10">
          <div  className="flex flex-row outline-none px-4 py-8 text-white  bg-pink-800 shadow-lg gap-3 rounded-xl">
            <div><h1>Preset</h1></div>
            <div className="w-[200px] relative z-10 justify-center items-center">
                <select className="w-full text-black bg-white rounded-lg appearance-none"
                value={selectedOption}
                onChange={handleOptionChange}>
                    {options.map((option,index) => (
                      <option key={index} value={option}>
                          {option}
                      </option>
                    ))}
                </select>
               
               
            </div>
            </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {selectedOption === 'Original' &&  <Original selectedOption={selectedOption}/>} 
          {selectedOption === 'FireFly' &&  <FireFly selectedOption={selectedOption}/>} 
          {selectedOption === 'BigCircle' &&  <BigCircle selectedOption={selectedOption}/>} 
          {selectedOption === 'Confetti' &&  <Confetti selectedOption={selectedOption}/>} 
          {selectedOption === 'Star' &&  <Star selectedOption={selectedOption}/>}  
          {selectedOption === 'Fire' &&  <Fire selectedOption={selectedOption}/>}    
          {selectedOption === 'Fireworks' &&  <Fireworks selectedOption={selectedOption}/>}    
          {selectedOption === 'Links' &&  <Links selectedOption={selectedOption}/>}    
          {selectedOption === 'Snow' &&  <Snow selectedOption={selectedOption}/>}         
          {selectedOption === 'Triangles' &&  <Triangles selectedOption={selectedOption}/>}
          {selectedOption === 'Growing' && <Growing selectedOption={selectedOption}/>}
          {selectedOption === 'Slider' && <Slider selectedOption={selectedOption}/>}
          </div>
    </div>

     
  )
}

export default App
