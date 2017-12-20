import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../Header'
import Cafe from '../components/Cafe'

class CafesList extends React.Component {

  createCafeList = () => {
    return this.props.cafes.map(cafe => {return(<Cafe />)})
  }

  render(){
    return(
      <div>
        <Header />
        <div>
          {this.createCafeList()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cafes: state.cafes
  }
}

export default connect(mapStateToProps)(CafesList)
