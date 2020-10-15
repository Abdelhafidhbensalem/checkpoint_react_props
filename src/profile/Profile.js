import React from 'react';
import PropTypes from "prop-types";
import '../App.css';

const Profile = (props) => {
  
  return (
  <> 
<section className="Profile">
{props.handleName(props.fullName)}
  <div className="portfolio-wrapper">
    {props.children}
    <div className="portfolio__bottom">
    <h1 style={{color: "#c18f59",fontSize: "30px",textAlign:"center"}}>{props.fullName}</h1>
    <p style={{padding: "0 10%",lineHeight: "25px",fontStyle:"italic",color: "#777",fontSize: "18px",textAlign:"center"}}>{props.profession}</p>
    </div>
  </div>
  <div className="about-me__text" >
    <h2 className="universal-h2 universal-h2-bckg" style={{fontSize: "30px",textAlign:"center"}}>About me</h2>
    <p style={{color: "#c18f59",lineHeight: "24px",fontSize: "18px",textAlign:"center"}}>{props.bio}</p>
  </div>
</section>
</>
    );
  };

Profile.defaultProps={
    fullName:"Abdelhafidh BEN SALEM",
    profession:"Mechanical engineer and Web Developper",
    bio:`Hi! I'm Abdelhafidh BEN SALEM. I'm a Mechanical engineer and Web Developper.I want develop my skills to be a good developer and to create a beautiful space on the internet.
    I hope you love the profile, and if there's anything you want to talk about with me feel free to drop me a line by email:*bensalemabdelhafidh@gmail.com*. I'm happy to hear your comments, feedback, suggestions, or just say hi! `
}

Profile.propTypes ={
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  handleName: PropTypes.func,
};
  
   export default Profile;