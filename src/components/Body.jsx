import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { allCardUrl } from "../utils/Constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setRestList] = useState([]);
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
      const res = await fetch(allCardUrl);
      const result = await res.json();
      console.log(result, "result");
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

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 style={{ textAlign: "center" }}>
        You are offline please check your internet connection
      </h1>
    );
  }

  if (loading) {
    return (
      <div className="flex" style={{ height: "50vh" }}>
        <p>loading....</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flex m-3  gap-4 justify-center items-center">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="border border-solid border-black p-2 rounded-lg"
          placeholder="search here"
        />

        <button onClick={handleSearch} className="bg-green-300 p-2 rounded-lg">search</button>
        <button className="bg-green-300 p-2 rounded-lg"
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
      <div className="flex gap-2 flex-wrap justify-center">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
