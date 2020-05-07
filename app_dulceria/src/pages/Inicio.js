import React, { Component } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import '../util/style.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TextField from '@material-ui/core/TextField';
import {Typography} from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//import {connect} from 'react-redux';
import { addProduct } from '../components/inventory';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';

export class Inicio extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            hiddenTable1: true,
            hiddenTable2: true,
            products: [],
            name: '',
            price: '',
            ammount: '',
            EDITproductId: '',
            EDITname: '',
            EDITprice: '',
            EDITammount: '',
            arrayPrueba: [],
            numeros:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    } 

    ///     CARGAR LA INFORMACION AL INICIAR LA PAGINA
    componentDidMount() {
        console.log("estado inicial");
        console.log(this.state);
        axios.get('/products')
            .then((res) => {
                console.log("imprime res recargados");
                console.log(res);
                console.log("imprime res.data recargados");
                console.log(res.data);
                let productos = [];
                for (var i = 0 ; i < res.data.length ; i++) {
                    productos.push({
                        productNo: i+1,
                        productId: res.data[i].productId,
                        name: res.data[i].name,
                        price: res.data[i].price,
                        ammount: res.data[i].ammount
                    })
                }
                this.setState({
                    products: productos,
                    arrayPrueba: res.data
                })
                console.log('arrayPrueba');
                console.log(this.state.arrayPrueba);
            })
            .catch(err => console.log(err));
    }

    ///     MANEJAR LA CREACION DE UN NUEVO PRODUCTO
    handleProductCreation = (event) => {
        console.log("submit");
        console.log(this.state);
        event.preventDefault();
        const productData = {
            name: this.state.name,
            price : this.state.price,
            ammount : this.state.ammount
        };

        axios.post('/product', productData)
        .then(res =>{
            console.log("imprime datos");
            console.log(res.data);
        })
        .catch(err => {
            console.log("imprime errores");
            console.log(err);
        })
        this.showingTable1();
        
        axios.get('/products')
            .then((res) => {
                console.log("imprime productos creados");
                console.log(res);
                let productos = [];
                for (var i = 0 ; i < res.data.length ; i++) {
                    productos.push({
                        productNo: i+1,
                        productId: res.data[i].productId,
                        name: res.data[i].name,
                        price: res.data[i].price,
                        ammount: res.data[i].ammount
                    })
                }
                this.setState({
                    products: productos
                })
            })
            .catch(err => console.log(err));
    }
    
    ///     MANEJAR LA EDICION DE UN PRODUCTO EXISTENTE
    handleProductEdition = (event) => {
        event.preventDefault();
        const productData = {
            productId: this.state.EDITproductId,
            name: this.state.EDITname,
            price : this.state.EDITprice,
            ammount : this.state.EDITammount
        };

        axios.post('/edit', productData)
        .then(res =>{
            console.log("imprime datos");
            console.log(res.data);
        })
        .catch(err => {
            console.log("imprime errores");
            console.log(err);
        })
        this.showingTable2(productData);

        axios.get('/products')
            .then((res) => {
                console.log("imprime productos editados");
                console.log(res);
                let productos = [];
                for (var i = 0 ; i < res.data.length ; i++) {
                    productos.push({
                        productNo: i+1,
                        productId: res.data[i].productId,
                        name: res.data[i].name,
                        price: res.data[i].price,
                        ammount: res.data[i].ammount
                    })
                }
                this.setState({
                    products: productos
                })
            })
            .catch(err => console.log(err));
    }

    ///     MANEJAR EL CAMBIO DE NUEVOS DATOS
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    ///     MOSTRAR TABLA 1
    showingTable1 = () => {
        if (this.state.hiddenTable1) {
            this.setState({
                hiddenTable1: false
            });
        } else {
            this.setState({
                hiddenTable1: true,
                name: '',
                price: '',
                ammount: ''
            });
        }
        if (!this.state.hiddenTable2) {
            this.setState({
                hiddenTable2: true,
                EDITproductId: '',
                EDITname: '',
                EDITprice: '',
                EDITammount: ''
            });
        }
        //this.state.hiddenTable1 = false;
        console.log("state");
        console.log(this.state);
    };

    ///     MOSTRAR TABLA 2
    showingTable2(product) {
        if (this.state.hiddenTable2) {
            this.setState({
                hiddenTable2: false,
                EDITproductId: product.productId,
                EDITname: product.name,
                EDITprice: product.price,
                EDITammount: product.ammount
            });
        } else {
            if (this.state.EDITproductId == product.productId) {
                this.setState({
                    hiddenTable2: true,
                    EDITproductId: '',
                    EDITname: '',
                    EDITprice: '',
                    EDITammount: ''
                });
            } else {
                this.setState({
                    hiddenTable2: false,
                    EDITproductId: product.productId,
                    EDITname: product.name,
                    EDITprice: product.price,
                    EDITammount: product.ammount
                });
            }
        }
        if (!this.state.hiddenTable1) {
            this.setState({
                hiddenTable1: true,
                name: '',
                price: '',
                ammount: ''
            });
        }

        console.log("state");
        console.log(this.state);
    };
    
    render() {
        const styles = {
            buttonRed: {
                backgroundColor: red['400']
            },
            buttonGreen: {
                backgroundColor: green['400']
            },
            buttonYellow: {
                backgroundColor: yellow['400']
            },
            tableGreyMedium: {
                backgroundColor: grey['300']
            },
            tableGreyLight: {
                backgroundColor: grey['100']
            },
            tableRed: {
                backgroundColor: red['300']
            },
            tablePurple: {
                backgroundColor: purple['300']
            },
            tableBlue: {
                backgroundColor: blue['300']
            },
            tableGreen: {
                backgroundColor: green['300']
            },
            tableYellow: {
                backgroundColor: yellow['300']
            },
            tableOrange: {
                backgroundColor: orange['300']
            },
        }


        const tabla = this.state.arrayPrueba.map((item) => (
                                        
                                        <TableRow hover key={item.productId}>
                                            <TableCell align='center'>{this.state.arrayPrueba.indexOf(item)+1}</TableCell>
                                            <TableCell align='center'>{item.productId}</TableCell>
                                            <TableCell align='center'>{item.name}</TableCell>
                                            <TableCell align='center'>{item.price}</TableCell>
                                            <TableCell align='center'>{item.ammount}</TableCell>
                                            <TableCell align='center'>
                                                <Button type="submit"
                                                    style={styles.buttonYellow}
                                                    onClick={this.showingTable2.bind(this,item)}
                                                >
                                                    <EditIcon/>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ));
        

        console.log("imprime estado recargado");
        console.log(this.state);

        return (
            <div>

            { this.state.arrayPrueba.map(function(item){
                return(
                    <div>
                    {item.name}
                    </div>
                )
            })

            }
                <Grid container>
                    <Grid item xs={12} style={styles.tableGreyLight}>
                        <br/>
                        <br/>
                    </Grid>
                    <Grid item xs={12} style={styles.tableGreyLight}>
                        <Typography variant="h2">INVENTARIO</Typography>
                    </Grid>
                    <Grid item xs={12} style={styles.tableGreyLight}>
                        <br/>
                        <br/>
                    </Grid>

                    <Grid item xs={12}>
                        <br/>
                        <br/>
                        <br/>
                    </Grid>

                    <Grid item xs={2}/>
                    <Grid item xs={8} align="right" >
                        <Button style={this.state.hiddenTable1 ? styles.buttonGreen:styles.buttonRed}
                            variant="contained"
                            onClick={this.showingTable1}
                        >
                            {this.state.hiddenTable1 ? "Agregar Producto":"Cancelar"}
                        </Button>
                    </Grid>
                    <Grid item xs={2}/>

                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <Paper hidden={this.state.hiddenTable1}>
                            <form noValidate onSubmit={this.handleProductCreation}>
                                <Table>
                                    <TableHead style={styles.tableGreyMedium}>
                                        <TableCell align="center" colSpan={2}>
                                            <Typography variant="h6">Agregar Nuevo Producto</Typography>
                                        </TableCell>
                                    </TableHead>
                                    <TableBody style={styles.tableGreyLight}>
                                        <TableRow>
                                            <TableCell colSpan={2}>
                                                <TextField name="name" type="text" label="Nombre" 
                                                    value={this.state.name}
                                                    fullWidth required
                                                    onChange={this.handleChange}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={1}>
                                                <TextField name="price" type="number" label="Precio" 
                                                    value={this.state.price}
                                                    fullWidth required
                                                    onChange={this.handleChange}
                                                />
                                            </TableCell>
                                            <TableCell colSpan={1}>
                                                <TextField name="ammount" type="number" label="Cantidad" 
                                                    value={this.state.ammount}
                                                    fullWidth required
                                                    onChange={this.handleChange}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center" colSpan={2}>
                                                <Button variant="contained" type="submit" style={styles.buttonGreen}>Agregar</Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}/>

                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <Paper hidden={this.state.hiddenTable2}>
                            <form noValidate onSubmit={this.handleProductEdition}>
                                <Table>
                                    <TableHead style={styles.tableGreyMedium}>
                                        <TableCell align="center" colSpan={2}>
                                            <Typography variant="h6">{"Producto " + this.state.EDITproductId}</Typography>
                                        </TableCell>
                                    </TableHead>
                                    <TableBody style={styles.tableGreyLight}>
                                        <TableRow>
                                            <TableCell colSpan={2}>
                                                <TextField name="EDITname" type="text" label="Nombre" 
                                                    value={this.state.EDITname}
                                                    fullWidth required
                                                    onChange={this.handleChange}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={1}>
                                                <TextField name="EDITprice" type="number" label="Precio" 
                                                    value={this.state.EDITprice}
                                                    fullWidth required
                                                    onChange={this.handleChange}
                                                />
                                            </TableCell>
                                            <TableCell colSpan={1}>
                                                <TextField name="EDITammount" type="number" label="Cantidad"
                                                    value={this.state.EDITammount}
                                                    fullWidth required
                                                    onChange={this.handleChange}
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="center" colSpan={2}>
                                                <Button variant="contained" type="submit" style={styles.buttonGreen}>Guardar</Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}/>

                    <Grid item xs={12}>
                        <br/>
                        <br/>
                        <br/>
                    </Grid>
                    
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <Paper>
                            <Table aria-label="simple table" stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>
                                            <Typography variant="h6">Numero</Typography>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Typography variant="h6">Id de Producto</Typography>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Typography variant="h6">Nombre</Typography>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Typography variant="h6">Precio</Typography>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Typography variant="h6">Cantidad</Typography>
                                        </TableCell>
                                        <TableCell align='center'>
                                            <Typography variant="h6">Editar</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {tabla}
                                   {/*  {this.state.arrayPrueba.map((item) => (
                                        
                                        <TableRow hover key={item.productId}>
                                            <TableCell align='center'>{this.state.arrayPrueba.indexOf(item)+1}</TableCell>
                                            <TableCell align='center'>{item.productId}</TableCell>
                                            <TableCell align='center'>{item.name}</TableCell>
                                            <TableCell align='center'>{item.price}</TableCell>
                                            <TableCell align='center'>{item.ammount}</TableCell>
                                            <TableCell align='center'>
                                                <Button type="submit"
                                                    style={styles.buttonYellow}
                                                    onClick={this.showingTable2.bind(this,item)}
                                                >
                                                    <EditIcon/>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))} */}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}/>
                    
                    </Grid>
                    <br/>
                    <br/>
                    <br/>               
            </div>
        )
    }
}

export default (Inicio)
