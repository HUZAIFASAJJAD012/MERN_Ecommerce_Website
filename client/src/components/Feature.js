import "../styles/Feature.css";
const Feature = () => {
  return (
    <div>
      <div id="feature">
        
        <div className="fe-box">
          <img
            src={require("../components/image/Freeshiping.png")}
            alt="Description of the image"
          />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img
            src={require("../components/image/onlineorder.png")}
            alt="Description of the image"
          />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img
            src={require("../components/image/savemoney.png")}
            alt="Description of the image"
          />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img
            src={require("../components/image/Deal.png")}
            alt="Description of the image"
          />
          <h6>Daily Deal</h6>
        </div>
        <div className="fe-box">
          <img
            src={require("../components/image/support.png")}
            alt="Description of the image"
          />
          <h6>24/7 Support</h6>
        </div>
      </div>
    </div>
  );
};

export default Feature;
