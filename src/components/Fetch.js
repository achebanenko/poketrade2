import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DisplayError from './DisplayError';
import * as actionCreators from '../actions';

class Fetch extends Component {

  fetchPromise = async () => {
    // Remote address
    let url;
    switch(this.props.type) {
      case 'sets':
        url = 'https://api.pokemontcg.io/v1/sets';
        break;
      case 'cards':
        const query = new URLSearchParams(this.props.query);
        const code = query.get('setCode');
        url = `https://api.pokemontcg.io/v1/cards?setCode=${code}`;
        break;
      default:
        break;
    }
    
    const res = await fetch(url);

    if(res.ok) {
      const json = await res.json();
      return json;
    }
  }

  componentDidMount() {
    this.props.loadingData(true)
    this.props.resetFilter(this.props.type);

    // Call for and save data
    this.fetchPromise()
      .then(json => {
        this.props.storeData(json);
        this.props.loadingData(false);
      })
      .catch(err => {
        this.props.saveErrorMessage('Sorry, fetching failed');
      });
  }

  render() {
    if(this.props.errorMessage) {
      return <DisplayError message={this.props.errorMessage} />
    }
    return this.props.render( this.props );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  state => state,
  mapDispatchToProps
)(Fetch);