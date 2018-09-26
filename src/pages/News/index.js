
import { withProps,compose ,withHandlers} from 'recompose';
import News from './News'
import news from "../../stubs/news";

export default compose(
    withProps({ news}),
    withHandlers({
        onReadArticle: ({history}) => columnId => {
            console.log(history);
            history.push(`/news/${columnId}`);
        },
    }),
)(News);

