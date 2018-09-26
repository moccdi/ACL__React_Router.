import React from 'react';
import { string,array,object,bool} from 'prop-types'
import './style.css';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Content from "../../components/Content";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";






const Article = ({image,title,paragraphs,tags,user,editMode}) => (

    <div className="article">
        <header className="article-header"
            style={{backgroundImage:`url(${image})`}}
        >
            <div className="article-info">
                <Typography variant="display1" className="article-title">
                    {title}
                </Typography>
                <div className="tags">
                    {
                        tags.map(tag =>(
                            <Typography className="tag" variant="subheading">
                                {tag}
                            </Typography>
                        ))
                    }
                </div>
            </div>
        </header>

        {paragraphs.map(({sections,title})=> (
            <Paper className="paragraph">
                <Typography variant="headline" className="article-title">
                    {title}
                </Typography>
                {
                    sections.map((section,index) => (
                        <Content {...section} key={index} className={section} editMode={editMode}/>
                    ))
                }
            </Paper>
        ) )}
        {  user && !editMode && (<section className="comments">
                <TextField
                    id="standard-multiline-flexible"
                    label="Write your comment"
                    multiline
                    rowsMax="4"
                    className="text-field"
                    margin="normal"
                />
            </section>
        )}
        {
            user ?   <Avatar
                    alt={user.name}
                    src={user.avatar}
                    className=""
                />
                :  <Button color="inherit">Login</Button>
        }
    </div>
)
Article.proptTypes = {
    image: string.isRequired,
    title: string.isRequired,
    paragraphs: array.isRequired,
    tags: array,
    user: object,
    editMode: bool,
};
Article.defultProps = {
    tags: [],
    user: null,
    editMode: false,
}
export default Article;