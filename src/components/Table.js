import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
}

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Paulo</td>
        <td>React</td>
        <td>R$100,00</td>
        <td><button>Remover</button></td>
      </tr>
      <tr>
        <td>Nicholas</td>
        <td>React</td>
        <td>R$100,00</td>
        <td><button>Remover</button></td>
      </tr>
      <tr>
        <td>Daniel</td>
        <td>React</td>
        <td>R$100,00</td>
        <td><button>Remover</button></td>
      </tr>
    </tbody>
  );
}

class Table extends Component {

  render() {
    return(
      <table>
        <TableHead />
        <TableBody />
      </table>
    );
  }
}

export default Table;