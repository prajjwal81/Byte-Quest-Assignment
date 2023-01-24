import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Data } from "../Utils/constants";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Styles from "../styles/Home.module.css";

function ProductCard() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "4vh",
          justifyContent: "center",
        }}
      >
        {Data.map((data, idx) => {
          return (
            <div style={{ flex: "0 1 24%" }} key={idx}>
              <Card
                sx={{
                  maxWidth: 320,
                  background: "black ",
                  position: "relative",
                }}
              >
                <span>
                  <BookmarkBorderIcon
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                    }}
                  />
                </span>

                <Image
                  src={data.image}
                  style={{
                    height: 330,
                    width: "95%",
                    marginLeft: "8px",
                    marginTop: "20px",
                    borderRadius: "10px",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Encode Sans",
                      fontSize: "20px",
                      fontWeight: 500,
                      lineHeight: "26px",
                      letterSpacing: "0.05em",
                      color: "whitesmoke",
                    }}
                  >
                    {data.name}
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{ display: "flex" }}
                    >
                      {data.price}
                      <del className={Styles.del}> {data.actualPrice}</del>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="green"
                      className={Styles.del}
                    >
                      {data.discount}
                    </Typography>

                    <AddShoppingCartIcon
                      sx={{
                        display: { xs: "flex" },
                        mr: 1,
                        color: "white",
                        marginLeft: "3em",
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
