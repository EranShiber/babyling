import React from "react";

const timeCircle = {
  height: 200,
  border: "1px solid black",
  borderRadius: 5
};

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Babyling</h1>
        <form 
        onSubmit={this.props.hendleSubmit}
         className="form-group">
          <input
            onChange={this.props.hendleInputChange}
            className="form-control main-input "
            type="text"
            placeholder="months left..."
          />
          <input className="btn btn-info btn-submit m-3" type="submit" />
          <div style={timeCircle}>
            <table className="table">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Days</th>
                <th scope="col">Hours</th>
                <th scope="col">Weeks</th>
              </tr>
              <tr>
                <th scope="col" />
                <th scope="col">234</th>
                <th scope="col">260</th>
                <th scope="col"> 4 </th>
              </tr>
            </table>
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
