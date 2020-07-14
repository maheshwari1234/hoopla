import React from 'react';
import simples from './simple.json'


const sim=simples.Electronics
class Simple extends React.Component{
    render(){
       return(
           <React.Fragment>
            {sim.map((i,j)=>{
                return(
                    <ul>
                        <li>{i.Name}</li>
                      <img src={i.Image}/>
                    </ul>

                )
            
            })

            }
            </React.Fragment>

       )
    }
}

export default Simple