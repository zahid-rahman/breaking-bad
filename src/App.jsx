import React,{useState,useEffect} from 'react'
import Header from './components/ui/Header';
import axios from 'axios'
import './index.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';

function App() {

  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [query,setQuery] = useState('')
 
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className="App">
        <Header></Header>
        <Search getQuery={(q) => setQuery(q)}></Search>
        <CharacterGrid isLoading={isLoading} items={items}></CharacterGrid>
    </div>
  );
}

export default App;
