
import React from 'react'

const SelectInput = ({label, id, options, onChange, value }) => {
  return (
    <div className='select-input'>
        <label htmlFor={id} className='select-label'>
            {label}
        </label>
        <select id={id} value={value} onChange={onChange}
        
        className='select-field'
        >
            {options.map((option)=>(
                <options key={option} value={option}>
                    {option}
                </options>
            ))}
        </select>
    </div>
  )
}

export default SelectInput