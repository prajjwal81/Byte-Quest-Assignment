import Image from "next/image";
import { AllBags } from "../Utils/constants";
import Styles from "../styles/Home.module.css";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Box } from "@mui/material";

function Bags() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "17vh",
          overflow: "auto",
          justifyContent: "center",
          scrollPaddingLeft: 0,
        }}
      >
        {AllBags.map((item, idx) => {
          return (
            <div key={idx}>
              <Image
                src={item.Img}
                style={{ height: "10em", width: "8em", marginRight: "3vw" }}
              />
              <figcaption className={Styles.imageText}>{item.names}</figcaption>
            </div>
          );
        })}
      </div>
      <Box
        sx={{
          marginTop: "6vh",
          pl: { sx: "0", md: "3em" },
          pr: { sx: "0", md: "6em" },
        }}
      >
        <span className={Styles.bagsAndBackpacksStyling}>
          Bag ・ Packs{" "}
          <span style={{ float: "right" }}>
            13 Products <IosShareIcon />
          </span>
        </span>
      </Box>
    </div>
  );
}

export default Bags;
