import { h, Component } from 'preact';
import Language from '../Language';
import data from '../../../../public/anotherOne.json';

export default class LanguageList extends Component {
  state = {
    location: '',
  }

  render() {
    const { location } = this.state;
    return (
      <div>
      {
        setInterval(() => {
          this.setState({
            location: Math.floor(data.length * Math.random())
          });
        }, 3750)
      }
      <Language
        programmingLanguage={data[location]}
      />
      </div>
    )
  }
}
