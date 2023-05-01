import React from "react";
import "./Home.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";

import feathers from "./images/feather.png";
import chasing from "./images/chasing-red.png";
import black from "./images/black-eye.png";
import white from "./images/white-stag.png";
import walter from "./images/walter-boys.png";
import hero from "./images/hero-devices.png";
import footer from "./footer-devices.png";

function Home() {
  
  return (
    <div className="home-page">
      <div className="d-flex justify-content-center align-items-center gap-lg-5 py-lg-5">
        <div className="d-flex flex-column gap-lg-2 justify-content-center align-items-center w-50">
            <h1 className="hi">Hi there, we are </h1>
            <span className="audrea">AUDREA</span> 

            <h2 className="escape">Your favorite escape from reality🌻</h2>
          
          <div className="button">
            <a href="./Startreading" role="button">
              <button className="btn">Read Here</button>
            </a>
            <a href="./write" role="button">
              <button className=" btn">Write Here</button>
            </a>
            <a href="./audiobook" role="button">
              <button className=" btn">Audio Books</button>
            </a>
          </div>
        </div>
        <div className="w-50 ">
          <img src={hero} alt="Hero" style={{ width: "90%" }} />
        </div>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center bg-white py-5 gap-2">
        <h3 className="font-weight-bold">See Your Story....</h3>
        <div className="w-full d-flex gap-lg-5 justify-content-center align-items-center bg-white py-2">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src="./images/book-icon.svg" alt="" />
            <p>Get published</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src="./images/tv-icon.svg" alt="" />
            <p>Get produced to movie or film</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src="./images/reel-icon.svg" alt="" />
            <p>Get adapted to a tv series</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center text-white py-5 px-lg-5">
        <div className="w-50">
          <img
            src="./images/wattpadStudiosPoster.png"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="w-50 px-xl-5">
          <h2 className="">
            Your story could be <br></br>
            <span className="highlight">The Next Big Hit</span>
          </h2>
          <p className="te">
            Audrea discovers untapped, unsigned, and talented writers on Audrea
            and connects them to global multi-media entertainment companies.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center text-white px-lg-5 py-lg-5 ff-sans-serif">
        <div className="w-50 px-lg-5">
         <p className="te"> Your voice belongs on bookshelves Audrea aspires to recognize and
          reflect diverse voices by taking stories to published book and onto
          bookshelves around the world</p>
        </div>
        <div className="w-50">
          <img src="./images/Poster.png" alt="" style={{ width: "40%" }} />
        </div>
      </div>
      <section className="d-flex flex-column justify-content-center align-items-center bg-white text-black px-lg-5 py-xl-5">
        <h2>How Audrea Works</h2>
        <p className="text-muted">
          Get your story discovered through the power of community and
          technology on Wattpad.
        </p>
        <div className="d-flex justify-content-center align-items-center gap-lg-5">
          <div style={{width: '25%'}} className='d-flex gap-4 align-items-start'>
            <h1 style={{fontSize: '5rem'}}>1</h1>
            <p className="te">
              Create <br></br>Share your unique voice and original story on
              Audrea.
              <br></br> Find the writing resources you need to craft a story
              only you can tell.
            </p>
          </div>
          <div style={{width: '25%'}} className='d-flex gap-4 align-items-start'>
            <h1 style={{fontSize: '5rem'}}>2</h1>
            <p className="te">
              Build <br></br>
              Establish a global fan base as your story gains readership and
              momentum.<br></br> Connect with other like-minded writers through
              storytelling.
            </p>
          </div>
          <div style={{width: '25%'}} className='d-flex gap-4 align-items-start'>
            <h1 style={{fontSize: '5rem'}}>3</h1>
            <p className="te">
              Amplify <br></br>Gain Audrea Star status and get your story
              published or adapted into film or television with Audrea Books and
              Audrea Studios!
            </p>  
          </div>
        </div>
      </section>
      <div className="w-full px-xxl-5">
        <Carousel
          autoPlay={true}
          interval={3000}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          stopOnHover={false}
          className={`pt-lg-5 w-75`}
        >
          <div className="d-flex justify-content-center align-items-center text-white">
            <img src={chasing} alt="" />
            <p className="te">
              Chasing Red was one of 2016’s most-read stories on Audrea{" "}
              <br></br>
              -- and that was just the beginning for this
              Winnipeg-Manitoba-based writer. In a single year, her explosive
              hit has racked up over 127 million reads on Wattpad.<br></br>{" "}
              Newly edited and expanded, the book was split into two and hit
              bookstore shelves in 2017.
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center text-white">
            <img src={feathers} alt="" />
            <p className="te">
              Having been active on Audrea for several years, I knew it would be
              the perfect platform for a thriller with lots of cliffhangers for
              readers to discuss.<br></br> Teen horror is my passion, so I can’t
              wait to be able to share Light as a Feather with other horror
              aficionados on Hulu<br></br>.Having been active on Audrea for
              several years, I knew it would be the perfect platform for a
              thriller with lots of cliffhangers for readers to discuss.
              <br></br> Teen horror is my passion, so I can’t wait to be able to
              share Light as a Feather with other horror aficionados on Hulu.
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center text-white">
            <img src={white} alt="" />
            <p className="te">
              Kara Barbieri is a twenty-two year old author with a love for the
              weird and mystic. Her debut novel, WHITE STAG, will be published
              by Wednesday Books/Macmillan in January 2019.
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center text-white">
            <img src={walter} alt="" />
            <p className="te">
              Ali Novak is a Wisconsin native and a graduate of the University
              of Wisconsin-Madison's creative writing program. She started
              writing her debut novel My Life with the Walter Boys when she was
              only fifteen. Since then, her work has received more than 150
              million hits online and My Life with the Walter Boys has been
              optioned for television by Komixx Entertainment and Sony Pictures
              Television.
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center text-white">
            <img src={black} alt="" />
            <p className="te">
              Benjamin Sobieck is a Wattpad Star and editor of “The Writer’s
              Guide to Wattpad,” published in August 2018 by Writer’s Digest
              Books and featuring contributions by 23 Audrea Stars,
              ambassadors, and staff. His stories on Wattpad, such as “When the
              Black-Eyed Children Knock,” have drawn more than 1.5 million
              reads.
            </p>
          </div>
        </Carousel>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center py-5 gap-2d-flex justify-content-center align-items-center text-white bg-orange fw-light fs-larger">
          <p className="Te">Take Audrea with you <br></br>Read,write and listen anywhere, even <span className="online">OFFLINE</span>😎</p>

          <img src={footer} alt=""  style={{ width: "60%" }}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
