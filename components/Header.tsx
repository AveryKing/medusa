import React from 'react';
import Link from 'next/link'
const Header = () => {
    return (
        <header>
            <div>
                <Link href={'/'}>
                    <img className="w-44 object-contain cursor-pointer"
                         src={'https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png'}
                         alt={'Medusa'} />
                </Link>
            </div>
            <div></div>
        </header>
    );
};

export default Header;