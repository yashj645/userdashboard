import { styled } from "@mui/system";

const DetailWrapper = styled("div")({
  width: "100%;",
});

const DetailContainer = styled("div")({
  maxWidth: "1220px",
  margin: "40px auto",
  padding: "0 20px",
});

const Header = styled("div")({
  display: "flex",
  fontSize: "24px",
  gap: "10px",
  fontWeight: "bold",
  marginTop: "80px",

  [`@media screen and (max-width: 900px)`]: {
    "&.isBorder": {
      borderTop: "1px solid #d2d2d2",
      paddingTop: "20px",
      marginTop: "40px",
    },
  },

  "& > a": {
    color: "#00aced",
    textDecoration: "none",
  },
});

const CardWrapper = styled("div")({
  display: "flex",
  gap: "2%",
  flexWrap: "wrap",

  [`@media screen and (max-width: 900px)`]: {
    flexDirection: "column",
  },
});

const Card = styled("div")({
  width: "27%",
  minHeight: "100px",
  border: "1px solid #000",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "20px 20px 30px",
  marginTop: "30px",

  [`@media screen and (max-width: 900px)`]: {
    width: "unset",
    border: "none",
    padding: 0,
    minHeight: "unset",
  },
});

const CardHeading = styled("h3")({
  fontSize: "16px",
  fontWeight: "bold",
  margin: 0,
  textAlign: "left",
});

const CardDetails = styled("p")({
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  alignItems: "flex-start",
  margin: "10px 0 0",

  "& a": {
    textDecoration: "none",
  },

  "& .isBlue": {
    color: "#00aced",
    fontWeight: "bold",
  },

  "& .isItalic": {
    fontStyle: "italic",
  },

  [`@media screen and (max-width: 900px)`]: {
    "&.isBottomBorder": {
      borderBottom: "1px solid #d2d2d2",
      paddingBottom: "20px",
    },
  },
});

export default {
  DetailWrapper,
  DetailContainer,
  Header,
  CardWrapper,
  Card,
  CardHeading,
  CardDetails,
};
