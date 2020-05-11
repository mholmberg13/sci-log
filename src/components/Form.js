import React from "react";
import Input from "./Input.js";


class Form extends React.Component {
  state = {
    date: "",
    title: "",
    body: "",
    author: ""
  };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    
  };
  handleSubmit = (event) => {
    console.log("running");
    event.preventDefault();

    const { date, title, body, author } = this.state;
    const entry = {
      date: date,
      title: title,
      body: body,
      author: author
    };

    if (this.props.entry) entry.id = this.props.entry.id;

    this.props.handleSubmit(event, entry);
    
  };

  
  componentDidMount() {
    if (this.props.entry) {
        this.setState({
          date: this.props.entry.date || '',
          title: this.props.entry.title || '',
          body: this.props.entry.body || '',
          author: this.props.entry.author || '',
          id: this.props.entry.id || ''
        })
      }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"date"}
        //   placeholder={this.props.entry.date}
          type={"text"}
          value={this.state.date}
          id={"date"}
        />
        <Input
          handleChange={this.handleChange}
          name={"title"}
        //   placeholder={this.props.entry.title}
          type={"text"}
          value={this.state.title}
          id={"title"}
        />
        <Input
          handleChange={this.handleChange}
          name={"body"}
        //   placeholder={this.props.entry.body}
          type={"text"}
          value={this.state.body}
          id={"body"}
        />
        <Input
          handleChange={this.handleChange}
          name={"author"}
        //   placeholder={this.props.entry.author}
          type={"text"}
          value={this.state.author}
          id={"author"}
        />
        <input type="submit" value={this.props.entry ? "UPDATE" : "ADD"} />
      </form>
    );
  }
}
export default Form;