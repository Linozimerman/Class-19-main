

function Movies(props) { 
    const {title,director, _id, hasOscars} = props.eachMovie
    return (
        < li key= {_id}> 
            <h2> {title}</h2>
            <h3>{director}</h3>
            <p>{hasOscars ? "🦚" : "😭"}</p>
        </li >
    )
}

export default Movies;


//<button onClick={() => deleteMovie(eachMovie._id)}>DELETE</button>





