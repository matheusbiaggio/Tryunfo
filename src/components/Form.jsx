import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-imput">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name-imput"
            placeholder="Insira o nome da carta"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            type="textarea"
            id="description-input"
            placeholder="Insira a descrição da carta"
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            type="select"
            id="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro </option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="trunfo-input"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
