




const PokeInfo = ({data}) => {
    console.log(data)
    return (
        <>
            {
                (!data)? "":(
                    <>
                    <div className="info-box">
                        <h1>{data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                        <div className="abilities">
                            {
                                data.abilities.map(poke =>(
                                    <>
                                        <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                        <div className="base-stat">
                            {
                                data.stats.map(poke=>(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                ))
                            }
                        </div>

                    </div>
                    </>
                )

            }
            
        </>
    );
}

export default PokeInfo;