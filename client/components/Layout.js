import { Fragment } from 'react';

import Navbar from './navbar/Navbar';

function Layout({children}) {
    return (
        <Fragment>
            <Navbar />
            <main>
                {children}
            </main>
        </Fragment>
    )
}

export default Layout;