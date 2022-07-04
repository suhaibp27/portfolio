import React from 'react'
import './Hobbies.css'
import Photography from '../media/photography.png';
import Coding from '../media/coding.png'
import Travel from '../media/travel.png';
import Movie from '../media/movie.png';
import Listen from '../media/listen.png';
import Balls from '../media/balls.png'

const Hobbies = () => {
  return (
    <div className='hobbies'>
        <h3 className="hobbies__title">What I Like</h3>
        <div className="hobbies__icons">
            <div className="hobbies__icon__container">
                <img src={Photography} className="hobbies__icon" alt="Photography" />
                <div className='hobbies__icon__title'>Photography</div>
            </div>
            <div className="hobbies__icon__container">
                <img src={Coding} className="hobbies__icon" alt="Coding" />
                <div className='hobbies__icon__title'>Coding</div>
            </div>
            <div className="hobbies__icon__container">
                <img src={Travel} className="hobbies__icon" alt="Travelling" />
                <div className='hobbies__icon__title'>Travelling</div>
            </div>
            <div className="hobbies__icon__container">
                <img src={Movie} className="hobbies__icon" alt="Watching movie" />
                <div className='hobbies__icon__title'>Watching movies</div>
            </div>
            <div className="hobbies__icon__container">
                <img src={Listen} className="hobbies__icon" alt="Listening to Music" />
                <div className='hobbies__icon__title'>Listening to Music</div>
            </div>
            <div className="hobbies__icon__container">
                <img src={Balls} className="hobbies__icon" alt="Playing Basketball & Soccer" />
                <div className='hobbies__icon__title'>Basketball & Soccer</div>
            </div>
                {/* <img src={Photography} className="hobbies__icon" alt="Photography" />
                <img src={Coding} className="hobbies__icon" alt="Coding" />
                <img src={Travel} className="hobbies__icon" alt="Travelling" />
                <img src={Movie} className="hobbies__icon" alt="Watching movie" />
                <img src={Listen} className="hobbies__icon" alt="Listening to Music" />
                <img src={Balls} className="hobbies__icon" alt="Playing Basketball & Soccer" /> */}
        </div>
    </div>
  )
}

export default Hobbies