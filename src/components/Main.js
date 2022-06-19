import React, { useState } from 'react'

const Main = () => {
  
  const [nftCount, setNftCount] = useState(1)

  const handleDecrement = () => {
    if (nftCount > 1) {
      setNftCount(nftCount - 1)
    }
    
  }

  const handleIncrement = () => {
    if (nftCount < 50) {
      setNftCount(nftCount + 1)
    }
  }


  
  return (
    //scard in the center of the page
    <div className="container">
      <div className='card'>
        <div className="card-title">Mint Your NFT's</div>

        <div className="subcard-1">
          <div className="total">Total Minted:</div>
          <div className="total-number">0/3,333</div>
          <div className="price">Price: 0.133 ETH</div>
        </div>
        
        <div className="subcard-2">
          <div className="number">{nftCount}</div>
          {/* + - reset buttons */}
          
          <div className="card-buttons" >
            <div className="button" onClick={() => handleIncrement()}>+</div>
            <div className="button" onClick={() => handleDecrement()}>-</div>
            <div className="reset-button" onClick={() => setNftCount(1)}>Reset</div>
            <div className="max-button" onClick={() => setNftCount(50)}>Max</div>
          </div>
          <div className="mint-button" onClick={() => alert(`I will mint ${nftCount} NFTs`)}>Mint</div>
        </div>
        
      </div>
    </div>
 

  )
}

export default Main