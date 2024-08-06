import React from 'react';

import Header from './Header';
import Footer from './Footer';

type TLayoutProps = {
    children: React.ReactNode;
}

function Layout({children} : TLayoutProps) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout;