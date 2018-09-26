import React from 'react';
import {compose, withProps} from 'recompose';
import Article from '../Article';
import withRequiredRole from '../../hocs/withRequiredRole';
import article from "../../stubs/article";
import withStubedUser from "../../hocs/withStubedUser";


export default compose(
    withProps({...article, editMode:true}),
    withStubedUser('logined'),
    withRequiredRole('admin'),
)(Article);
