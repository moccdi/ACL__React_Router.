import React from 'react';
import {Switch,Route,Redirect} from 'react-router';
import './style.css'
import News from "../News";
import Article from "../Article";
import EditArticle from '../EditArticle'
// const EditArticle = props => <Article {...props} editMode />

const Main = props => (
    <div className="app-root">
        <Switch>
            <Redirect exact from="/" to="/news" />
            <Route exact path="/news" component={News}/>
            <Route exact path="/news/:id" component={Article}/>
            <Route exact path="/news/:id/edit" component={EditArticle}/>
        </Switch>
    </div>
    );
export default Main;
//history.push(`/news/${columnId}`); params:{id:1-3} добавляеться через push
//path="/news/:id" будет добавлен params:{id:1-3}домаен будет id елемента parases