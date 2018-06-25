import React, { Component } from 'react';
import styled from "styled-components";
import Boxes from './boxes';

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "600px",
  height: "100vh",
  padding: "0px 10px",
  margin: "auto"
});

const Header = styled("div")({
  fontSize: "30px",
  fontWeight: "bold",
  textDecorationLine: "underline",
  textAlign: "center",
  color: "#ffffff",
  padding: "10px 0px",
  margin: "25px auto"
});

const Animations = styled("div")({
  display: "flex",
  flexDirection: "row",
  height: "500px",
  margin: "auto"
});

const Manual = styled("div")({
  width: "600px",
  fontSize: "15px",
  alignItems: "justify",
  color: "#ffffff",
  backgroundColor: "#1ce3ad",
  padding: "10px 10px",
  margin: "10px",
});

class App extends Component {
  render() {
    return (
    <Wrapper>
      <Header>Projekt WebApp 2018</Header>

      <Animations>
        <Boxes/>
      </Animations>
      
      <Manual>
        <div style={{ textDecorationLine: "underline" }}>Manual Instructions:</div>
        Move the cursor into the box above. 
        When it's highlighted, click into the box and see what happens. 
        Move the cursor again to the transformed box to get to standard pose.
      </Manual>

      <div style={{ fontSize: "10px", fontWeight: "bold", color: "#ffffff" }}>Created by Cedric Hering</div>
        
    </Wrapper>
    );
  }
}

export default App;