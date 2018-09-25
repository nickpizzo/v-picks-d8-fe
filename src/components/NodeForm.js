import React from 'react';
import events from 'events'
import ajax from '../ajax';

// Create an emitter object so that we can do pub/sub
// const emitter = new events.EventEmitter();

const NodeForm = () => {
  const data = {}
  // note the 'async' keyword, it allows us to call 'await' later
  const handleSubmit = async (e) => {
    e.preventDefault()
    var node = {
      type: [{
        target_id: 'article',
        target_type: 'node_type',
      }],
      title: [{
        value: data.title,
      }],
      body: [{
        value: data.body,
        format: 'plain_text',
      }],
    };
    try {
      const axios = await ajax() // wait for an initialized axios object
      const response = await axios.post('/node', node) // wait for the POST AJAX request to complete
      console.log('Node created: ', response)
      // emitter.emit('NODE_UPDATED')
    } catch (e) {
      alert(e)
    }
  }
  const handleChange = (e, propName) => {
    data[propName] = e.target.value
  }

  return (
    <div>
      <h4>Create Node</h4>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input type="text" onChange={e => handleChange(e, 'title')}></input>
        <br />
        <label>Body</label>
        <br />
        <textarea onChange={e => handleChange(e, 'body')}></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NodeForm