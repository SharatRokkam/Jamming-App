import { Duo, Menu, Videocam } from "@mui/icons-material";
import styled from "styled-components";
import data from "../data";
import "./Content.css";

const Box = styled.div`
  background: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Content = ({ users }) => {
  const layout = users === 1 ? "oneUser" : "";
  console.log(layout);
  return (
    <>
      <div className="main">
        <div className="content_wrapper">
          <div className="content_left">
            <div>
              <Videocam
                style={{
                  fontSize: "2.5rem",
                  color: "orange",
                  cursor: "pointer",
                }}
              />
            </div>
            <div>
              <Menu
                style={{ fontSize: "2.5rem", color: "gray", cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="content_right">
            {data.map(
              (item, index) =>
                index < users && (
                  <Box
                    image={item.image}
                    key={item.id}
                    id={layout}
                    className="box_container"
                  >
                    {item.isHost && (
                      <div className="host">
                        <span>(HOST)</span> <Duo />
                      </div>
                    )}
                    <div className="name">
                      <h3>{item.name}</h3>
                    </div>
                  </Box>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
