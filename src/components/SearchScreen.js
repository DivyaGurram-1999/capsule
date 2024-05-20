import React from 'react';
import ProductSection from './ProductSection';
import './SearchScreen.css'; // Import CSS for styling

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      products: ['Salt A', 'Salt B', 'Salt C', 'Salt D'], // Available products
      filteredProducts: ['Salt A', 'Salt B', 'Salt C', 'Salt D'], // Products to display
    };
  }

  handleInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    this.setState({ searchTerm }, this.filterProducts);
  };

  filterProducts = () => {
    const { searchTerm, products } = this.state;
    const filteredProducts = products.filter(product =>
      product.toLowerCase().includes(searchTerm)
    );
    this.setState({ filteredProducts });
  };

  render() {
    return (
      <div>
        <h1 className="heading">Capsule Web Development Test</h1>
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={this.handleInputChange}
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="content">
          {this.state.filteredProducts.map(productName => (
            <ProductSection key={productName} productName={productName} />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchScreen;