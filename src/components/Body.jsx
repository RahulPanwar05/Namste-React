import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useRef, useState } from "react";

const Body = () => {
  const [resList, setRestList] = useState(restaurantList);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    const filteredList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRes(filteredList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2694012&lng=78.0564035&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const result = await res.json();
      setFilteredRes(
        result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setRestList(
        result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setLoading(false);
    } catch (error) {
      console.log(error, "error in fetchin data");
    }
  };

  if (loading) {
    return (
      <div className="flex" style={{height:'50vh'}}>
        <p>loading....</p>
      </div>
    );
  }

  return (
    <div className="body-container">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button onClick={handleSearch}>search</button>
        <button
          onClick={() => {
            const topRatedRes = filteredRes.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setFilteredRes(topRatedRes);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="card-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
