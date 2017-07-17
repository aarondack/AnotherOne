import { h, Component } from 'preact';
import Language from '../Language';
import data from '../../../../public/anotherOne.json';

export default class LanguageList extends Component {
  state = {
    location: '',
  }

  componentDidMount() {
    setInterval(() => {
      this.generateRandomLocation()
    }, 3000);
  }

  generateRandomLocation = () => {
    this.setState({
      location: Math.floor(data.length * Math.random())
    })
  }

  render() {
    const { location } = this.state;
    return (
      <div>
        <Language
          programmingLanguage={data[location]}
        />
      </div>
    )
  }
}
