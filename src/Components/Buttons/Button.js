import "./Button.css";

const IncButton = () => {
  return (
    <abbr title="Add to Cart" className="cart-increment">
      +
    </abbr>
  );
};

const DecButton = () => {
  return (
    <abbr title="Remove Cart" className="cart-increment">
      -
    </abbr>
  );
};

const MidSizeButton = ({text})=>{
  return(
    <div class="mid-size-button">{text}</div>
  )
}

export { IncButton, DecButton, MidSizeButton };
