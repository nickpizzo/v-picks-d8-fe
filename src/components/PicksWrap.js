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
      const axios = await ajax()
      const response = await axios.get('/node/rest')
      if (response.data) {
        this.setState({ picks: response.data, loading: false })
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
        target_id: 'picks',
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
    try {
      const axios = await ajax()
      const response = await axios.delete(`/node/${nid}`)
      console.log('Node deleted', response)

      let picksToKeep = this.state.picks.filter(pick => {
        return pick.nid !== nid
      })
      this.setState({
        picks: picksToKeep
      })

    } catch (e) {
      alert(e)
    }
  }

  render() {
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