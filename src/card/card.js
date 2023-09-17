import IMDB from '../MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'

function Card(props) {
  return (
    <div data-testid="movie-card" className="feu">
      
        <div key={props.items.id}>
          <img
            data-testid="movie-poster" 
            src={`https://image.tmdb.org/t/p/w500${props.items.poster_path}`}
            alt={props.items.title}
          />
           <p data-testid="movie-release-date" >{props.items.release_date}</p>
          <p data-testid="movie-title"  className="movie-title">{props.items.title}</p>
          <p className='imdb'> <img className="lo" src={IMDB}/>{props.items.vote_average}/10</p>
          <p>{props.items.genres}</p>
        </div>
      </div>
      
  );
}

export default Card;
