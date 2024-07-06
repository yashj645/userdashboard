import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail, fetchUserPosts } from "api/slice/users";

function Details() {
  const dispatch = useDispatch()
  const {id: urlParam} = useParams();
  const {data: userDetailData} = useSelector((state) => state.users.userDetail)
  const {data: userPosts} = useSelector((state) => state.users.userPosts)

  console.log('userDetailData', userDetailData)

  console.log('userPosts', userPosts)

  useEffect(() => {
    if (urlParam) {
      dispatch(fetchUserDetail(urlParam))
      dispatch(fetchUserPosts(urlParam))
    }
  }, [urlParam, dispatch])

  return <div>Details page</div>;
}

export default Details;
