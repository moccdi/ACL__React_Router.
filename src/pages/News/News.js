import React from 'react';
// import { withProps } from 'recompose';
import {array,func} from 'prop-types';
import Column from "../../components/Column/Column";
import './style.css'

const News = ({news,onReadArticle}) => (
    <div className="news">
        {news.map(column => <Column {...column}
                                    key={column.id}
                                    className="article"
                                    onLearMore={() => onReadArticle(column.id)}/>)}
    </div>
);
News.protoTypes = {
    news: array.isRequired,
    onReadArticle: func.isRequired,
}
export default News;
