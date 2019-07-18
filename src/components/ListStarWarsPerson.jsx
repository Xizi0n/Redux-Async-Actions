import React, { Component } from "react";
import { connect } from "react-redux";
import { storeResult } from "../store/reducers/sw";

class ListStarWarsPerson extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.props.onQueryPeople}>Query SW people</button>
        <div className="results">
          Results:
          <ul>
            {/* itt csak megjelenítjük a kapott adatokat, ha vannak */}
            {this.props.persons.length !== 0
              ? this.props.persons.map(person => (
                  <li key={person.name}>
                    <div className="info">
                      <b>Name:</b> {person.name}
                    </div>
                    <div className="info">
                      <b>Height:</b> {person.height}
                    </div>
                    <div className="info">
                      <b>Mass:</b>
                      {person.mass}
                    </div>
                    <div className="info">
                      <b>Hair color: </b>
                      {person.hair_color}
                    </div>
                    <div className="info">
                      <b>Birth year: </b> {person.birth_year}
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    persons: state.sw_peoples
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onQueryPeople: () => dispatch(storeResult())
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ListStarWarsPerson);
