import { useState, useEffect } from 'react';

type Joke = {
  type: string;
  setup: string;
  punchline: string;
  id: number;
};

const JokeBox = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const data: Joke = await response.json();
    setJoke(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="p-4 rounded shadow-md bg-white">
      {loading ? (
        <div className="animate-spin w-5 h-5 border-t-2 border-blue-500"></div>
      ) : joke ? (
        <>
          <h2 className="text-xl font-bold mb-2 text-black">{joke.setup}</h2>
          <p className="mb-4 text-black">{joke.punchline}</p>
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={fetchJoke}
          >
            Refresh
          </button>
        </>
      ) : (
        <p>No joke available</p>
      )}
    </div>
  );
};

export default JokeBox;