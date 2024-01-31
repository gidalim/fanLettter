import styled from "styled-components"


const StBtn = styled.button`
  padding: 6px 12px;
  width: 90px;
  border-radius: 5px;
  border: transparent;
  background-image: linear-gradient(to right, skyblue, #fcb9fc) ;
  color: white;
  line-height: 1;
`




function Button({ clickEventHandler, children }) {
  return (<StBtn className="submitBtn" onClick={clickEventHandler}>{children}</StBtn>)
}

export default Button