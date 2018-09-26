import {compose} from 'recompose';
import Header from './Header';
import withStubedUser from "../../hocs/withStubedUser";


export default compose(withStubedUser('admin')(Header));