import IMDB from '../MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'

function Card(props) {
  return (
    <div className="feu">
      
        <div key={props.items.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${props.items.poster_path}`}
            alt={props.items.title}
          />
           <p>{props.items.release_date}</p>
          <p className="movie-title">{props.items.title}</p>
          <p className='imdb'> <img className="lo" src={IMDB}/>{props.items.vote_average}/10</p>
          <p>{props.items.genres}</p>
        </div>
      </div>
      
  );
}

export default Card;
