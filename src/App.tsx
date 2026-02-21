import './App.css'
import { useEffect, useState } from 'react'
import type { Character, Response } from './types.tsx'
import CharacterList from './components/CharacterList.tsx'
import Error from './components/Error.tsx'   
import { api } from './api/api.ts'
import axios from 'axios'

const App =() => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [error, setError] = useState<string | null>(null)
  const [load, setLoad] = useState<boolean>(true)
  const [next, setNext] = useState<string | null>(null)

  const Characters = async (url: string) => {
    try {
      setLoad(true);
      setError(null);

      const response = url.startsWith("http")
        ? await axios.get<Response>(url)
        : await api.get<Response>(url);

      setCharacters((prev) => [...prev, ...response.data.results]);

      setNext(response.data.next);
    }catch (error: unknown) {
      console.log(error);
      setError("Error al mostrar el personaje");
    }finally{
      setLoad(false);
    }
  };

  useEffect(() => {
    Characters("/people");
  }, [])

  return (
    <div>
      <h1>Star Wars</h1>
      {load && <p>Loading...</p>}
      {error && <Error message={error} />}

      {!error && <CharacterList character={characters} />}

      {next && !load && (
        <button onClick={() => Characters(next)}>Mostrar más</button>
      )}
    </div>
  )
}

export default App;   

