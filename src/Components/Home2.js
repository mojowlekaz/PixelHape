import React from 'react'
// import Box from '@material-ui/core/Box';

const Home2 = () => {
  return (
    <div className='second-style'>
      <div className='padding2'>

    <h1 style={{color: 'yellow'}}> Hello from King Hape+</h1>
    <p  >
  PixelĦApe+ is a collection of 3000  NFTs made on the Hedera Hashgrtaph, <br />
  drop1 and drop2 will consist of a random dropped pixelHapes split different <br />
  places and a few epic 1of1s added along. Meeting Season Drop with exclucsive <br />
   HapesKidz Did someone say Spoiled HApe+ ?
  </p>
      <button>Find More Infomation About Us on our Linkedin</button>   
      
      <div className="box"> 
  <div className="box1">
  <img style={{width: '80%', paddingLeft: '10%', justifyContent: 'center', alignItems: 'center', position: 'flex'}} className="f"src={require('/Users/user/pixelhape/src/assets/small baby.png')} />

</div>

<button  style={{marginLeft: '10px', width: '100px'}} className="btn">Place Bid</button>
  <button style={{float: 'right', width: '100px'}} className="btn1">View Artwork</button>

  </div>
  
      </div>
  {/* <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
    <Box color="white" bgcolor="palevioletred" p={1}>
      Greetings from GeeksforGeeks!
    </Box>
    </div> */}
    </div>
  )
}

export default Home2