import React from 'react';

class ProductSection extends React.Component {
  constructor(props) {
    super(props);
    if (props.productName === 'Salt C') {
      this.state = {
        form: 'capsule',
        strength: '500mg',
        packing: '30 strips',
      };
    } else {
      this.state = {
        form: props.productName === 'Salt D' ? 'miscellaneous' : 'tablet',
        strength: props.productName === 'Salt D' ? '20mcg' : '100mg',
        packing: props.productName === 'Salt D' ? '1 kit' : '5 strips',
      };
    }
  }

  handleFormChange = (form) => {
    this.setState({ form });
    if (form === 'injection') {
      this.setState({
        strength: '2ml',
        packing: '30',
      });
    } else if (form === 'syrup') {
      this.setState({
        strength: '50 mg/100 ml',
        packing: '50ml',
      });
    } else if (form === 'topicals') {
      this.setState({
        strength: '5%',
        packing: '5mg',
      });
    } else if (form === 'miscellaneous') {
      this.setState({
        strength: '20mcg',
        packing: '1 kit',
      });
    } else if (form === 'drop') {
      this.setState({
        strength: '1%w/v',
        packing: '2 ml',
      });
    } else {
      this.setState({
        strength: '100mg',
        packing: '5 strips',
      });
    }
  };

  handleStrengthChange = (strength) => {
    this.setState({ strength });
    if (this.state.form === 'miscellaneous' && strength === '6 units') {
      this.setState({ packing: '1 pack' });
    }
  };

  handlePackingChange = (packing) => {
    this.setState({ packing });
  };

  renderRightSideContent = () => {
    const { form, strength, packing } = this.state;
    const { productName } = this.props;

    if (productName === 'Salt C' && form === 'capsule' && strength === '500mg' && packing === '30 strips') {
      return <h2>No stores selling this product near you</h2>;
    }

    if (form === 'tablet') {
      if (packing === '10 strips') {
        return <h2>No stores selling this product near you</h2>;
      } else {
        return <h2>From $80</h2>;
      }
    } else if (form === 'injection') {
      if (packing === '30') {
        return <h2>From $90</h2>;
      } else if (packing === '60') {
        return <h2>No stores selling this product near you</h2>;
      }
    } else if (form === 'syrup') {
      if (strength === '500 mg/100 ml' && packing === '50ml') {
        return <h2>From ₹40</h2>;
      }
      return <h2>From ₹40</h2>;
    } else if (form === 'topicals') {
      if (packing === '10mg' || packing === '20mg' || packing === '25mg') {
        return <h2>No stores selling this product near you</h2>;
      } else if (packing === '15mg') {
        return <h2>From $50</h2>;
      } else {
        return <h2>No stores selling this product near you</h2>;
      }
    } else if (form === 'miscellaneous') {
      if (strength === '6 units' && packing === '1 pack') {
        return <h2>No stores selling this product near you</h2>;
      }
      return <h2>From $20</h2>;
    } else if (form === 'drop') {
      return <h2>From $30</h2>;
    }
  };

  render() {
    const { form, strength, packing } = this.state;
    const { productName } = this.props;
    const isFirstOrSecondProduct = productName === 'Salt A' || productName === 'Salt B';

    return (
      <div className="container">
        <h2>{`Product: ${productName}`}</h2>
        <div className="content">
          <div className="left-side">
            <h2>{productName}</h2>
            <h2>{`${form.charAt(0).toUpperCase() + form.slice(1)} | ${strength} | ${packing}`}</h2>
            <div className="form-buttons">
              <div>
                <h3>Form:</h3>
                {productName === 'Salt C' ? (
                  <button className={form === 'capsule' ? 'active' : ''} onClick={() => this.handleFormChange('capsule')}>Capsule</button>
                ) : (
                  <>
                    <button className={form === 'tablet' ? 'active' : ''} onClick={() => this.handleFormChange('tablet')}>Tablet</button>
                    <button className={form === 'injection' ? 'active' : ''} onClick={() => this.handleFormChange('injection')}>Injection</button>
                    {!isFirstOrSecondProduct && (
                      <>
                        <button className={form === 'syrup' ? 'active' : ''} onClick={() => this.handleFormChange('syrup')}>Syrup</button>
                        <button className={form === 'topicals' ? 'active' : ''} onClick={() => this.handleFormChange('topicals')}>Topicals</button>
                        <button className={form === 'miscellaneous' ? 'active' : ''} onClick={() => this.handleFormChange('miscellaneous')}>Miscellaneous</button>
                        <button className={form === 'drop' ? 'active' : ''} onClick={() => this.handleFormChange('drop')}>Drop</button>
                      </>
                    )}
                  </>
                )}
              </div>
              {form === 'tablet' && (
                <div>
                  <h3>Strengths:</h3>
                  <button className={strength === '100mg' ? 'active' : ''} onClick={() => this.handleStrengthChange('100mg')}>100mg</button>
                  <button className={strength === '500mg' ? 'active' : ''} onClick={() => this.handleStrengthChange('500mg')}>500mg</button>
                </div>
              )}
              {form === 'tablet' && (
                <div>
                  <h3>Packaging:</h3>
                  <button className={packing === '5 strips' ? 'active' : ''} onClick={() => this.handlePackingChange('5 strips')}>5 strips</button>
                  <button className={packing === '10 strips' ? 'active' : ''} onClick={() => this.handlePackingChange('10 strips')}>10 strips</button>
                </div>
              )}
              {form === 'injection' && (
                <div>
                  <h3>Strength:</h3>
                  <button className={strength === '2ml' ? 'active' : ''} onClick={() => this.handleStrengthChange('2ml')}>2ml</button>
                </div>
              )}
              {form === 'injection' && (
                <div>
                  <h3>Packaging:</h3>
                  <button className={packing === '30' ? 'active' : ''} onClick={() => this.handlePackingChange('30')}>30</button>
                  <button className={packing === '60' ? 'active' : ''} onClick={() => this.handlePackingChange('60')}>60</button>
                </div>
              )}
              {form === 'capsule' && productName === 'Salt C' && (
                <div>
                  <h3>Strength:</h3>
                  <button className={strength === '500mg' ? 'active' : ''} onClick={() => this.handleStrengthChange('500mg')}>500mg</button>
                </div>
              )}
              {form === 'capsule' && productName === 'Salt C' && (
                <div>
                  <h3>Packaging:</h3>
                  <button className={packing === '30 strips' ? 'active' : ''} onClick={() => this.handlePackingChange('30 strips')}>30 strips</button>
                </div>
              )}
            </div>
          </div>
          <div className="right-side">
            {this.renderRightSideContent()}
          </div>
        </div>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <ProductSection productName="Salt A" />
      <ProductSection productName="Salt B" />
      <ProductSection productName="Salt C" />
      <ProductSection productName="Salt D" />
    </div>
  );
};

export default App;