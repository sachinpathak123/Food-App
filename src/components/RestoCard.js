import React from "react";
import OPS from '../utils/constants'
const RestoCard= ({resName}) => {
    return (  
      <div className="restocard">
          <img className="biryanimg" src={OPS.CDN_URL+resName.info.cloudinaryImageId} alt="" />
          <h3>
              <span className="restoname">{resName.info.name}</span>
          </h3>
          <hr />
          <div className="cuisines">
          <h3>{resName.info.cuisines.join(", ")}</h3>
          </div>
          <div className="ratingdt">
          <h4>{resName.info.avgRating}</h4>
          <h4> {resName.info.sla.deliveryTime} minutes</h4>
          </div>
          <div className="cuisines">
          <button className="menubtn">View Menu</button>
          </div>
      </div>
    );
}
export default RestoCard;