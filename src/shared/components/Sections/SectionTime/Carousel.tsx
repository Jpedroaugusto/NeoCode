import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/src/assets/sass/glide.core.scss";

import { Border } from "../../Dialog/Border";

import members from "./Members";

export function Carousel() {
  useEffect(() => {
    const slider = new Glide(".glide", {
      type: "carousel",
      focusAt: "center",
      breakpoints: {
        3200: {
          perView: 3,
        },
        1100: {
          perView: 2,
        },
        700: {
          perView: 1,
        },
      },
    });
    slider.mount();
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">
          {members.map((member) => (
            <div className="glide__slide">
              <img className="member" src={member.image} />
              <h1>{member.name}</h1>
              <h2>{member.funcao}</h2>
              <br />
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Border width={100} color={"#fff"} />
              </div>

              {/* <div className='sociais'>
                  { 
                      member.sociais.map(social => (
                          <a href={social.link} target="_blank"><img className='ico--social' src={social.svg}/></a>
                      ))
                  }
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
