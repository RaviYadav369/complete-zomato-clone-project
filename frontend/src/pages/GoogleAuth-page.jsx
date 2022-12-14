import React,{useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import { googleAuth } from '../redux/reducers/auth/auth.action'

const GoogleAuthPage = () => {

  const {token} =useParams();
  const dispatch = useDispatch();
const navigate = useNavigate();

useEffect (() =>{
  if(token) {
    dispatch(googleAuth(token)).then(() => navigate('/delivery'))
  }
},[token])

  return (
    <div>Loading, Please Wait...</div>
  )
}

export default GoogleAuthPage