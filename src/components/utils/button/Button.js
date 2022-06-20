import './Button.css'

function Button ({ value, action, type }) {
  const buttonClasses = `Button ${type}`
  return (
    <button className={buttonClasses} onClick={action}>
      {value}
    </button>
  )
}

export default Button
