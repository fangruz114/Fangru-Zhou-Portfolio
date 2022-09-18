import Modal from "react-modal";

Modal.setAppElement("#root");

const News = () => {


  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Projects</span>
              <h3>Some Things I've Built</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/projects/Lizuvia.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <p className="title">
                  Lizuvia is a website clone inspired by PotteryBarn. It's an e-commerce platform for users to list their home furnitures and decoration products and to place orders for the products.
                </p>
                <div className="tokyo_tm_read_more">
                  <a href='https://lizuvia.herokuapp.com/' target="_blank" rel="noreferrer">
                    <span>Live Site</span>
                  </a>
                </div>
                <div className="tokyo_tm_read_more">
                  <a href='https://github.com/fangruz114/Lizuvia' target="_blank" rel="noreferrer">
                    <span>Github</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/projects/Legendhood.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <p className="title">
                  LegendHood is a website clone inspired by Robinhood. It can be used to find live and past stocks trends, as well as replicate the functionality of buying and selling stocks.
                </p>
                <div className="tokyo_tm_read_more">
                  <a href='https://robinhood-clone-project.herokuapp.com/' target="_blank" rel="noreferrer">
                    <span>Live Site</span>
                  </a>
                </div>
                <div className="tokyo_tm_read_more">
                  <a href='https://github.com/AZensky/Legendhood' target="_blank" rel="noreferrer">
                    <span>Github</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li data-aos="fade-right" data-aos-duration="1200">
            <div className="list_inner">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/projects/Simplybnb.png)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <p className="title">
                  Simplybnb is a clone of the website Airbnb that provides an online marketplace for lodging, primarily home-stays for vacation rentals, and tourism activities.
                </p>
                <div className="tokyo_tm_read_more">
                  <a href='https://airbnb-clone-fangru-zhou.herokuapp.com/' target="_blank" rel="noreferrer">
                    <span>Live Site</span>
                  </a>
                </div>
                <div className="tokyo_tm_read_more">
                  <a href='https://github.com/fangruz114/SimplyBnB' target="_blank" rel="noreferrer">
                    <span>Github</span>
                  </a>
                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}
            </div>
          </li>
          {/* END SINGLE BLOG */}
        </ul>
      </div>
    </>
  );
};

export default News;
