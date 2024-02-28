function RestaurantButton(Props){
    return (
      <button onClick={Props.orderOne} className="button restaurant__button">
        Add
      </button>
    );
}


export default RestaurantButton;