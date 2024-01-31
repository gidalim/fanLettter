import Main from '../component/Main'
import Header from '../component/Header'
import { useState } from 'react'



function Member() {


  const [filteredMember, setFilteredMember] = useState('')

  const filterFnc = (item) => {
    setFilteredMember(item);
  }



  return (
    <div>
      <Header filterFnc={filterFnc} />
      <Main selectedMember={filteredMember} />
    </div>
  )
}

export default Member