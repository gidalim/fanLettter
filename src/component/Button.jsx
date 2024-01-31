const Button = ({ clickEventHandler, children }) => {
  return (<button className="submitBtn" onClick={clickEventHandler}>{children}</button>)
}

export default Button