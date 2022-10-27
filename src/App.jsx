import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    deck: [],
  };

  // Botão "salvar" fica disponivel quando:
  // 1 - Os campos Nome, Descrição, Imagem e Raridade devem conter alguma informação (ou seja, os inputs não podem estar vazios).
  // 2 - A soma dos valores dos 3 atributos (attr1-input, attr2-input e attr3-input) não pode ultrapassar o valor 210.
  // 3 - Cada um dos três atributos pode ter no máximo 90 pontos cada.
  // 4 - Os atributos não podem receber valores negativos.
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
  };

  // Escrita na tela e salvo no state os valores escritos
  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        // Realiza a validação do botão cada vez que alterar algo na tela
        this.validateButton();
      },
    );
  };

  // Salva as informações do state atual e limpa os campos da tela
  onSaveButtonClick = () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, deck,
    } = this.state;
    const saveCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    // Verifica se a opção de trunfo está ativa
    if (cardTrunfo === 'on') {
      this.setState({
        // O state deck recebe o valor dos outros state para salvar a carta
        deck: deck.concat(saveCard),
        // Resetando o state
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: 'on',
        hasTrunfo: true,
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        // O state deck recebe o valor dos outros state para salvar a carta
        deck: deck.concat(saveCard),
        // Resetando o state
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: false,
        isSaveButtonDisabled: true,
      });
    }
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      deck,
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
          onSaveButtonClick={ this.onSaveButtonClick }
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
        {
          deck.length > 0 ? (
            deck.map((card) => (
              <Card
                { ...card }
                key={ card.cardName }
              />
            ))
          ) : <p> </p>
        }
      </div>
    );
  }
}

export default App;
