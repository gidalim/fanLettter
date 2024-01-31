import Header from "./component/Header";
import Router from "./shared/Router";
import "./reset.css";
import styled from "styled-components";

function App() {
  return (<Stcontents>

    <Header>
      <Router />
    </Header>
  </Stcontents>
  );
}

const Stcontents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App;
