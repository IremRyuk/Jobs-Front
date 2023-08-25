import React,{useState,useEffect} from 'react'
import '../Styles/Home/home.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import $ from 'jquery'

export default function GoTop() {
    const [height,setHeight] = useState(window.scrollY)
    const Up = () => {
        window.scrollTo(0,0)
    }
    // Change Height
    useEffect(()=>{
        window.addEventListener('scroll',()=>setHeight(window.scrollY))
    })
    // Toggle BTN
    useEffect(()=>{
        if(height>350){
            $('#upScroll').show()
        }else{
            $('#upScroll').hide(400)
        }
    },[height])
  return (
    <>
    <KeyboardDoubleArrowUpIcon 
    id='upScroll'
    sx={{
        width:{xs:'70px',md:'90px'},
        height:{xs:'70px',md:'90px'},
        color:'#3575E2'
        }} onClick={Up}/>
    </>
  )
}
