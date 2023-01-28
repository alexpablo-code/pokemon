import {useState, useEffect} from 'react';
import './App.css';
import './components/style.css'
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';
import Main from './components/Main';
import axios from 'axios';

function App() {
  // const [pokemonList, setPokemonList] = useState([])
  // const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  // const [nextPageUrl, setNextPageUrl] = useState()
  // const [prevPageUrl, setPrevPageUrl] = useState()
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setLoading(true)
  //   let cancel
  //   axios.get(currentPageUrl, {
  //     cancelToken: new axios.CancelToken(c => cancel = c)
  //   })
  //   .then(response => {
  //     setLoading(false)
  //     console.log("This is the Full Response", response)
  //     console.log("This is the Full Response.data.results", response.data.results)
  //     setNextPageUrl(response.data.next)
  //     setPrevPageUrl(response.data.previous)
  //     setPokemonList(response.data.results.map(p => p.name))
    
  //   })

  //   return () => cancel()
  //   // cancel request if we have a new one, just in case if we have a old data

  // }, [currentPageUrl])

  // const goToNextPage = () => {
  //   setCurrentPageUrl(nextPageUrl)
  // }
  // const goToPrevPage = () => {
  //   setCurrentPageUrl(prevPageUrl)
  // }



  // if (loading) return "Loading ..."

  return (
    <div className="App">

      <Main/>

      
      {/* <PokemonList pokemonList = {pokemonList} setPokemonList = {setPokemonList}/>
      <Pagination 
        goToNextPage = {nextPageUrl ? goToNextPage : null}
        goToPrevPage = {prevPageUrl ? goToPrevPage: null}
      /> */}

    </div>
  );
}

export default App;
