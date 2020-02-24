import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      position: '',
      statusChecked: false,
      contractorStatus: false
    };

    this.defaultValues = {
      id: null,
      name: "",
      position: "",
      statusChecked: false
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.personData !== prevProps.personData) {

      this.setState((state) => ({
        ...state,
        ...(!!this.props.personData ? this.props.personData : this.defaultValues),
      }));
    }
    console.log(this.props.options.find(item => (item.position === this.state.position)).status);
    this.position = (this.props.options || []).find(item => (item.position === this.state.position));
  }

  inputChangeHandler (e) {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({[name]: value});
  }

  setInitial() {
    this.setState({...this.defaultValues});
  }

  submit(e) {
    e.preventDefault();
    if (!this.state.name.length || !this.state.position.length) {
      return;
    }

    this.props.addPerson({
      name: this.state.name,
      position: this.state.position,
      statusChecked: this.position.status ? this.state.statusChecked : !this.state.statusChecked,
      ...(!!this.state.id ? {id: this.state.id} : {}),
      contractorStatus: this.position ? this.position.status : null
    });
    this.setInitial();
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <form onSubmit={this.submit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={this.state.name} onChange={this.inputChangeHandler}
              />
              <label htmlFor="select">Position</label>
              <select
                className="form-control"
                name="position"
                id="select"
                value={this.state.position} onChange={this.inputChangeHandler}
              >
                {this.props.options.map((pos, idx) => {
                  return <option value={pos.position} key={idx}>{pos.position}</option>
                })}
              </select>
              <div className="row submit">
                <div className="col-9">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name='statusChecked'
                      type="checkbox"
                      id="check"
                      checked={this.state.statusChecked} onChange={this.inputChangeHandler}
                    />
                    <label className="form-check-label" htmlFor="check">
                      <span>Contractor</span>
                    </label>
                  </div>
                </div>
                <div className="col-3">
                  <input className="btn btn-primary" type="submit" value={this.state.id ? "save" : "add"} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Form;
