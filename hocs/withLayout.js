import React from 'react'
import Layout from '../components/Layout';

const withLayout = (WrappedComponent,params) => {

    return function ({layoutData,...props}) {
        return (
            <Layout data={layoutData} {...params}>
                <WrappedComponent {...props} />
            </Layout>
        )
    }

}

export default withLayout