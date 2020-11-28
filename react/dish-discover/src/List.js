import React from 'react';
//import Dish from './Dish'


function List(props){
    let buttonClass = 'dishesNotShown';
    let buttonText = 'Display your dishes';
    let listClass = 'invisible';
    if(props.show){
        buttonClass = 'dishesShown';
        buttonText = 'Hide dishes';
        listClass = 'visible';
    }
    const dishes = props.dishes.map(d =>{
        let id = Math.random();
        let val = d.getName();
        return(
            <li  
                key={id} 
            >{val}</li>
        )
    }); 
    return(
        <section 
            className='output'>
            <div className={buttonClass}
                onClick={props.toggle}>
                    <h3>{buttonText}</h3>
            </div>
            <div className={listClass}>
                <ul>
                    {dishes}
                </ul>
            </div>
        </section>
    );
}

export default List;