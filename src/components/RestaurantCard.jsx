import { IMAGE_URL } from "../utils/Constant";

const RestaurantCard = ({resData}) => {
    const {name, avgRating,cuisines,cloudinaryImageId,sla,costForTwo} = resData

    return (
      <div className="res-card">
        <div className="res-logo">
        <img
          className="res-image"
          src={IMAGE_URL+cloudinaryImageId}
        />
        </div>
        <h2>{name}</h2>
        <h3>{avgRating} star</h3>
        <h3>Delivery Time: {sla?.slaString}</h3>
        <h3>{costForTwo}</h3>
        <h3 style={{overflowWrap:"break-word"}}>{cuisines.join(" , ")}</h3>
      </div>
    );
  };

  export default RestaurantCard