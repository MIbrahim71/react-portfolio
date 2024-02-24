import scrollSVG from "../../../assets/scroll.svg";

export default function ScrollDown() {
  return (
    <div className="home__scroll">
      <a href="" className="home__scroll-button button--flex">
        <img src={scrollSVG} alt="Scroll button" />
      </a>
    </div>
  );
}
