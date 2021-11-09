import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state =({
      series:[],
      pos:null,
      titulo:'Nuevo',
      id:0,
      nombre:'',
      fecha:'',
      rating:'0',
      categoria:''
    })
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioFecha = this.cambioFecha.bind(this);
    this.cambioRating = this.cambioRating.bind(this);
    this.cambioCategoria = this.cambioCategoria.bind(this);
    this.mostrar = this.mostrar.bind(this);
    this.eliminar = this.eliminar.bind(this);
    this.guardar = this.guardar.bind(this);
  }
  componentDidMount(){
    axios.get('https://cesarapi.herokuapp.com/series/')
    .then(res=> {
      this.setState({series:res.data})
    })
  }
  cambioNombre(e){
    this.setState({
      nombre : e.target.value
    })
  }
  cambioFecha(e){
    this.setState({
      fecha : e.target.value
    })
  }
  cambioCategoria(e){
    this.setState({
      categoria : e.target.value
    })
  }
  cambioRating(e){
    this.setState({
      rating : e.target.value
    })
  }

  render() {
    return(
      <div>
        <Container>
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Rating</th>
              <th>Categoria</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.series.map((serie,index) =>{
              return (
                <tr key={serie.id}>
                  <td>{serie.name}</td>
                  <td>{serie.release_date}</td>
                  <td>{serie.rating}</td>
                  <td>{serie.category}</td>
                  <td>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container>
      </div>
    )
  }
}
export default App;


