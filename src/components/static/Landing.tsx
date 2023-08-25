import React from "react";
import { FlexColumn, FlexRow } from "../shared/Flex";
import { Link } from "react-router-dom";
import "../../landing.css";
import { StyledLink } from "../shared/Link";

export const Landing = () => {
  return (
    <FlexColumn width="100%" className="main">
      {/* <FlexRow
        as="header"
        width="100%"
        height="40px"
        // background="#bbebf6"
        padding="0 100px"
        alignItems="center"
        // justifyContent="center"
      > */}
      <Link to="/auth" className="auth-link">
        Authorization
      </Link>

      {/* </FlexRow> */}

      <FlexColumn width="100%">
        <div className="start-div">
          <FlexRow
            as="header"
            width="100%"
            justifyContent="space-between"
            padding="50px 80px"
            alignItems="center"
          >
            {/* <Link to="/auth" className="auth-link">
              SeeUp
            </Link> */}
            <a href="#" className="see-up">
              SeeUp
            </a>
            <div className="nav">
              <a href="#" className="header-link">
                About Us
              </a>
              <a href="#" className="header-link">
                Tours
              </a>
              <a href="#" className="header-link">
                Contacts
              </a>
              <a href="#">
                <img
                  src="./images/menu.png"
                  alt="menu"
                  className="burger-menu"
                />
              </a>
            </div>
          </FlexRow>
          <FlexColumn width="920px" margin="auto" alignItems="center">
            <div className="text">
              <h1>Montenegro</h1>
              <p>
                Welcome to magical Montenegro: where the blue Adriatic waves lap
                the mountain peaks and cultural treasures have long beckoned
                travelers. Go on an unforgettable journey with us!
              </p>
              <button className="go-btn">Let's Go!</button>
            </div>
          </FlexColumn>
        </div>

        <div className="we-offer">
          <div className="section-1">
            <h4>What we offer</h4>
            <p>
              The incredible landscapes of Montenegro are a fairy-tale world of
              natural beauty.{" "}
            </p>
            <div></div>
            <img
              src="/dashboard/public/images/offer-1.jpg"
              alt="img"
              className="offer-1"
            />
          </div>
          <div className="section-2">
            <img
              src="/dashboard/public/images/offer-2.jpg"
              alt=""
              className="offer-2"
            />
            <p>
              Mountain lakes, waterfalls,green valleys and clean beaches - all
              this awaits you. Feel the harmony with nature.
            </p>
          </div>
        </div>

        <div className="we-offer2">
          <div className="section-3">
            <p>
              Delicious local cuisine Montenegro is famous for its unique
              cuisine. Try dishes made from local products and enjoy authentic
              flavors.{" "}
            </p>
            <div></div>
            <img
              src="/dashboard/public/images/offer-3.jpg"
              alt="img"
              className="offer-1"
            />
          </div>
          <div className="section-4">
            <img
              src="/dashboard/public/images/offer-4.jpg"
              alt=""
              className="offer-2"
            />
            <p>
              Historical assets Ancient cities, castles and fortresses will tell
              you the history of Montenegro. You will immerse yourself in the
              feeling of the past and discover the secrets of this unique
              country
            </p>
          </div>
        </div>

        <div className="review">
          <div className="h-div">
            <h4>Reviews</h4>
            <img
              src="/dashboard/public/images/right-arrow.png"
              alt=""
              className="arrow"
            />
          </div>

          <div className="people">
            <div className="person-1">
              <div className="foto-name1">
                <div className="foto1">
                  <div className="img1"></div>
                  <div className="name">
                    <h5>Pedro Fabia</h5>
                    <div className="stars">
                      <img src="/dashboard/public/images/Star.png" alt="" />
                      <img src="/dashboard/public/images/Star.png" alt="" />
                      <img src="/dashboard/public/images/Star.png" alt="" />
                      <img src="/dashboard/public/images/Star.png" alt="" />
                      <img src="/dashboard/public/images/Star.png" alt="" />
                    </div>
                  </div>
                  <span>May 29th, 2023</span>
                </div>
              </div>
              <p>
                I have always dreamed of seeing the Adriatic coast and this tour
                exceeded all my expectations. Visiting mountain lakes and beach
                areas was an unparalleled experience. Best of all, the tour was
                well planned and the local food left an unforgettable taste
              </p>
            </div>

            <div className="person-1">
              <div className="foto-name1">
                <div className="foto1">
                  <div className="img2"></div>
                  <div className="name">
                    <h5>Ivan Vaseva</h5>
                    <div className="stars">
                      <img src="/dashboard/public/images/Star.png" alt="" />
                      <img src="/dashboard/public/images/Star.png" alt="" />
                      <img src="/dashboard/public/images/Star.png" alt="" />
                      <img src="/dashboard/public/images/Star.png" alt="" />
                      <img src="/dashboard/public/images/Star.png" alt="" />
                    </div>
                  </div>
                  <span>June 16th, 2023</span>
                </div>
              </div>
              <p>
                My trip to Montenegro was unforgettable! From mountain scenery
                to enchanting beaches, this tour had it all. Especially
                memorable were the visits to ancient cities, where the
                atmosphere of ancient times was felt. The guides were very
                professional and friendly, they made me feel at home
              </p>
            </div>
          </div>
        </div>

            <div className="form-div">
              <h3>Don't waste time - choose the best for your trip to Montenegro with us. Plan your adventure today!</h3>
              <div className="form">
              <input type="text" placeholder="SELECT TOUR"/>
              <input type="text" placeholder="SELECT DATE"/>
              <input type="number" placeholder="NUMBER OF GUESTS"/>
              <button>BOOK TOUR</button>
              </div>
            </div>

            <div className="footer">
              <a href="" className="logo">SeeUp</a>
              <div className="contacts">
                <h5>Contacts</h5>
                <a href="">montenegrotour@gmail.com</a>
                <a href="">+7 897 897 897 99</a>
              </div>
              <div className="socials">
                <img src="/dashboard/public/images/instagram.png" alt="" />
                <img src="/dashboard/public/images/fb.png" alt="" />
                <img src="/dashboard/public/images/linkIn.png" alt="" />
              </div>
            </div>

      </FlexColumn>
    </FlexColumn>
  );
};
