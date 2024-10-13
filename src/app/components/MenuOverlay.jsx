import React from 'react'
import NavLink from './NavLink';

//Creating the menu popout for when the screen is resized to mobile
const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map(
            (link, index) => <li key={index}>
                <NavLink href={link.path} title={link.title} />
            </li>
        )}
        </ul>
  );
};

export default MenuOverlay;
