"use client"
import React from 'react'
import { useAppContext } from '@/contexts/app-context';

function About() {
   const { globalState: state, setGlobalState: setState } = useAppContext();


  return (
    <div>About {state.name}</div>

  )
}

export default About
