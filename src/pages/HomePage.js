import React, {useState} from 'react'
import CollegeCard from '../components/CollegeCard'
import styles from '../css/homepage.module.css'
import collegeData from '../data/colleges.json'
import {GrAscend} from 'react-icons/gr'
import headerStyle from '../css/header.module.css'
import {BsSearch} from 'react-icons/bs'


export const HomePage = () => {
  const [typedText,setTypedText] = useState('')
  const [sortSelection,setSortSelection] = useState('nirf')
  const [decendingState, setDecendingState] = useState(false)

  const searchHandler = (event) => {
    event.preventDefault();
    setTypedText(event.target.value)
  }
  const searchedData = collegeData.colleges.filter((collegeData) => {
    if (typedText === '') {
        return collegeData;
    }
    else {
        return collegeData.name.toLowerCase().includes(typedText)
    }
})

const optionSelector = (event) => {
  setSortSelection(event.target.value)
}


let value;

switch(sortSelection) {
  case 'fee':
    value = 'fees' ;
    break;
  case 'userrating' :
    value = 'rating';
    break;
    case 'crating' :
      value = 'collegedunia_Rating';
      break;
    default:
      value = 'nirf_rank'
}

if(sortSelection && value){
  searchedData.sort((a,b) => {
    if(decendingState === false) {
      return a[value] - b[value]
    } else {
      return b[value] - a[value]
    }
  })
}

  return (
    <div className={styles.home}>
      <div className={headerStyle.header}>
          <div className={headerStyle.searchArea}>
            <input type='text' className={headerStyle.search} onChange={searchHandler}/>
            <BsSearch className={headerStyle.searchIcon}/>
          </div>
          <div className={headerStyle.sortArea}>
              <div className={headerStyle.ordering}>
                  <GrAscend onClick={() =>setDecendingState(!decendingState)} style={{ backgroundColor: decendingState ?'#FF7100':'', cursor:'pointer',fontSize:'1.2rem',padding:'.5rem'}}/>
              </div>
              <div>
                <select onChange={optionSelector} className={headerStyle.option}>
                  <option>Sort By</option>
                  <option value='nirf'>NIRF Rank</option>
                  <option value='fee'>Fee</option>
                  <option value='userrating'>User Rating</option>
                  <option value='crating'>CollegeDunia Rating</option>
                </select>
              </div>
          </div>
      </div>
      <h1 className={styles.title}>TOP COLLEGES IN INDIA</h1>
      <div className={styles.cardContainer} >
        {
        searchedData.map((data) => (
          <div key={data.id}>
              <CollegeCard collegedata = {data}/>
          </div>
        ))
      }
      </div>
    </div>
  )
}
