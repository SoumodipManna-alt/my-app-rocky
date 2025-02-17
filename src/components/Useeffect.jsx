import React ,{useEffect,useState}  from 'react'

const Useeffect = () => {
    const [count , setcount]=useState(0)
    useEffect(()=>{
        // alert("hi")
        // console.warn("rocky")
        function hello()
        {
            console.warn("rocky")
        }
        hello()
    })
    // function Useeff(){
    //     useEffect(()=>{
    //         // alert("hi")
    //         console.warn("rocky")
    //     })
    // }
  return (
    <div>
      <h1>Baby{count}</h1>
      <button onClick={()=>setcount(1)}>counter</button> 
      <button onClick={()=>setcount(count+1)}>counter1</button>
      {/* <button onClick={Useeff}>counter2</button> */}
    </div>
  )
}

// *****************note:we can use or create function inside useEffect , but we cannot create useeffect inside a function**********************
// NOTE LINE(9-14):Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.
// Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.
//     at Object.throwInvalidHookError (http://localhost:3000/static/js/bundle.js:10489:11)
//     at exports.useEffect (http://localhost:3000/static/js/bundle.js:23273:32)
//     at Useeff (http://localhost:3000/static/js/bundle.js:1295:53)
//     at processDispatchQueue (http://localhost:3000/static/js/bundle.js:15532:13)
//     at http://localhost:3000/static/js/bundle.js:15829:7
//     at batchedUpdates$1 (http://localhost:3000/static/js/bundle.js:9200:38)
//     at dispatchEventForPluginEventSystem (http://localhost:3000/static/js/bundle.js:15612:5)
//     at dispatchEvent (http://localhost:3000/static/js/bundle.js:17694:31)
//     at dispatchDiscreteEvent (http://localhost:3000/static/js/bundle.js:17676:58)





export default Useeffect
