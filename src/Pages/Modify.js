import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import Alerts from '../Components/Alert'
import '../Styles/Modify/modify.css'

export default function Modify() {
    const {id} = useParams()
    const [data,setData] = useState(null)
    const [companyName,setComp] = useState('')
    const [position,setPos] = useState('')
    const [salary,setSal] = useState('')
    const [experience,setExp] = useState('')
    const [location,setLoc] = useState('')
    const [description,setDescr] = useState('')
    const [isFalse,setIsFalse] = useState(false)
    const [isProblem,setProblem] = useState('')
    // Redux
    const user = useSelector(res=>res.usersData)
    // Get Single Job
    useEffect(()=>{
const GetSingleData = async () => {
    const response = await fetch('https://jobs-2dwq.onrender.com/jobs/'+id,{
        headers:{
            'Autorization':`Bearer ${user.token}`
        }
    })
    const json = await response.json()
    if(!response.ok){
        alert('Problem In Response')
    }
    if(response.ok){
        setData([json])
    }
}
GetSingleData()
    },[id,user])


    // All Changed Data
    const changeData = {companyName,position,description,salary,experience,location,}


    // Edit Job
    const Edit = async () => {
        if(companyName.length <= 3 || position.length <= 3 || description.length <= 3 || salary.length === '' || experience.length === '' || location.length <= 2 ){
            setIsFalse(true)
            setProblem('Please Fill All Inputs')
            setTimeout(()=>{
                setIsFalse(false)
            },2000)
            return
        }else{

    const response = await fetch('https://jobs-2dwq.onrender.com/jobs/'+id,{
    method:'PUT',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${user.token}`
    },
    body:JSON.stringify(changeData)
    })
    if(!response.ok){
        alert('Problem In Repsone Modiy')
    }
    if(response.ok){
        window.location.reload()
    }
}
    }
  return (
    <>
    {data && <>
    {data.map(res=>(
        <div style={{marginBottom:'100px'}}  key={res._id}>
        <center><div className='modifyJob'>
        <div className='sections'>
        <p className='sect-desrc'>Company</p>
        <input type='text' onChange={(e)=>setComp(e.target.value)} value={companyName} placeholder={res.companyName} className='inputModify' />
        </div>
        <div className='sections'>
        <p className='sect-desrc'>Position</p>
        <input type='text' onChange={(e)=>setPos(e.target.value)} value={position} placeholder={res.position} className='inputModify'/>
        </div>
        <div className='sections'>
        <p className='sect-desrc'>location</p>
        <input type='text' onChange={(e)=>setLoc(e.target.value)} value={location} placeholder={res.location} className='inputModify'/>
        </div>
        <div className='sections'>
        <p className='sect-desrc'>experience</p>
        <input type='number' onChange={(e)=>setExp(e.target.value)} value={experience} placeholder={res.experience} className='inputModify'/>
        </div>
        <div className='sections'>
        <p className='sect-desrc'>salary $</p>
        <input type='number' onChange={(e)=>setSal(e.target.value)} value={salary} placeholder={res.salary} className='inputModify'/>
        </div>
        <div className='sections'>
        <p className='sect-desrc'>description</p>
        <textarea type='text' onChange={(e)=>setDescr(e.target.value)} value={description} placeholder={res.description} className='inputModify' style={{height:'200px',resize:'none'}}></textarea>
        </div>
        </div></center>
        <center><button onClick={()=>Edit()} className='changeBtn'>Change</button></center>
        </div>
    ))}
    </>
    }
    <Alerts IsInList={isFalse} problem={isProblem}/>
    </>
  )
}
