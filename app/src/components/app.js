import { h, Component } from 'preact';
import LanguageList from './LanguageList';
import DJKhaled from '../../../public/AnotherOne.gif';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<link
					rel="stylesheet"
					href="//fonts.googleapis.com/css?family=Montserrat:400,500,700,800"
				/>
				<div className="khaled">
					<img src={DJKhaled} />
				</div>
				<LanguageList />
			</div>
		);
	}
}
