import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [prod, setProd] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    //  iffy: immediately invoked functions
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await axios.get('/api/products?search='+ search);
        console.log(res.data);
        setProd(res.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [search]);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong.</h1>}
      <input
        placeholder="Search..."
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Number of Products are:{prod.length}</h2>
    </>
  );
}

export default App;
