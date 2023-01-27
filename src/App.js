import {useState, useEffect} from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [pokeFullInfo, setPokeFullInfo] = useState([])

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
    .then(response => {
      setLoading(false)
      console.log("This is the Full Response", response)
      setNextPageUrl(response.data.next)
      setPrevPageUrl(response.data.previous)
      setPokemonList(response.data.results.map(p => p.name))
      setPokeFullInfo(response.data.results.map(p => {
        axios.get(p.url)
        .then(resp => {
          console.log("This is full Poke link info", resp)
        })
      }))
    })

    return () => cancel()
    // cancel request if we have a new one, just in case if we have a old data

  }, [currentPageUrl])

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }
  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }



  if (loading) return "Loading ..."

  return (
    <div className="App">
      <PokemonList pokemonList = {pokemonList} setPokemonList = {setPokemonList}/>
      <Pagination 
        goToNextPage = {nextPageUrl ? goToNextPage : null}
        goToPrevPage = {prevPageUrl ? goToPrevPage: null}
      />
    </div>
  );
}

export default App;
