const Card = ({children}) => {
  return (
    <div className={'bg-blue-100 p-6 rounded-lg shadow-md'}>
        {children}
    </div>
  )
}

export default Card;