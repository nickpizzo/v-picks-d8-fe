import React from 'react';

const Picks = (props) => {


    if (props.loading === false) {
      
      props.picks.map(pick => {
        console.log(pick);
          return (
            <div>
              <div>{pick}</div>
            </div>
          )
        })
    } else {
      return null;
    }


    

    // const picksList = picks.map(pick => {
    //   return (
    //     <div>
    //       <div>{ pick.nid }</div>
         
    //     </div>
    //   );
    // })
    // return (
    //   <div>test</div>
    // )
};

export default Picks;

// const loadedPicks = picks.map(pick => {
//   return (
//       <div>test</div>
  
//   );
// })