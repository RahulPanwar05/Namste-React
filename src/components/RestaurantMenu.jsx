import { IMAGE_URL } from "../utils/Constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const { restId } = useParams();
  const resInfo = useRestaurantMenu(restId);

  if (resInfo === null) {
    return <p>loading....</p>;
  }

  const {
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    locality,
    cloudinaryImageId,
  } = resInfo?.data?.cards[2]?.card?.card.info;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating} star</h2>
      <h2>near by :{locality}</h2>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwoMessage}</h2>
      <img src={IMAGE_URL + cloudinaryImageId} alt="" />
    </div>
  );
}

export default RestaurantMenu;
