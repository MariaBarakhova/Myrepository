import React from 'react';

export default (props) => {
    console.log(props);
    return(
        <div className='header' >
        <h1>Header</h1>
        <nav className='menu'>
        {
            props.menuList &&  props.menuList.map(item =>
            <button>
                {
                    item.title
                }
            </button>
            )
        }

        </nav>
        </div>
    );
}