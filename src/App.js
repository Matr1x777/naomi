import React from "react";
import styled from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NaomiStorage from "./components/NaomiStorage/NaomiStorage";

const Page = styled.div`
  min-height: 100vh;
  color: white;
  background-color: rgba(40, 42, 52, 0.83);
  font-family: 'Inter', sans-serif;
`

const App = (props) => {
    return(
        <BrowserRouter>
          <Page>
              <Routes>
                  <Route path="/" element={<NaomiStorage/>}/>
              </Routes>
          </Page>
        </BrowserRouter>
    )
}

export default App;
