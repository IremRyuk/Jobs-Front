import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Search from '../Page Components/Home/Search'
import {DataJobsAct, DefaultDataAct} from '../Redux/action/DataJobsAct'
import '../Styles/Home/home.css'
import LeftFilters from '../Page Components/Home/LeftFilters'
import MainJobs from '../Page Components/Home/MainJobs'
import JobsDescription from '../Page Components/Home/JobsDescription'

export default function Home() {
    const dispatch = useDispatch()
    const datas = useSelector(data=>data.allData)
    useEffect(()=>{
      const GetAllData = async () => {
        const responce = await fetch('/jobs/')
        const json = await responce.json()
        
        if(responce.ok){
            const payload = json
            dispatch(DataJobsAct(payload))
            dispatch(DefaultDataAct(payload))
        }
      }
        GetAllData()
    },[dispatch])
  return (
    <>
    <Search />
    <div className='home-box'>
      <div className='home-menu'>
        <LeftFilters />
        <div style={{width:'inherit'}}>
        <MainJobs />
        <JobsDescription info={datas}/>
        </div>
      </div>
    </div>
    </>
  )
}
