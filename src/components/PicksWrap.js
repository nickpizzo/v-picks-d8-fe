import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ajax from '../ajax'
import Picks from './Picks';
import NewPick from './NewPick';

class PicksWrap extends Component {
  state = {
    loading: true,
    picks: [],
  }

  async componentDidMount() {
    try {
      const axios = await ajax() // wait for an initialized axios object
      const response = await axios.get('/node/rest') // wait for the POST AJAX request to complete
      if (response.data) {
        // setState will trigger repaint
        this.setState({ picks: response.data, loading: false })
        // console.log(this.state);
      }
      } catch (e) {
      alert(e)
    }
  }

  addPick = async (e) => {
    // e.preventDefault()
    // console.log(this.state);
    // const node = {
    //   type: [{
    //     target_id: 'article',
    //     target_type: 'node_type',
    //   }],
    //   title: [{
    //     value: this.state.title,
    //   }],
    //   body: [{
    //     value: this.state.body,
    //     format: 'plain_text',
    //   }],
    // };
    // console.log(node);
    // try {
    //   const axios = await ajax() // wait for an initialized axios object
    //   const response = await axios.post('/node', node) // wait for the POST AJAX request to complete
    //   console.log('Node created: ', response)
    //   // emitter.emit('NODE_UPDATED')
    // } catch (e) {
    //   alert(e)
    // }
  }

  render() {
  
    console.log(this.state);

    return (
      <div>
        <NewPick onSubmit={this.addPick} />
        {this.state.loading ? null : 
          <Picks 
            picks={this.state.picks} 
            loading={this.state.loading} 
          />
        }
      </div>
    );
   
  }
}

PicksWrap.propTypes = {

};

export default PicksWrap;