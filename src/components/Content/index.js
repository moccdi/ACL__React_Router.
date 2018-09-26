import React from 'react';
import {oneOf,string} from 'prop-types'
import {branch,renderComponent} from 'recompose';

import './style.css'

const SimpleContent = ({ type,content,info,className,editMode}) => {
    switch (type) {
        case 'text':
        {console.log(editMode)}
            return <p className={className}>{content}</p>;
        case 'image':
            return (<div className={className}>
                    <img src={content} alt={info} />
                        <p className="info">{info}</p>

                    </div>
                );
    }
    return null;
}

const EditContent = ({ type,content,info,className,editMode}) => {
    switch (type) {
        case 'text':
            return <textarea className={className}>{content}</textarea>;
        case 'image':
            return (<div className={className}>
                    <img src={content} alt={info} />
                    <p className="info">{info}</p>

                </div>
            );
    }
    return null;
}
const Content = branch(
    ({editMode}) => editMode,
        renderComponent(EditContent))(SimpleContent);

Content.propTypes = {
   type: oneOf(['image','text']).isRequired,
   content: string.isRequired,
   info: string,
   className: string,
}
Content.defaultProps = {
    className: '',
    info: '',
    editedMode:false,
}
export default Content;