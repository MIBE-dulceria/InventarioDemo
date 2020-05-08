import React, { Component } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TextField from '@material-ui/core/TextField';
import {Typography} from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
            filterTypeNUMBER: 0,
            filterTypeID: 0,
            filterTypePRODUCT: 0,
            filterTypePRICE: 0,
            filterTypeAMMOUNT: 0
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

    ///     MOSTRAR TABLA DE CREACION
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
        console.log("state");
        console.log(this.state);
    };

    ///     MOSTRAR TABLA DE EDICION
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
    
    filterby(field) {
        var productFilter = [];
        switch(field) {
            case "NUMBER":
                if (this.state.filterTypeNUMBER == 0) {
                    productFilter = this.state.products.sort(function(a, b){return a.productNo-b.productNo});
                    this.state.filterTypeNUMBER = 1;
                } else {
                    productFilter = this.state.products.sort(function(a, b){return b.productNo-a.productNo});
                    this.state.filterTypeNUMBER = 0;
                }
            break;
            case "ID":
                if (this.state.filterTypeID == 0) {
                    productFilter = this.state.products.sort(function(a, b){ if (a.productId > b.productId) {return -1;}if (b.productId > a.productId) {return 1;}return 0;});
                    this.state.filterTypeID = 1;
                } else {
                    productFilter = this.state.products.sort(function(a, b){ if (a.productId < b.productId) {return -1;}if (b.productId < a.productId) {return 1;}return 0;});
                    this.state.filterTypeID = 0;
                }
            break;
            case "PRODUCT":
                if (this.state.filterTypePRODUCT == 0) {
                    productFilter = this.state.products.sort(function(a, b){ if (a.name > b.name) {return -1;}if (b.name > a.name) {return 1;}return 0;});
                    this.state.filterTypePRODUCT = 1;
                } else {
                    productFilter = this.state.products.sort(function(a, b){ if (a.name < b.name) {return -1;}if (b.name < a.name) {return 1;}return 0;});
                    this.state.filterTypePRODUCT = 0;
                }
            break;
            case "PRICE":
                if (this.state.filterTypePRICE == 0) {
                    productFilter = this.state.products.sort(function(a, b){return a.price-b.price});
                    this.state.filterTypePRICE = 1;
                } else {
                    productFilter = this.state.products.sort(function(a, b){return b.price-a.price});
                    this.state.filterTypePRICE = 0;
                }
            break;
            case "AMMOUNT":
                if (this.state.filterTypeNUMBER == 0) {
                    productFilter = this.state.products.sort(function(a, b){return a.ammount-b.ammount});
                    this.state.filterTypeNUMBER = 1;
                } else {
                    productFilter = this.state.products.sort(function(a, b){return b.ammount-a.ammount});
                    this.state.filterTypeNUMBER = 0;
                }
            break;
        }

        this.setState({
            products: productFilter
        })
    }


    render() {
        const styles = {
            buttonRed: {
                backgroundColor: red['400']
            },
            buttonGreen: {
                backgroundColor: green['400']
            },
            buttonYellow: {
                backgroundColor: yellow['200']
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
            tableBlueMedium: {
                backgroundColor: blue['400']
            },
            tableBlueDark: {
                backgroundColor: blue['500']
            }
        }

        console.log("imprime estado recargado");
        console.log(this.state);

        return (
            <div>
                <Grid container>
                    <Grid item xs={12} style={styles.tableBlueDark}>
                        <br/>
                        <br/>
                    </Grid>
                    <Grid item xs={12} style={styles.tableBlueDark}>
                        <Typography variant="h2">INVENTARIO</Typography>
                    </Grid>
                    <Grid item xs={12} style={styles.tableBlueDark}>
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
                            <Typography variant="h6">
                                {this.state.hiddenTable1 ? "Agregar Producto":"Cancelar"}
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2}/>

                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <Paper hidden={this.state.hiddenTable1}>
                            <form noValidate onSubmit={this.handleProductCreation}>
                                <Table>
                                    <TableHead style={styles.tableBlueMedium}>
                                        <TableCell align="center" colSpan={2}>
                                            <Typography variant="h5">Agregar Nuevo Producto</Typography>
                                        </TableCell>
                                    </TableHead>
                                    <TableBody style={styles.tableGreyLight}>
                                        <TableRow>
                                            <TableCell colSpan={2}>
                                                <TextField name="name" type="text" label="Nombre de Producto" 
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
                                                <Button variant="contained" type="submit" style={styles.buttonGreen}>
                                                    <Typography variant="h6">
                                                        AGREGAR
                                                    </Typography>
                                                </Button>
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
                                    <TableHead style={styles.tableBlueMedium}>
                                        <TableCell align="center" colSpan={2}>
                                            <Typography variant="h6">{"Producto " + this.state.EDITproductId}</Typography>
                                        </TableCell>
                                    </TableHead>
                                    <TableBody style={styles.tableGreyLight}>
                                        <TableRow>
                                            <TableCell colSpan={2}>
                                                <TextField name="EDITname" type="text" label="Nombre de Producto" 
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
                                                <Button variant="contained" type="submit" style={styles.buttonGreen}>
                                                    <Typography variant="h6">
                                                        GUARDAR
                                                    </Typography>
                                                </Button>
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
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center' style={styles.tableBlue}>
                                            <Button onClick={this.filterby.bind(this,"NUMBER")}>
                                                <Typography variant="h5">Numero</Typography>
                                            </Button>
                                        </TableCell>
                                        <TableCell align='center' style={styles.tableBlue}>
                                            <Button onClick={this.filterby.bind(this,"ID")}>
                                                <Typography variant="h5">Id de Producto</Typography>
                                            </Button>
                                        </TableCell>
                                        <TableCell align='center' style={styles.tableBlue}>
                                            <Button onClick={this.filterby.bind(this,"PRODUCT")}>
                                                <Typography variant="h5">Producto</Typography>
                                            </Button>
                                        </TableCell>
                                        <TableCell align='center' style={styles.tableBlue}>
                                            <Button onClick={this.filterby.bind(this,"PRICE")}>
                                                <Typography variant="h5">Precio</Typography>
                                            </Button>
                                        </TableCell>
                                        <TableCell align='center' style={styles.tableBlue}>
                                            <Button onClick={this.filterby.bind(this,"AMMOUNT")}>
                                                <Typography variant="h5">Cantidad</Typography>
                                            </Button>
                                        </TableCell>
                                        <TableCell align='center' style={styles.tableBlue}>
                                            <Typography variant="h5">EDITAR</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.products && this.state.products.length !== 0 ? this.state.products.map((item, key) => (
                                        <TableRow hover key={key}>
                                            <TableCell align='center'>
                                                <Typography variant="h6">
                                                    {item.productNo}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'>
                                                <Typography variant="h6">
                                                    {item.productId}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'>
                                                <Typography variant="h6">
                                                    {item.name}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'>
                                                <Typography variant="h6">
                                                    ${item.price}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'style={item.ammount==0 ? styles.tableRed:styles.tableGreyLight}>
                                                <Typography variant="h6">
                                                    {item.ammount}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align='center'>
                                                <Button type="submit"
                                                    style={styles.buttonYellow}
                                                    onClick={this.showingTable2.bind(this,item)}
                                                >
                                                    <EditIcon/>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )):
                                    <TableRow align="center">
                                        <TableCell colSpan={1}/>
                                        <TableCell colSpan={3}> <Typography variant="h3" align="center">No hay productos</Typography></TableCell>
                                        <TableCell colSpan={1}/>
                                    </TableRow>}
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
