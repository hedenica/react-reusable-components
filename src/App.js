import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Table from './components/Table';
import Form from './components/Form';

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
    ],
  }

  removeAutor = (index) => {

    const { autores } = this.state;

    this.setState (
      {
        autores : autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      }
    )
  }

  handleSubmit = (autor) => {
    this.setState({autores: [...this.state.autores, autor]})
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do Código</h1>
          <Table autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
