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
    isSaveButtonDisabled: true,
  };

  validateButton = () => {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
    } = this.state;
    const sumMax = 210;
    const pointsMax = 90;
    let isValid = false;
    if (
      (cardName.length === 0 || cardDescription.length === 0
      || cardImage.length === 0 || cardRare.length === 0)
      || ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > Number(sumMax))
      || (Number(cardAttr1) > Number(pointsMax) || Number(cardAttr1) < 0)
      || (Number(cardAttr2) > Number(pointsMax) || Number(cardAttr2) < 0)
      || (Number(cardAttr3) > Number(pointsMax) || Number(cardAttr3) < 0)
    ) {
      isValid = false;
    } else {
      isValid = true;
    }
    this.setState({
      isSaveButtonDisabled: !isValid,
    });
    console.log(isValid);
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateButton();
      },
    );
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
