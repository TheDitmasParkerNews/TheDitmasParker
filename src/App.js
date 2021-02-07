import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Archives from './components/Archives';

export default class App extends React.Componenet {
	render() {
		return (
			<>
				<Router>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							&nbsp;&nbsp;
							<li>
								<Link to="/about">About us</Link>
							</li>
							&nbsp;&nbsp;
							<li>
								<Link to="/archives">Archives</Link>
							</li>
						</ul>
					</nav>
					<hr />
					<Switch>
						<Route exact path="/">
								<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/archives">
							<Archives />
						</Route>
					</Switch>
				</Router>
			</>
		);
	}
}
