import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import App from './components/App';
import Home from './components/Home';
import RootReducer from './reducers/root';

const store = createStore(RootReducer, {});

ReactDOM.render((
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('root'));
