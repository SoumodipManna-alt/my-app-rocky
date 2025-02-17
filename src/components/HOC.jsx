import React from 'react'

const HOC = (p) => {
  return (
    <div style={{backgroundColor:'red',width:'100px'}}><p.inner_fun/></div>
  )
}

const HOCblue = (p) => {
    return (
      <div style={{backgroundColor:'blue',width:'100px'}}><p.inner_fun/></div>
    )
  }
  
  const HOCgreen = (p) => {
    return (
      <div style={{backgroundColor:'blue',width:'100px'}}><p.inner_fun/></div>
    )
  }
export default HOC
export {HOCblue,HOCgreen}