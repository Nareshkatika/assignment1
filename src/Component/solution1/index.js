import './index.css'

const Solution = props => {
  const {items, ondelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = items

  const remove = () => {
    ondelete(id)
  }

  return (
    <li className="bg-img">
      <div>
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="arrange">
        <div>
          <img src={logoUrl} className="logo" alt="" />
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>

        <div>
          <button onClick={remove} type="button">
            <img
              className="delete-logo"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Solution
