import { h, Component } from 'preact';
import LanguageList from './LanguageList';
import DJKhaled from '../../../public/AnotherOne.gif';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<div className="khaled">
					<img src={DJKhaled} />
				</div>
				<LanguageList />
			</div>
		);
	}
}
