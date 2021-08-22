import React,{ useState } from 'react';
import '../friend/index.css';



export default function Friend(props: any) {
  const [card, setCard] = useState(true);
  const { name, image, actor, about, gif } = props;


  return (
    <>
    <div className="col">
      <div className="card shadow-lg border-0 mx-auto" onClick={()=> {setCard(false)}} style={{maxWidth: "15rem"}}>
        {card ? <img src={image} className="card-img-top image img-fluid" alt="pic"/> :
        <img src={gif} alt="gif" className="card-img-top image img-fluid"/>
        }
        
        <div className="card-img-overlay text-light">
          <h5 className="card-title">{actor}</h5>
          <p className="card-text">{about}</p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </div>
    </div>
    




    
    </>
  );
};