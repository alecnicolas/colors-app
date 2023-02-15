import { ColorGrid } from './components/ColorGrid/ColorGrid';
import { ColorInput } from './components/ColorInput/ColorInput';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [colorList, setColorList] = useState()
  const [loading, setLoading] = useState(false)

  const handleInput = (colors) => {
    setColorList(colors)
  }

  const handleLoading = (b) => {
    setLoading(b)
  }

  return (
    <div className="App">
      <ColorInput setColorList={handleInput} setLoading={handleLoading} loading={loading}/>
      {loading ? <div className='loading'>Loading... <div className='loading-icon'>🕺</div></div> : <ColorGrid colorList={colorList}/>}
    </div>
  );
}

export default App;
