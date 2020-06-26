import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
    }

    this.state = this.stateInicial;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name] : value
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.stateInicial);
  }

  render() {

    const { nome, livro, preco } = this.state;

    return (
      <form>
        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" name="nome" value={nome} onChange={this.handleChange} />

        <label htmlFor="livro">Livro</label>
        <input id="livro" type="text" name="livro" value={livro} onChange={this.handleChange} />

        <label htmlFor="preco">Preço</label>
        <input id="preco" type="text" name="preco" value={preco} onChange={this.handleChange} />

        <button type="button" onClick={this.submitForm} >Salvar</button>
      </form>
    )
  }
}

export default Form;