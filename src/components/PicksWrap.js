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

  addPick = async (formDetails) => {
    // e.preventDefault()
    console.log(formDetails);
    const node = {
      type: [{
        target_id: 'article',
        target_type: 'node_type',
      }],
      title: [{
        value: formDetails.title,
      }],
      body: [{
        value: formDetails.body,
        format: 'plain_text',
      }],
    };

    try {
      const axios = await ajax()
      const response = await axios.post('/node', node)
      console.log('Node created: ', response)
      console.log(response.data);
      const newPick = {
        nid: response.data.nid[0].value,
        title: response.data.title[0].value,
        path: response.data.path[0].value
      }
      
      this.setState({
        picks: [newPick, ...this.state.picks]
      })
    } catch (e) {
      console.log(e);
    }
  }

  deletePick = async (nid) => {
    console.log(nid);
    try {
      const axios = await ajax() // wait for an initialized axios object
      const response = await axios.delete(`/node/${nid}`) // wait for the DELETE AJAX request to complete
      console.log('Node deleted', response)
    } catch (e) {
      alert(e)
    }
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
            deletePick={this.deletePick}
          />
        }
      </div>
    );
  }
}

PicksWrap.propTypes = {

};

export default PicksWrap;