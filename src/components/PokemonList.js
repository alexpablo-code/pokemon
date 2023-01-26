


const PokemonList = ({pokemon}) => {
    return (
        <div>
            {
                pokemon.map((p) => (
                    <div>
                        <p>{p}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default PokemonList;