import styled from "styled-components"


const StBtn = styled.button.attrs(({ isActive, ...rest }) => ({
  ...rest
}))`
  padding: 6px 12px;
  width: 90px;
  border-radius: 5px;
  border: transparent;
  background-image: linear-gradient(to right, skyblue, #fcb9fc) ;
  color: white;
  line-height: 1;
  ${props => props.isActive && `
    background-color : purple
  `}
`




function Button({ isActive, clickEventHandler, children }) {
  return (<StBtn isActive={isActive} onClick={clickEventHandler}>{children}</StBtn>)
}

export default Button