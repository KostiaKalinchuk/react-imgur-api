import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Container from "./components/MainLayout.js";
import GalleriesList from "./components/GalleriesList";
import GalleryView from "./components/GalleryView.js";
import reducers from "./reducers";

import "./css/reset.css";
import "./css/framework.css";
import "./css/app.css";
import './App.css';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <Container>
                            <Route exact path="/" component={GalleriesList}/>
                            <Route path="/gallery/:galleryId" component={GalleryView}/>
                        </Container>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
