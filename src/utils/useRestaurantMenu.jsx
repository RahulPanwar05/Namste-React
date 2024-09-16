import { useEffect, useState } from "react";
import { proxyUrl } from "./Constant";

const useRestaurantMenu = (restId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        proxyUrl +
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const restaurantData = await res.json();
      setResInfo(restaurantData);
    } catch (error) {
        console.error('error in fetching restaurant data',error)
    }
  };

  console.log(resInfo, "resinfo");

  return resInfo;
};

export default useRestaurantMenu;
