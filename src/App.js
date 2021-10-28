import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);

  const removetour = (id) => {
    const newtour = tours.filter((tour) => tour.id !== id);
    settours(newtour);
  };

  const fetchdata = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      settours(tours);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">No Tours left</div>
        <button className="btn" onClick={() => fetchdata()}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removetour={removetour} />
    </main>
  );
}

export default App;
