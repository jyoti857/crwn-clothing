import React from 'react';
import './menu-items.scss';

export const MenuItems =({title, subtitle, imageUrl, size}) =>(
    <div  className = {`${size} menu-item`}>
            <div className = 'background-image' style={{
                backgroundImage: `url(${imageUrl})`
        }}>
                </div>
                    <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className = 'subtitle'>{subtitle || 'SHOP NOW'}</span>
                    </div>
                </div>
);
