import { useState, } from 'react';
import { Link } from 'react-router-dom';
import AddComment from './comment/AddComment';

// const responseData = async () => {

// }
// json 데이터 가져오는 양식을 공부하고 적을 예정
const initialState = [{
  id: 1, profile: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg", name: '김철수', content: '사랑해요', time: 'none'
},
{
  id: 2, profile: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg", name: '김영호', content: '안아줘요', time: 'none'
}]

function Main() {


  const [list, setList] = useState(initialState);


  const addFanLetter = (item) => {
    setList((list) => [...list, item]);
  }


  const renderFanLetter = () => {
    return list.map(item => (
      <div key={item.id}>
        <Link to={`${item.id}`}>
          <ul>
            <img src={item.profile} alt={item.name} />
            <li>{item.name}</li>
            <li>{item.time}</li>
            <li>{item.content}</li>
          </ul>
          <div>
          </div>
        </Link>
      </div>
    ))
  };



  return (
    <>
      <div className='createBox'>고정될 박스 위치
        <AddComment
          onSubmit={addFanLetter}
        />
      </div>

      <div className='loadingBox'> 박스가 나올 위치
        <div>{renderFanLetter()}</div>

      </div>

    </>
  )
}

export default Main