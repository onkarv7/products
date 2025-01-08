
import React from 'react'

const TextInput = ({label, id, placeholder, onChange, value }) => {
  return (
    <div className='text-input'>
        <label htmlFor={id} className='text-label'>
            {label}
        </label>
      <input 
        type='text'
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        className='text-field'
      />
    </div>
  )
}

export default TextInput