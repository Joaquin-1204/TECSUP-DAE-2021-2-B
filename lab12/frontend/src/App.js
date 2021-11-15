import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state =({
      prestamo:[],
      pos:null,
      titulo:'Nuevo',
      id:0,
      //codigo:'',
      libro:'',
      usuario:'',
      fechaprestamo:'',
      fechadevolucion:'',
    })
    this.cambioLibro = this.cambioLibro.bind(this);
    this.cambioUsuario = this.cambioUsuario.bind(this);
    this.cambioFechaPrestamo = this.cambioFechaPrestamo.bind(this);
    this.cambioFechaDevolucion = this.cambioFechaDevolucion.bind(this);
    this.mostrar = this.mostrar.bind(this);
    this.eliminar = this.eliminar.bind(this);
    this.guardar = this.guardar.bind(this);
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/prestamo')
    .then(res=> {
      this.setState({prestamo:res.data})
    })
  }

  cambioUsuario(e){
    this.setState({
      usuario : e.target.value
    })
  }

  cambioFechaPrestamo(e){
    this.setState({
      fechaprestamo : e.target.value
    })
  }

  cambioFechaDevolucion(e){
    this.setState({
      fechadevolucion : e.target.value
    })
  }

  cambioLibro(e){
    this.setState({
      libroid : e.target.value
    })
  }

  mostrar(cod,index){
    axios.get('http://127.0.0.1:8000/prestamo'+cod)
    .then(res => {
      this.setState({
        pos: index,
        titulo: 'Editar',
        id: res.data.id,
        libro :res.data.libro,
        usuario :res.data.usuario,
        fechaprestamo: res.data.fechaPrestamo,
        fechadevolucion: res.data.fechaDevolucion,
      })
    })
  }

  guardar(e){
    e.preventDefault();
    let cod = this.state.id;
    const datos = {
      libro: this.state.libro,
      usuario: this.state.usuario,
      fechaPrestamo: this.state.fechaprestamo,
      fechaDevolucion: this.state.fechadevolucion,
    }
    if(cod>0){
      //edición de un registro
      axios.put('http://127.0.0.1:8000/prestamo'+cod,datos)
      .then(res =>{
        let indx = this.state.pos;
        this.state.prestamo[indx] = res.data;
        var temp = this.state.prestamo;
        this.setState({
          pos:null,
          titulo:'Nuevo',
          id:0,
          libro:'',
          usuario:'',
          fechaprestamo:'',
          fechadevolucion:'',
          prestamo: temp
        });
      }).catch((error) =>{
        console.log(error.toString());
      });
    }else{
      //nuevo registro
      axios.post('http://127.0.0.1:8000/prestamo',datos)
      .then(res => {
        this.state.prestamo.push(res.data);
        var temp = this.state.prestamo;
        this.setState({
          id:0,
          libro:'',
          usuario:'',
          fechaprestamo: '',
          fechadevolucion: '',
          prestamo:temp
        });
      }).catch((error)=>{
        console.log(error.toString());
      });
    }
  }

  eliminar(cod){
    let rpta = window.confirm("Desea Eliminar?");
    if(rpta){
      axios.delete('http://127.0.0.1:8000/prestamo'+cod)
      .then(res =>{
        var temp = this.state.prestamo.filter((prestamo)=>prestamo.id !== cod);
        this.setState({
          prestamo: temp
        })
      })
    }
  }

  render() {
    return (
    <div>
      <Container>
          <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Libro</th>
              <th>Cliente</th>
              <th>Inicio</th>
              <th>Fin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.prestamo.map((prestamo,index) =>{
              return (
                <tr key={prestamo.id}>
                  <td>{prestamo.libro}</td>
                  <td>{prestamo.usuario}</td>
                  <td>{prestamo.fechaPrestamo}</td>
                  <td>{prestamo.fechaDevolucion}</td>
                  <td>
                  <Button variant="success" onClick={()=>this.mostrar(prestamo.id,index)}>Editar</Button>
                  <Button variant="danger" onClick={()=>this.eliminar(prestamo.id,index)}>Eliminar</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <hr />
        <h1>{this.state.titulo}</h1>
        <Form onSubmit={this.guardar}>
            <input type="hidden" value={this.state.id} />
            <Form.Group className="mb-3">
              <Form.Label>Libro</Form.Label>
              <Form.Control type="text" value={this.state.libro} onChange={this.cambioLibro} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cliente</Form.Label>
              <Form.Control type="text" value={this.state.usuario} onChange={this.cambioUsuario} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inicio</Form.Label>
              <Form.Control type="date" value={this.state.fechaprestamo} onChange={this.cambioFechaPrestamo} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fin</Form.Label>
              <Form.Control type="date" value={this.state.fechadevolucion} onChange={this.cambioFechaDevolucion} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
        </Form>
      </Container>
    </div>)
  }
}
export default App;