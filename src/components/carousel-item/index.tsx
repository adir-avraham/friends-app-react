import React from 'react';




export default function CarouselItem(props: any) {

    const { image, id } = props;
    console.log(image)
    return (
        <>
        
        {id === 1 ?                 <div className="carousel-item active">
            <img src={image} className="d-block w-100" alt="..." height="800px"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div> 
          :
        
          <div className="carousel-item">
          <img src={image} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div> 
}
     </>


    )



}