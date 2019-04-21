import React,  { Component } from 'react';

export class Chat extends Component {
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
            <div className="area">
              <div className="input-group">
                <textarea className="form-control" aria-label="With textarea"></textarea>
              </div>
              <button className="btn btn-secondary mt-4">Send</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
