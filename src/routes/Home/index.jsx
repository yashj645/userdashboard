import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "api/slice/users";
import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { debounce } from "lodash";
import Styled from "./styles";

function Home() {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("name");
  const [searchValue, setSearchValue] = useState("");
  const [visibleData, setVisibleData] = useState([]);
  const users = useSelector((state) => state.users);
  const { isLoading, data: userData } = users;

  const sortDataCallback = useCallback(function sortData(data) {
    const inputData = [...data]

    switch(sort) {
      case 'name': 
        inputData.sort((a,b) => a.name.localeCompare(b.name))
        break
      case 'username': 
        inputData.sort((a,b) => a.username.localeCompare(b.username))
        break
      case 'email': 
        inputData.sort((a,b) => a.email.localeCompare(b.email))
        break
    }

    return inputData
  }, [sort])

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (userData) {
      if (searchValue.length === 0) {
        setVisibleData(sortDataCallback(userData));
      } else {
        let latestFilteredData = []
        const filteredName = userData.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        const filteredUsername = userData.filter((item) =>
          item.username.toLowerCase().includes(searchValue.toLowerCase())
        );
        const filteredEmail = userData.filter((item) =>
          item.email.toLowerCase().includes(searchValue.toLowerCase())
        );

        if (
          filteredName.length > filteredUsername.length &&
          filteredName.length > filteredEmail.length
        ) {
          latestFilteredData = filteredName
        } else if (filteredUsername.length > filteredEmail.length) {
          latestFilteredData = filteredUsername
        } else {
          latestFilteredData = filteredEmail
        }
        setVisibleData(sortDataCallback(latestFilteredData));
      }
    }
  }, [searchValue, userData, sortDataCallback]);

  const handleDebounceInput = debounce(
    (event) => handleInputChange(event),
    300
  );

  function handleChange(event) {
    setSort(event.target.value);
  }

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <Styled.HomeWrapper>
      <Styled.HomeContainer>
        <Styled.Header>
          <Styled.Heading>Users</Styled.Heading>
          <Styled.InputWrapper>
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onChange={handleDebounceInput}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort By"
                onChange={handleChange}
                style={{ textAlign: "left" }}
              >
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="username">Username</MenuItem>
                <MenuItem value="email">Email</MenuItem>
              </Select>
            </FormControl>
          </Styled.InputWrapper>
        </Styled.Header>
        {isLoading ? (
          <Styled.Body>
            <CircularProgress></CircularProgress>
          </Styled.Body>
        ) : (
          <Styled.Body>
            {visibleData.map((item) => (
              <Styled.Link key={item.id} href={`#/details/${item.id}`}>
                <Styled.BodyItem>
                  <Styled.Profile></Styled.Profile>
                  <Styled.TextData>
                    <Styled.Name>{item.name}</Styled.Name>
                    <Styled.Username>{item.username}</Styled.Username>
                  </Styled.TextData>
                  <Styled.Email>
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </Styled.Email>
                </Styled.BodyItem>
              </Styled.Link>
            ))}
          </Styled.Body>
        )}
      </Styled.HomeContainer>
    </Styled.HomeWrapper>
  );
}

export default Home;
