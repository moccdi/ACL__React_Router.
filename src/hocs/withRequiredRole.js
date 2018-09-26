import React from 'react';
import {compose,lifecycle} from 'recompose';

const withRequiredRole = roleName => lifecycle({
    componentDidMount( ){
        const { history,user } = this.props;
        if ( !user || user.role !== roleName){
            history.push('/');
        }
    },
});
export default withRequiredRole;