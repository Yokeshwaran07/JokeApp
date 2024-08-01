import React, { useState } from 'react';

function App() {
  const [post, setPost] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?");
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-blue-100">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">React Joke App</h1>
        <button
          onClick={fetchJoke}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Get Joke
        </button>
        <div className="mt-4">
          {post ? (
            <p className="text-lg mt-2">
              {post.joke}
            </p>
          ) : (
            <p className="text-lg mt-2">No joke available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

