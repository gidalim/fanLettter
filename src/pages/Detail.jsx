import { useParams, useNavigate } from "react-router-dom"
import data from '../shared/data.json';
import styled from "styled-components";
import Button from "../component/Button";

function Detail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const fanLetter = data.find(item => item.id === id)

  return (
    <div>
      <Button style={{
        margin: '15px',
      }} clickEventHandler={(e) => {
        navigate("/member")
      }} >집으로</Button>
      {fanLetter ? (
        <StBox>
          <StFanLetterBox>
            <StImg>
              <img src={fanLetter.profile} alt={fanLetter.name} />
            </StImg>
            <StFanDetail>
              <span>{fanLetter.name}</span>
              <time dateTime={fanLetter.time}>{new Date(fanLetter.time).toLocaleString()}</time>
            </StFanDetail>
          </StFanLetterBox>
          <StAddress>to.{fanLetter.selectedPage}</StAddress>
          <StP>{fanLetter.content}</StP>
          <div> 버튼이 들어갈 공간입니다</div>
        </StBox >
      ) : (
        <p>팬레터가 존재하지 않아요!</p>
      )}

    </div>
  )
}

export default Detail


const StBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 600px;
  border: 1px solid black;
`

const StFanLetterBox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #eba9f4;
  padding: 15px;
  width: 800px;
  height:150px;
  

`


const StImg = styled.figure`
  width: 120px;
  height: 120px;
  margin-right: 25px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

const StFanDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 50px;
  font-size: 1.6rem;
  
`

const StAddress = styled.div`
  display: flex;
  align-items: flex-start;
  width: 800px;
  font-size: 1.6rem;
  margin-top: 0.6rem;
  margin-bottom: 0.4rem;
`

const StP = styled.p`
  display: flex;
  align-items: center;
  width: 850px;
  height: 250px;
  background-color: #457299;
  border: transparent;
  padding: 5px;
  font-size: 1.3rem;
  line-height: 1.7;
`

