import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from "./App";
//import App2 from './App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
        document.getElementById('root')
);


// {/*<BrowserRouter>*/} прокидывает все history,location,match
//     {/*<App />*/}
// {/*</BrowserRouter>,*/}


// ReactDOM.render(<App2 />, document.getElementById('root'));

