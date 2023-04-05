import React from "react"

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`max-w-[1280px] w-full px-5 md:px-10 mx-auto ${
        className || ""
      }`}
    >
      {children}
    </div>
  )
}

export default Wrapper
