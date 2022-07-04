import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__top">
        <div className="footer__left">
          {/* <p>Suhaib Peechanary</p> */}
          <p>Kozhikode, India - 673007 | <a href="mailto:suhaibp27@gmail.com">suhaibp27@gmail.com</a></p>
          {/* <p>Kozhikode, Kerala</p> */}
          {/* <p>India - 673007</p>
          <p>suhaibp27@gmail.com</p> */}
        </div>
        <div className="footer__middle"></div>
        <div className="footer__right">
          <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icon created by Pixel perfect - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/process" title="process icons">Process icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/photography" title="photography icons">Photography icon created by Eucalyp - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/travel" title="travel icons">Travel icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/movie" title="movie icons">Movie icon created by iconixar - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/music" title="music icons">Music icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/basketball" title="basketball icons">Basketball icon created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-animated-icons/food-and-restaurant" title="food and restaurant animated icons">Food and restaurant animated icon created by Freepik - Flaticon</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Handcrafted by <a href="/">me</a></p><p><span> &#169;</span>twoZeroTwoTwo</p>
      </div>
    </footer>
  )
}

export default Footer