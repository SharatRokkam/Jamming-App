import {
  Eject,
  Mic,
  MoreHoriz,
  Videocam,
  VolumeUp,
} from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_wrapper">
          <div className="footer_left">
            <div className="footer_box">
              <div>
                <Eject />
              </div>
              <p></p>
              <div>
                <span>0004</span>
                <span>Bar</span>
              </div>
              <p></p>
              <div>
                <span>1</span>
                <span>Beat</span>
              </div>
              <p></p>
              <div>
                <span>+ 120 -</span>
                <span>Tempo</span>
              </div>
              <p></p>
              <div>
                <span>4/4</span>
                <span>Cmaj</span>
              </div>
            </div>
            <div className="circle">
              <div className="inner_circle"></div>
            </div>
          </div>
          <div className="footer_right">
            <div className="endjam">
              <span>End Jam</span>
            </div>
            <div className="audio_icons">
              <div>
                <Mic style={{ fontSize: "2.3rem", color: "white" }} />
              </div>
              <div>
                <Videocam style={{ fontSize: "2.3rem", color: "white" }} />
              </div>
              <div>
                <VolumeUp style={{ fontSize: "2.3rem", color: "white" }} />
              </div>
              <div>
                <MoreHoriz style={{ fontSize: "2.3rem", color: "white" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
