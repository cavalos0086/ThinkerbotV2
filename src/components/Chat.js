import React,  { Component } from 'react';

export class Chat extends Component {

  constructor(props) {
   super(props);
   this.state = {msg: ''};
   this.handleChange = this.handleChange.bind(this);
   this.handleSend = this.handleSend.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="chat-container" style={{height: '400px'}} >
              <div className="area">
                <div className="L">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEyVlaWx0_FK_sz86j-CnUC_pfEqw_Xq_xZUm5CMIyEI_-X2hRUpx1BHL"
                    alt="man avatar"
                  />
                </div>
                <div className="text R textR">Hello There</div>
              </div>

              <div className="area">
                <div className="R">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxU35znsBhAWQd5BouLIVtH1P4WNa0JZ_XXpyViHOIARbM2igbNgC6_kp5"
                    alt="woman avatar"
                  />
                </div>
                <div className="text L textL">Hi, I am fine</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-8">
            <div className="area form-group form-check">
              <form onSubmit={this.handleSend}>
                <label>Enter message: (quit to end chat)</label>
                <input className="form-control" type="text" value={this.state.msg} onChange={this.handleChange}/>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }

  handleChange(event) {
    this.setState({msg: event.target.value});
  }

  handleSend(event) {
    event.preventDefault();
    const data = {
      message: this.state.msg
    };

    const requestOpt = {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    };

    fetch(`/api/sendMessage`, requestOpt)
      .then(res => res.text())
      .then((response => {
        console.log(response, 'in UI***');
      }))
      .catch((err) => {
        console.log(err, '***errr');
      });
  }
}
