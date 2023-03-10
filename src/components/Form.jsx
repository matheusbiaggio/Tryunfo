import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick,
      hasTrunfo,
    } = this.props;
    return (
      <form>
        <label htmlFor="name-imput">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name-imput"
            placeholder="Insira o nome da carta"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            type="textarea"
            id="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            type="select"
            id="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro </option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        {
          hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
            <label htmlFor="trunfo-input">
              Super Trybe Trunfo
              <input
                data-testid="trunfo-input"
                type="checkbox"
                id="trunfo-input"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>)
        }
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
