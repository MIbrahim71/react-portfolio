import scrollSVG from "../../../assets/scroll.svg";

export default function ScrollDown() {
  return (
    <div className="home__scroll">
      <a href="" className="home__scroll-button button--flex">
        {/* <img src={scrollSVG} alt="Scroll button" /> */}
        <i class="bx bx-mouse"></i>
        <span className="home__scroll-name">Scroll Down</span>
        <i class="bx bx-down-arrow-alt home__scroll-arrow"></i>
      </a>
    </div>
  );
}
