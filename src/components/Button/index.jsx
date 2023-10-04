import React from 'react'

function Button({ text, style }) {
  return (
    <button className={`py-2 px-4 rounded ${style}`}>
        {text}
    </button>
  )
}

export default Button