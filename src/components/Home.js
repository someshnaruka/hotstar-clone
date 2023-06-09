import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { doc,} from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { query,} from "firebase/firestore";
import { collection,} from "firebase/firestore";
import { setMovies } from "../features/movies/movieSlice";
import { selectUsername } from "../features/userSlice";
import { Routes } from "react-router-dom";

const Home = (props) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  let recommends = [];
  let NewDisneys = [];
  let originals = [];
  let trending = [];
  console.log(recommends,"value")

  useEffect(() => {
 
    console.log("hello");
    const q = query(collection(db, "movies"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        console.log(recommends ,"recommend data");
        console.log(NewDisneys ,"NewDisneys data");
        console.log(originals ,"originals data");
        console.log(trending ,"trending data");
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            NewDisneys = [...NewDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(  //teking value of arrays and setting them to payload (destructuring)
        setMovies({
          recommend: recommends,
          NewDisney: NewDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [username]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
