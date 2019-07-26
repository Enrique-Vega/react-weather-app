import React, { Component } from 'react';

class Forms extends Component {
  render() {
    return (
        <div>
          <input type="text" name="city" placeholder="City.."/>
          <input type="text" name="country" placeholder="Country.."/>
          <input type="submit" name="Submit" placeholder="Get Weather"/>
        </div>
    )
  }
}

export default Forms;
