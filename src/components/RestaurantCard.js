import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwo,
  avgRating,
  locality,
  areaName,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-400">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>
        {locality}, {areaName}.
      </h4>
    </div>
  );
};

export default RestaurantCard;
