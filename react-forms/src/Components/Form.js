import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      position: '',
      statusChecked: false,
      contractorStatus: false,
      formErrors: {name: '', select: ''},
      nameValid: false,
      selectValid: false,
      formValid: false
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

    this.position = (this.props.options || []).find(item => (item.position === this.state.position));
  }

  inputChangeHandler (e) {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({[name]: value}, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let selectValid = this.state.selectValid;
    switch(fieldName) {
      case 'name':
        nameValid = value.length >= 6;
        fieldValidationErrors.name = nameValid ? '' : 'name must be longer then 6 characters';
        break;
      case 'position':
        selectValid = value.length !== '';
        fieldValidationErrors.select = selectValid ? '': 'choose an option';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      nameValid: nameValid,
      selectValid: selectValid,
    });
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid &&
        this.state.selectValid});
  }

  setInitial() {
    this.setState({...this.defaultValues});
  }

  submit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.props.addPerson({
        name: this.state.name,
        position: this.state.position,
        statusChecked: this.position.status && this.state.statusChecked,
        ...(!!this.state.id ? {id: this.state.id} : {}),
        contractorStatus: this.position ? this.position.status : null
      });
      this.setInitial();
    }
  }

  render() {
    return (
      <div className="col-4 form">
        <form onSubmit={this.submit}>
          <div className={this.state.formErrors.name || this.state.formErrors.select ? 'form-group has-error' : 'form-group'}>
            <div className="row">
              <div className="col-5">
                <label htmlFor="name">Name</label>
              </div>
              <div className="col-7">
                <div className="error">{this.state.formErrors.name}</div>
              </div>
            </div>
            <input
              className={this.state.formErrors.name ? 'form-control has-error' : 'form-control'}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={this.state.name} onChange={this.inputChangeHandler}
            />
            <div className="row">
              <div className="col-5">
                <label htmlFor="select">Position</label>
              </div>
              <div className="col-7">
                <div className="error">{this.state.formErrors.select}</div>
              </div>
            </div>
            <select
              className={this.state.formErrors.select ? 'form-control has-error' : 'form-control'}
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
                <input className="btn btn-primary" type="submit" value={this.state.id ? "save" : "add"}/>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
