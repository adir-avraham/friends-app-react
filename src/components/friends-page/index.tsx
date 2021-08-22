import React from 'react';
import { friends } from '../../data/data';
import Friend from '../friend'
import './index.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Friends(props: any) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
        <section className="py-3 bg-characters">
        <div className="container" style={{maxWidth: "1024px"}}>
            <h1 className="text-center py-1">Friends</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                {friends.filter((element, index, array) => { return element.id < 15 }).map((friend: any) => <Friend key={friend.id} {...friend}/>)}
            </div>
        </div>
     
        <div className="container py-5" style={{maxWidth: "1024px"}}>
        <Carousel 
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
   
          keyBoardControl={true}
          customTransition="all .50s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
        {friends.map((friend: any) => <Friend key={friend.id} {...friend}/>)}
</Carousel>
    </div>
        </section>
  );
};