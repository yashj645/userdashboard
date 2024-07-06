import { styled } from "@mui/system";

const HomeWrapper = styled("div")({
  width: "100%",
});

const HomeContainer = styled("div")({
  maxWidth: "1440px",
  margin: "40px auto",
});

const Header = styled("header")({
  display: "flex",
  alignItems: "center",
  maxWidth: "900px",
  margin: "0 auto",

  [`@media screen and (max-width: 900px)`]: {
    padding: "0 20px",
  },

  [`@media screen and (max-width: 768px)`]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

const Heading = styled("h3")({
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
});

const InputWrapper = styled("div")({
  display: "flex",
  marginLeft: "auto",
  gap: "15px",

  [`@media screen and (max-width: 768px)`]: {
    marginLeft: "unset",
    flexDirection: "column",
    width: "100%",
    marginTop: "15px",
  },
});

const Body = styled("ul")({
  listStyleType: "none",
  maxWidth: "900px",
  margin: "30px auto",
  padding: 0,
});

const BodyItem = styled("li")({
  display: "flex",
  alignItems: "center",
  padding: "15px",
});

const Profile = styled("div")({
  height: "60px",
  width: "60px",
  borderRadius: "100%",
  background: "#d2d2d2",

  [`@media screen and (max-width: 500px)`]: {
    height: "40px",
    width: "40px",
  },

  [`@media screen and (max-width: 374px)`]: {
    height: "30px",
    width: "30px",
  },
});

const TextData = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: "30px",

  [`@media screen and (max-width: 500px)`]: {
    marginLeft: "15px",
  },
});

const Name = styled("p")({
  margin: 0,
  textAlign: "left",

  [`@media screen and (max-width: 500px)`]: {
    fontSize: "12px",
  },
});

const Username = styled("p")({
  margin: 0,
  textAlign: "left",

  [`@media screen and (max-width: 500px)`]: {
    fontSize: "12px",
  },
});

const Email = styled("p")({
  margin: 0,
  marginLeft: "auto",

  "& > a": {
    color: "#00aced",
    textDecoration: "none",
  },

  [`@media screen and (max-width: 500px)`]: {
    fontSize: "12px",
  },
});

const Link = styled("a")({
  display: "block",
  backgroundColor: "#f7f7f7",
  border: "1px solid #d2d2d2",
  textDecoration: "none",
  color: "#6f6f6f",

  "&:not(:nth-child(1))": {
    borderTop: "none",
  },

  "&:nth-child(even)": {
    backgroundColor: "#fff",
  },
});

export default {
  HomeWrapper,
  HomeContainer,
  Heading,
  Header,
  InputWrapper,
  Body,
  BodyItem,
  Profile,
  TextData,
  Name,
  Username,
  Email,
  Link,
};
