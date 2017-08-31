import { h, Component } from 'preact';
import Language from '../Language';
import styled from 'styled-components'
import data from '../../../../public/anotherOne.json';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export default class LanguageList extends Component {
  state = {
    location: '',
  }

  componentDidMount() {
    setInterval(() => {
      this.generateRandomLocation()
    }, 2075);
  }

  generateRandomLocation = () => {
    this.setState({
      location: Math.floor(data.length * Math.random())
    })
  }

  render() {
    const { location } = this.state;
    return (
      <Wrapper>
        <Language
          programmingLanguage={data[location]}
        />
      </Wrapper>
    )
  }
}
