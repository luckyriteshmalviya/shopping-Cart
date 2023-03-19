import "./button.css";

const SmallSizeButton = ({ text, title }) => {
  return (
    <abbr title={title} className="small-size-button">
      {text}
    </abbr>
  );
};

const MidSizeButton = ({ text }) => {
  return <div class="mid-size-button">{text}</div>;
};

export { SmallSizeButton, MidSizeButton };
