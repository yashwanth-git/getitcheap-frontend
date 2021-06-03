import React, { useEffect } from "react";
import styled from "styled-components";
//Components
import Search from "../components/Search";
import Items from "../components/Items";
import Sidebar from "../components/Sidebar";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/actions/items";
const Home = () => {
  const dispatch = useDispatch();
  const { allItems } = useSelector((state) => state.items);
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  // console.log(allItems);
  return (
    <>
      <Search />
      <MainContent>
        <Sidebar />
        <Items items={allItems} />
      </MainContent>
    </>
  );
};

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  padding: 4em 0;
`;

export default Home;
