import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components";
import Button from "../component/Button";
import DetailComment from "../component/comment/DetailComment";
import { useSelector, useDispatch } from "react-redux";
import { deleteLetter, updateLetter, callModal, closeModal } from "../shared/redux/modules/ControlFanLetters";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fanLetters, isModalOpen, editContent, isDivVisible } = useSelector(state => state.ControlFanLetters);


  const letter = fanLetters.find(item => item.id === id);

  const callModalHandler = () => {
    dispatch(callModal(letter.content));
  };

  const changedHandler = () => {
    const updatedFanLetter = { ...letter, content: editContent }
    dispatch(updateLetter(updatedFanLetter));
    dispatch(closeModal());
    navigate('/');
  }

  const deletedHandler = () => {
    dispatch(deleteLetter(id))
    navigate('/');
  }

  const goHomeBtn = (e) => {
    dispatch(closeModal());
    navigate('/')
  }

  return (
    <div>
      <StBtn onClick={goHomeBtn} >집으로</StBtn>
      {letter ? (
        <StBox>
          <StFanLetterBox>
            <StImg>
              <img src={letter.profile} alt={letter.name} />
            </StImg>
            <StFanDetail>
              <span>{letter.name}</span>
              <time dateTime={letter.time}>{new Date(letter.time).toLocaleString()}</time>
            </StFanDetail>
          </StFanLetterBox>
          <StAddress>to.{letter.selectedPage}</StAddress>
          <StModalDiv
            $isVisible={isDivVisible}
          >
            <StP>{letter.content}</StP>
            <Button clickEventHandler={deletedHandler} >삭제</Button>
            <Button clickEventHandler={callModalHandler} >수정</Button>
          </StModalDiv>
          <DetailComment
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            changedHandler={changedHandler}
            editContent={editContent}
          />

        </StBox >
      ) : (
        <p>팬레터가 존재하지 않아요!</p>
      )}
    </div>
  )
}

export default Detail



const StBtn = styled.button`
  margin: 15px;
`

const StModalDiv = styled.div`
  display: ${props => props.$isVisible ? "block" : "none"};
`

const StBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 600px;
  border: 1px solid black;
  padding: 15px;
`

const StFanLetterBox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #eba9f4;
  width: 100%;
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
  width: 100%;
  font-size: 1.6rem;
  margin-top: 0.6rem;
  margin-bottom: 0.4rem;
`

const StP = styled.p`
  word-wrap: break-word;
  width: 850px;
  height: 250px;
  background-color: #457299;
  border: transparent;
  padding: 5px;
  font-size: 1.3rem;
  line-height: 1.7;
`

