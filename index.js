import styled from 'styled-components'

const processClassName = (class_name) => (props) => {
  if (typeof class_name === 'function') {
    return class_name(props)
  }
  return class_name
}

const ccom = (comp_type) => 
  (className='', style=``) => (
    styled[comp_type].attrs(props => ({ 
      className: processClassName(className)(props),
      ...props
    }))`${style}`
  )

export default ccom
