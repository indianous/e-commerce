import React from 'react'

export default function NavList({pages}) {
    const list = [{id: 1, name: 'Page 1', link: '#',},{id: 2, name: 'Page 2', link: '#',},];
    // const list = pages;
    const listItems = list.map((item) => {
        return (
            <li style={{display: 'inline-block', padding: '10px'}} key={item.id.toString()}>
                <a href={item.link}>{item.name}</a>
            </li>
        );
    })
    
  return (
    <nav>
        <a href='./'>Home</a>
        <ul style={{listStyleType: 'none', display: 'block'}}>
            {listItems}
        </ul>
    </nav>
  )
}
