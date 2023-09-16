import Card from './card/card'
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carouselpage from './component/Carouselpage';
import Navigator from './component/navigator';
import Footer from './Footer/Footer';


import { useEffect, useState } from 'react';

function App() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=467f875d76ce5f71c9257058f2d8e992")
      .then(response => response.json())
      .then(data => {
        setMovie(data.results);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const carousel = movie.map(items => (
    <Carouselpage
      key={items.id}
      items={items}
    />
  ));

  const card = movie.map(items => (
    <Card
      key={items.id}
      items={items}
    />
  )); 

  return (
    <div>
      <Navigator />
      <Carousel responsive={responsive}>
        {carousel}
      </Carousel>
      <h2>Feature Movie</h2>
      {card} 
      <div className="app-container">
      </div>
      <Footer />
    </div>
  );
}

export default App;
