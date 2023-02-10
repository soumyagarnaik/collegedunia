import React from 'react'
import styles from '../css/collegecard.module.css'
import {CiImageOn, CiLocationOn} from 'react-icons/ci'
import {RiVideoLine} from 'react-icons/ri'
import {FaSchool} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import {BsDownload} from 'react-icons/bs'
import {MdOutlineEditNote} from  'react-icons/md' 
// import logo from './iitkanpurlogo.png'

const CollegeCard = ({collegedata}) => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.collegeImage} style={{background: `url(${collegedata.image_url})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
            <div className={styles.medias}>
            <span className={styles.imageNum}>
                    <CiImageOn className={styles.icon} /><span >42</span>
            </span>
            <span className={styles.videoNum}>
                    <RiVideoLine className={styles.icon}/><span >5</span>
            </span>
            </div>
            <div className={styles.collegeRating}>
                <div className={styles.collegeIcons}>
                    <FaSchool  className={styles.school}/>
                    <AiFillStar  className={styles.star}/>
                </div>
                <div className={styles.ratingText}>
                    <h6 className={styles.text}>Collegedunia Rating</h6>
                    <h6 className={styles.text}>{collegedata.collegedunia_Rating}/10</h6>
                </div>  
            </div>
        </div>
        <div className={styles.collegeTitle}>
            <div className={styles.logoContainer}>
                <img src={collegedata.logo_url} alt='logo' className={styles.logo} />
            </div>
            <div className={styles.collegeDetails}>
                <h4 className={styles.name}>{collegedata.name}</h4>
                <div className={styles.collegeAddress}>
                    <CiLocationOn className={styles.locationIcon}/><h6 className={styles.address}>{collegedata.address}</h6>
                </div>

            </div>
        </div>
        <div className={styles.collegeFeeDetails}>
            <div className={styles.courseFeeContainer}>
                <h3 className={styles.boldText}>{collegedata.fees}</h3>
                <h5 className={styles.fadedText}>BTECH FIRST YEAR FEES</h5>
            </div>
            <div className={styles.ratingContainer}>
                <h3 className={styles.boldText}>{collegedata.rating}/10</h3>
                <h5 className={styles.fadedText}>BASED ON {collegedata.user_review} USER  RATING</h5>
            </div>
        </div>
        <div  className={styles.rankingContainer}>
            <h5 className={styles.rankText}>RANKED {collegedata.nirf_rank} OUT OF 300 NIRF</h5 >
            <h5  className={styles.rankText}>RANKED 26 OUT OF 216 THE WEEK</h5 >
        </div>
        <div  className={styles.bottomContainer}>
            <h5 className={styles.bottomText}>ADMISSION 2022</h5 >
            <h5  className={styles.bottomText}>REVIEWS</h5 >
            <h5  className={styles.bottomText}>COURSE & FEES</h5 >
        </div>
        <div className={styles.buttonContainer}>
            <button className={styles.apply}><MdOutlineEditNote className={styles.btnIcon}/> APPLY NOW</button>
            <button className={styles.brouchre}><BsDownload  className={styles.btnIcon}/>BROCHURE</button>
        </div>
    </div>
  )
}

export default CollegeCard