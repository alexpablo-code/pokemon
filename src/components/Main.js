import {useState, useEffect} from 'react';
import Card from "./Card";
import PokeInfo from "./PokeInfo";
import axios from "axios";

const Main = () => {

    const [pokeData, setPokeData] = useState([]);
    const[loading, setLoading] = useState(true);
    const[url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const[nextUrl, setNextUrl] = useState();
    const[prevUrl, setPrevUrl] = useState();
    const[pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        // console.log(res.data.results)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results); 
        setLoading(false);
        // console.log("This should be list of pokemon", pokeData);
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            // console.log(item.url)
            const result = await axios.get(item.url)
            // console.log(result.data)
            // setPokeData([...pokeData, result.data]);
            // ^^ This one is not working so we will use the one Below
            // setPokeData(prev => [...prev, result.data])
            setPokeData(state => {
                state=[...state, result.data]
                state.sort((a,b)=> a.id > b.id? 1:-1)
                return state;
            })
        })
    }


    useEffect(() => {
        pokeFun();
    },[url])


    return (
        <>
            <div className="header">
                <div className='nav'>
                    <img src="pokemon.png" alt="" />

                </div>
            </div>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon ={poke => setPokeDex(poke)}/>
                    
                    <div className="btn-group">
                        { prevUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(prevUrl)
                            }}>Previous</button>}

                        <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                            }}>Next</button>
                    </div>
                </div>
                <div className="right-content">
                    <PokeInfo data={pokeDex}/>
                </div>
            </div>
        </>
    );
}

export default Main