import styled from "styled-components"


const StBtn = styled.button.attrs(props => ({

}))`
  padding: 6px 12px;
  width: 90px;
  border-radius: 5px;
  border: transparent;
  background-image: linear-gradient(to right, skyblue, #fcb9fc) ;
  color: white;
  line-height: 1;
  ${props => props.$isActive && `
    background-image : none;
    background-color :#7c63d6;
    
  `}
  
`




function Button({ clickEventHandler, children, isActive }) {
  return (<StBtn $isActive={isActive} onClick={clickEventHandler}>{children}</StBtn>)
}

export default Button