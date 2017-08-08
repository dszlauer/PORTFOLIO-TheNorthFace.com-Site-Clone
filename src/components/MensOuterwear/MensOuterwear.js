import React,{ Component }from 'react';
import { getProducts } from './../../services/axiosServices';
import './../../styles/contentContainer.css';
import './../../styles/allProductsView.css';
import { Link } from 'react-router-dom';

export default class MensOuterwear extends Component {
  constructor(props) {
    super(props);

    this.state={
      products: []
    }

  }

componentDidMount() {
  console.log("COMPONENT MOUNTED")

  getProducts('mens', 'outerwear').then(products => {
    console.log("WORKING!!!");
    this.setState({products});
    console.log(this.state.products)
  });
}


  render() {

    const mensOuterwear = this.state.products.map( (product, i) => {
      return (
        <div key={i} className="productsContainer">
          <img src={product.img1} className="productImg" alt="Product"/>
          <h3 className="productName">{product.name}</h3>
          <p>${product.price}.00</p>
        </div>
      )
    } )

    return (
      <div className="contentContainer">
        <div className="breadCrumbs">
          <p><Link to="/">HOME</Link></p>
          <p>/</p>
          <p><Link to="/mens">{"MEN'S"}</Link></p>
          <h3>/ /</h3>
          <h3 className="currPage">OUTERWEAR</h3>
        </div>
        <div className="productsLayout">
        {mensOuterwear}
        </div>
      </div>
    )
  }

}