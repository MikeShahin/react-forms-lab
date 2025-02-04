import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
    console.log(this.state)
  }

  render() {
    let characters = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          name="message"
          id="message" 
          onChange={this.handleChange}
          value={this.state.message}
        />
        {characters}
      </div>
    );
  }
}

export default TwitterMessage;
