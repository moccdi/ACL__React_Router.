import users from '../stubs/users';
import {withProps} from 'recompose';

// const withStubedUser = roleName => BaseComponent => props => (
//     <BaseComponent {...props} user={users[roleName]} />
// );

const withStubedUser = roleName => withProps({
        user: users[roleName],
    });
export default withStubedUser;