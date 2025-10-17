import { useState, useEffect } from "react";

export function ContentTest2() {
  return (
    <>
      <div></div>
    </>
  );
}

function DateFather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMaunted = true;
    setLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const responsev = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        if (!responsev.ok) throw new Error("что то пошло не так");
        const json = await responsev.json();
        if (isMaunted) setData(json);
      } catch (err) {
        if (isMaunted) setError(err.message);
      } finally {
        if (isMaunted) setLoading(false);
      }
    }
    fetchData();
    return () => {
      isMaunted(false);
    };
  }, []);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <>
      <div>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    </>
  );
}
