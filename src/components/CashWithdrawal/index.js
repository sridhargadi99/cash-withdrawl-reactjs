// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: '2000'}

  buttonAmount = value => {
    this.setState(prevAmount => ({
      amount: parseInt(prevAmount.amount) - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="sub-container">
          <div className="logo-heading-container">
            <button className="logo-style" type="button">
              s
            </button>
            <h1 className="heading-style1">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="paragraph-style1">Your Balance</p>
            <div>
              <p className="paragraph-style3">{amount}</p>
              <p className="paragraph-style2">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="paragraph-style3">Withdraw</p>
            <p className="paragraph-style1">CHOOSE SUM (IN RUPEES)</p>
            <ul className="button-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  buttonAmount={this.buttonAmount}
                  eachList={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
