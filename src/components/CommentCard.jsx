const ItemCard = ({
  category_name,
  description,
  img_url,
  item_id,
  item_name,
  price,
}) => {
  return (
    <div className="ListCard">
      <h3>{item_name}</h3>
      <img src={img_url} alt="" />
      <p>{description}</p>
      <p>£{price}</p>
    </div>
  );
};

export default ItemCard;
