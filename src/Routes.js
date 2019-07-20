import React from 'react'
import {Route} from 'react-router-dom'
import IndexPage from './components/IndexPage';
import Dashboard from './components/ProviderUser/Dashboard';
import CreateQueue from './components/ProviderUser/Queue/Create';

const Routes = ()=>{
    return(
        <div>
            <Route path="/" exact component={IndexPage}/>
            
            
            <Route path="/provider/" exact component={Dashboard}/>
            <Route path="/provider/queue/create" exact component={CreateQueue}/>
        </div>
    )
}

export default Routes