import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      articulos:[
        {
          codigo:1,
          descripcion:'Coca Cola',
          precio:2.50
        },
        {
          codigo:2,
          descripcion:'Inka Kola',
          precio:2.20
        },
        {
          codigo:3,
          descripcion:'Fanta',
          precio:1.70
        }
      ]
    }
    this.borrar = this.borrar.bind(this);
  }
  render() {
    return (
      <div>
        <table className="table table-dark">
        <thead><tr><th>Código</th><th>Descripción</th><th>Precio</th><th>Borrar</th></tr></thead>
        <tbody>
        {this.state.articulos.map(elemento => {
          return (
            <tr key={elemento.codigo}>
              <td>
                {elemento.codigo}  
              </td>
              <td>
                {elemento.descripcion}
              </td>
              <td>
                {elemento.precio}
              </td>              
              <td>
                <button onClick={()=>this.borrar(elemento.codigo)}>Borrar</button>
              </td>
            </tr>
          )
        })}    
        </tbody>    
        </table>
      </div>

    );
  }
  borrar(cod) {
    var temp = this.state.articulos.filter((el)=>el.codigo !== cod);
    this.setState({
      articulos: temp
    })
  }
}
export default App;

