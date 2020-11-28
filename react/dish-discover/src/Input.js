import React from 'react';

function Input(props){
    return(
        <section 
            className='input'
            id='input'
            >
            <h1>Hello, culinary adventurer!</h1>
            <h4>Add your latest dish discovery:</h4>
            <div className='entry'>
                <input
                    className='entry_field'
                    id='entry_field'
                    placeholder='Submit some deliciousness'
                    ></input>
                <i 
                    className='fas fa-plus-circle search_button'
                    onClick={props.click}></i>
            </div>
        </section>

    );
}

export default Input;