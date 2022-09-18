import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/headshot.jpeg)",
              }}
            ></div>
          </div>
          <div className="details">
            <h3 className="name">Fangru Zhou</h3>
            <p className="job">
              Full Stack Software Engineer | JavaScript | Python | React | Redux | HTML | CSS | Express | Flask | Sequelize | SQLite | Docker
            </p>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
