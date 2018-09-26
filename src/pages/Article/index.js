import {withProps,compose} from 'recompose';
import Article from './Article';
import article from "../../stubs/article";

import withStubedUser from "../../hocs/withStubedUser";




export default compose(withProps(article),withStubedUser('admin'))(Article);


