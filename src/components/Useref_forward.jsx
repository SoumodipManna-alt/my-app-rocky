import React ,{forwardRef} from 'react'

const Useref_forward = (props,ref) => {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(Useref_forward)
