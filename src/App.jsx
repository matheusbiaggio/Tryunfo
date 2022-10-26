import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
  };

  // validateButton = () => {
  //   const {
  //     cardName, cardDescription, cardAttr1,
  //     cardAttr2, cardAttr3, cardImage, cardRare,
  //   } = this.state;
  //   const isValid = cardName.length === 0 || cardDescription.length === 0
  //     || cardAttr1.length === 0 || cardAttr2.length === 0 || cardAttr3.length === 0
  //     || cardImage.length === 0 || cardRare.length === 0;
  //   this.setState({
  //     isSaveButtonDisabled: isValid,
  //   });
  // };

  onInputChange = (event) => {
    const { name, value } = event.target;
    console.log('mudou');
    this.setState(
      {
        [name]: value,
      // },
      // () => {
      //   this.validateButton();
      },
    );
    console.log(name, ':', value);
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled, onSaveButtonClick,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
