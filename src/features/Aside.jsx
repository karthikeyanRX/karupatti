import handImage from "./image/hand.png";
import home from "./image/home.jpg";
import karupativellam from "./image/karupativellam.jpg";
import rice from "../features/image/rice.png";
import oil from "./image/oil.jpg";
import healthmix from "./image/healthmix.jpg";
import backGroundImage from "./image/teaEstate.jpg";
import karupatti from "./image/karupatti.jpg";

const Aside = () => {
  return (
    <div className="background">
      <div className="iconsimage">
        <img src={home} alt="home" className="icon1" />
        <img src={karupativellam} alt="karupativellam" className="icon2" />
        <img src={rice} alt="rice" className="icon3" />
        <img src={oil} alt="oil" className="icon4" />
        <img src={healthmix} alt="healthmix" className="icon5" />
      </div>
      <div className="handimage">
        <img src={handImage} alt="Hand waving" className="handTransition" />
      </div>
      <div className="karupatti">
        <img src={karupatti} alt="karupatti" />
      </div>
    </div>
  );
};

export default Aside;
