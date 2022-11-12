import React from "react";
import "./startreading.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";



import a from "./b.jpg";
import b from "./c.jpg";
import c from "./d.jpg";
import d from "./e.jpg";
import e from "./a.jpg";
import b1 from "./pics/b1.jpg";
import b2 from "./pics/b2.jpg";
import b3 from "./pics/b3.jpg";
import b4 from "./pics/b4.jpg";
import c1 from "./pics/c1.jpg";
import c2 from "./pics/c2.jpg";
import c3 from "./pics/c3.jpg";
import c4 from "./pics/c4.jpg";
import AA from "./pics/AA.jpg";
import ab from "./pics/slide1.jpg"
import bc from "./pics/slide2.jpg"
import cd from "./pics/slide3.jpg"
import de from "./pics/reslide4.jpg"
import ef from "./reslide2.jpg"


function Startreading() {
  return (
    
    <div className="happy">
      <div className="round">
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
        <div>
        <h6>The finale is almost here but their love is forever🕵️‍♀️</h6>
        <p>Watch the final episodes on october 8th</p>
        <img src={cd} alt="" style={{width: "80%"}} />
      </div>
      <div>
        <h6>When love happens on campus 💓</h6>
        <p>it reads like a college romance tbh</p>
        <img src={ab} alt="" style={{width: "80%"}}/>
      </div>
      <div>
        <h6>Kay needs a coffee break☕</h6>
        <p>but she cant get enough of his brew</p>
        <img src={ef} alt=""style={{width: "80%"}} />
      </div>
      <div>
        <h6>Love.laughter.lies 💌</h6>
        <p>Get lost in these captivating stories</p>
        <img src={de} alt=""style={{width: "80%"}} />
      </div>
      </Carousel>
      </div>
      <div>
  
        <h3>Welcome Home</h3>
        <h2>Top Picks For You</h2>
      </div>
      <div className="wrapper">
        <div className="happycard">
          <img src={a} alt=""  />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">Kidnap</button>
        </div>
        <div className="happycard">
          <img src={b} alt=""  />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">friends</button>
        </div>
        <div className="happycard">
          <img src={c} alt=""  />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">mafia</button>
        </div>
        <div className="happycard">
          <img src={e} alt=""  />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">blood</button>
        </div>
      </div>
      <div className="what">
        <h2>More Of What You Like</h2>
      </div>
      <div className="wrapper">
      <div className="phase">
        <div className="phasecard">
          <img src={b1} alt="" />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">mystical</button>
        </div>
        <div className="phasecard">
          <img src={b2} alt="" />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">war</button>
        </div>
        <div className="phasecard">
          <img src={b3} alt="" />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">sci-fi</button>
        </div>
        <div className="phasecard">
          <img src={b4} alt="" />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">aliens</button>
        </div>
      </div>
      </div>
      
      <div className="d-flex justify-content-center align-items-center text-black px-lg-5 py-lg-5">
        <div className="w-50 px-lg-5 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          tenetur deserunt debitis excepturi voluptates nulla reiciendis
          explicabo doloribus earum harum eos ipsam, recusandae incidunt dolorem
          quidem optio aperiam odit doloremque.
        </div>
        <div className="w-50">
          <img src={AA} alt="" style={{ width: "50%" }} />
        </div>
      </div>
      <div>
        <h2>Audrea Recommends</h2>
      </div>
      <div className="jay">
        <div>
          <img src={c1} alt="" />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">fiction</button>
        </div>
        <div>
          <img src={c2} alt="" />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">sea</button>
        </div>
        <div>
          <img src={c3} alt="" />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">revenge</button>
        </div>
        <div>
          <img src={c4} alt="" />
          <h2 className="card-title"></h2>
          <p className="card_description"></p>
          <button className="cardbtn">competition</button>
        </div>
      </div>
    </div>
  );
}

export default Startreading;
