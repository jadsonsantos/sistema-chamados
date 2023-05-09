import './Title.scss'

const Title = ({ children, name }) => {
  return (
    <h2 className="title">
      {children}
      <span>{name}</span>
    </h2>
  )
}

export default Title
