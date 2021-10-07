import React, { Component } from 'react'

class Earning extends Component {

 
  render() {
    
    return (
      <div>
          <div className="card mt-5 main__card text-center">
          <div className="card-body  text-center">
            <h4 className="card-title">YOUR EARNINGS</h4>
            <div>
                  <p className="stake">Staking Reward: <span>{window.web3 ? window.web3.utils.fromWei(this.props.earnings, 'ether') : 0} LMY</span>
                  </p>
              </div>
              <div><button type="submit" className="claim btn btn-primary" onClick={(event) =>{
                event.preventDefault()
                console.log("Ont really know why you are not working!!!!!!!!!!!!!!" )
                this.props.claim()
              }}>CLAIM</button></div>
            
            
          </div>
         
        </div>
        <div className="card mt-5 main__card text-center">
          <div className="card-body  text-center">
          
          <h4> Total Stake  </h4>
          <p className="stake"><span>{window.web3 ? window.web3.utils.fromWei(this.props.totalStaking, 'ether'): 0} LMY</span>
                  </p>
                  <p className="stake"> Percent Staked: <span>{window.web3 ? window.web3.utils.fromWei(this.props.percentStaked, 'ether'): 0} %</span>
                  </p>
                  
          </div>
        </div>
      </div>
      
      
     
      
    );
  }
}

export default Earning;
