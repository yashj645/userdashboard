import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail, fetchUserPosts } from "api/slice/users";
import Styled from './styles'
import { CircularProgress } from "@mui/material";

function Details() {
  const dispatch = useDispatch()
  const {id: urlParam} = useParams();
  const {data: userDetailData, isLoading: isDetailLoading} = useSelector((state) => state.users.userDetail)
  const {data: userPosts, isLoading: isPostLoading} = useSelector((state) => state.users.userPosts)

  console.log('userDetailData', userDetailData)

  console.log('userPosts', userPosts)

  useEffect(() => {
    if (urlParam) {
      dispatch(fetchUserDetail(urlParam))
      dispatch(fetchUserPosts(urlParam))
    }
  }, [urlParam, dispatch])

  function renderContent() {
    if (isDetailLoading || isPostLoading) {
      return (
        <CircularProgress></CircularProgress>
      );
    }

    return (
      <>
        <Styled.Header>
        <a href="/userdashboard">Users</a>
          <span>&gt; &nbsp;{userDetailData.name}</span>
        </Styled.Header>
        <Styled.CardWrapper>
          <Styled.Card>
            <Styled.CardHeading>Contact Info</Styled.CardHeading>
            <Styled.CardDetails>
              <span>Username: {userDetailData.username}</span>
              <span>
                Email:{" "}
                <a href={`mailTo:${userDetailData.email}`}>
                  <span className="isBlue">{userDetailData.email}</span>
                </a>
              </span>
              <span>
                Phone:{" "}
                <a href={`tel:${userDetailData.phone}`}>
                  <span className="isBlue">{userDetailData.phone}</span>
                </a>
              </span>
              <span>
                Website:{" "}
                <a
                  href={userDetailData.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="isBlue">{userDetailData.website}</span>
                </a>
              </span>
            </Styled.CardDetails>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardHeading>Address</Styled.CardHeading>
            <Styled.CardDetails>
              <span>
                {userDetailData.address?.suite} {userDetailData.address?.street}
                , {userDetailData.address?.city},{" "}
                {userDetailData.address?.zipcode}
              </span>
            </Styled.CardDetails>
          </Styled.Card>
          <Styled.Card>
            <Styled.CardHeading>Company</Styled.CardHeading>
            <Styled.CardDetails>
              <span>{userDetailData.company?.name}</span>
              <span>{userDetailData.company?.bs}</span>
              <span className="isItalic">{`"${userDetailData.company?.catchPhrase}"`}</span>
            </Styled.CardDetails>
          </Styled.Card>
        </Styled.CardWrapper>
        <Styled.Header className="isBorder">
          <span>Posts by {userDetailData.name}</span>
        </Styled.Header>
        <Styled.CardWrapper>
          {userPosts.map((post) => (
            <Styled.Card key={post.id}>
              <Styled.CardHeading>{post.title}</Styled.CardHeading>
              <Styled.CardDetails className="isBottomBorder">
                {post.body}
              </Styled.CardDetails>
            </Styled.Card>
          ))}
        </Styled.CardWrapper>
      </>
    );
  }

  return (
    <Styled.DetailWrapper>
      <Styled.DetailContainer>
        {renderContent()}
      </Styled.DetailContainer>
    </Styled.DetailWrapper>
  );
}

export default Details;
