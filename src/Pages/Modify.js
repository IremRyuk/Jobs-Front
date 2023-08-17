import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
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
    // Redux
    const user = useSelector(res=>res.usersData)
    // Get Single Job
    useEffect(()=>{
const GetSingleData = async () => {
    const response = await fetch('/jobs/'+id,{
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
    const changeData = {companyName,position,description,salary,experience,location,}
    // Edit Job
    const Edit = async () => {
        if(companyName.length <= 3 | position.length <= 3 | description.length <= 3 | salary.length === '' | experience.length === '' | location.length <= 2 ){
            alert('Inputs')
            return
        }else{

        
    const response = await fetch('/jobs/'+id,{
    method:'PUT',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${user.token}`
    },
    body:JSON.stringify(changeData)
    })
    const json = await response.json()
    if(!response.ok){
        alert('Problem In Repsone Modiy')
    }
    if(response.ok){
        alert(json)
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
        <p className='sect-desrc'>Company: {res.companyName}</p>
        <input type='text' onChange={(e)=>setComp(e.target.value)} value={companyName} placeholder='type...' className='inputModify' />
        </div>
        <div className='sections'>
        <p className='sect-desrc'>Position: {res.position}</p>
        <input type='text' onChange={(e)=>setPos(e.target.value)} value={position} placeholder='type...' className='inputModify'/>
        </div>
        <div className='sections'>
        <p className='sect-desrc'>location: {res.location}</p>
        <input type='text' onChange={(e)=>setLoc(e.target.value)} value={location} placeholder='type...' className='inputModify'/>
        </div>
        <div className='sections'>
        <p className='sect-desrc'>experience: {res.experience}</p>
        <input type='number' onChange={(e)=>setExp(e.target.value)} value={experience} placeholder='type number...' className='inputModify'/>
        </div>
        <div className='sections'>
        <p className='sect-desrc'>description: {res.description}</p>
        <input type='text' onChange={(e)=>setDescr(e.target.value)} value={description} placeholder='type...' className='inputModify'/>
        </div>
        <div className='sections'>
        <p className='sect-desrc'>salary: {res.salary} $</p>
        <input type='number' onChange={(e)=>setSal(e.target.value)} value={salary} placeholder='type number...' className='inputModify'/>
        </div>
        </div></center>
        <center><button onClick={()=>Edit()} className='changeBtn'>Change</button></center>
        </div>
    ))}
    </>
    }
    </>
  )
}
