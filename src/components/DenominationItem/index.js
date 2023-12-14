// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachList, buttonAmount} = props
  const {value} = eachList
  const clickButton = () => {
    buttonAmount(value)
  }
  return (
    <li className="list-container">
      <button className="button-style" type="button" onClick={clickButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
