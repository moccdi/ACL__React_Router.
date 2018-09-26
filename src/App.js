import React from 'react';
//import {BrowserRouter as Router, NavLink, Route, Switch,Redirect} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Main from "./pages/Main";
//import {Redirect, Route, Switch} from "react-router";
//import News from "./pages/News";



const App = () => (
    <div className="app">
        <Header/>
        <Main/>
    </div>
);
export default App;

        //history.goBack(); возрашает на одно сылку назад
    //renderNothing() - рендорит ноль
    // // import Sidebar from "./components/Sidebar/Sidebar";
    // // import Dashboard from "./components/Router4FistLesson/Dashboard";
    // // import Profile from "./components/Router4FistLesson/Profile";
    // // import Wallets from "./components/Router4FistLesson/Wallets";
    // // import NodFound from "./components/Router4FistLesson/NodFound";
    // //
    // //
    // //
    // // class App2 extends Component {
    // //  render() {
    // //     return (
    // //         <Router>
    // //             <div className="app2">
    // //                 {/*<Switch>*/}
    // //                     {/*<Route path="/wallets" component={Sidebar}/>*/}
    // //                     {/*<Route exact path="/" component={Sidebar}/>*/}
    // //                 {/*</Switch>*/}
    // //                 <Sidebar/>
    // //                 <Switch>
    // //                     <Route exact path="/" component={Dashboard}/>
    // //                     <Route path="/profile" component={Profile}/>
    // //                     <Route path="/wallets" component={Wallets}/>
    // //                     {/*//<Route  component={NodFound}/>*/}
    // //                     <Redirect to="/wallets"/>
    // //                 </Switch>
    // //             </div>
    // //         </Router>
    // //     );
    // //   }
    // // }
    // //export default App2;
    //
    // {/*<Link to={m.path}>{m.title}</Link> обычные сылка пре переходе*/}
    // {/*<NavLink activeClassName="active" to={m.path}> навигация при переходе будет добавлять припереходе класс*/}
    // {/*<NavLink exact activeClassName="active" to={m.path}> exact будет добавлять только активной сылке класс*/}
    // //но активная цылка сбрасываеться на потомках,в документации надо создавать через children,что на активной сылке остался добавленный клас при переходе на потомок этого элемента
    //
    //
    //
    // //router wthRouter хок получаешь location,history,match
    //
    // //<Switch> если будет все Switch то тогда будет Sidebar там где есть path мы поставили условие
    //
    // // <Route  component={NodFound}/> если не написать  path но <Route  component={NodFound}/> это страница будет рендориться когда сылки на страницу не будет введена неверно
    // //   <Route  component={NodFound2}/> то тогда 2 отрендоряться
    //
    // //<Redirect to="/wallets"/> тоже что и   {/*//<Route  component={NodFound}/>*/} только будет работать походу на всех страницах всегда если что-то неправильно ввели сылку страницы
    // {/*<Redirect exact from="/" to="/news" />*/} когда убераешь news всеравно переходишь на news exact from="/" to="/news" типо всегда стартовая new  если что-то не дописоваешь
    // {/*<Route exact path="/news" component={News}/>*/}
    //
    // {/*<Switch> выбор только одной сылки*/}
    // {/*<Route  exact path="/" component={Dashboard}/> будет в списке последним,на открытие страницы, */}
    // {/*<Route path="/profile" component={Profile}/>*/}
    // {/*<Route path="/wallets" component={Wallets}/>*/}
    // // </Switch>
    //
    // {/*<Route path="/profile" component={Profile}/>*/}
    // {/*<Route path="/wallets" component={Wallets}/>*/}
    // {/*<Route path="/" component={Dashboard}/> будет в списке последним,на открытие страницы, */}

