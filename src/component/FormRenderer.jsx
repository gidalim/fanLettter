import { Link } from "react-router-dom";
import styled from "styled-components";


const FormRenderer = ({ list }) => {
  console.log('리스트가 전달되었음', list)

  return list.map(item => (
    <StBox key={item.id} className='innerBox'>
      <Link to={`/${item.id}`}>
        <div className='StComment'>
          <img src={item.profile} alt={item.name} />
          <StUl>
            <li>{item.name}</li>
            <li>{item.time}</li>
            <li>{item.content}</li>
          </StUl>
        </div>
      </Link>
    </StBox >
  ))
};

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1100px;
  border: 1px solid black;
  color: black;
  padding: 30px;

  &.loadBox {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    border: 1px solid black;
    margin: 15px;
  }

  &.innerBox{
    display: flex;
    flex-direction: row;
    width: 300px;
    margin: 25px;

  }

  &.StComment{
    display: flex;
    flex-direction: row;
  }

`
const StUl = styled.ul`
  display: flex;
  flex-direction: column;
`



export default FormRenderer