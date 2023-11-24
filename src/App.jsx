/* eslint-disable react/prop-types */
import './App.css'
import Movies from './components/Movies';
import MoviesList3 from './components/MoviesList3';


const App = () => { // This is also a functional component
  console.log("APP is mounted");

  return (
    <>
      <MoviesList3  />
    </>
  )
}

export default App
