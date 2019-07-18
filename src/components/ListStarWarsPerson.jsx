import React, { Component } from "react";
import { connect } from "react-redux";
import { storeResult } from "../store/reducers/sw";

class ListStarWarsPerson extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={this.props.onQueryPeople}>Query SW people</button>
        <div className="Results">
          Results:
          <ul>
            {/* itt csak megjelenítjük a kapott adatokat, ha vannak */}
            {this.props.persons.length !== 0
              ? this.props.persons.map(person => (
                  <li key={person.name}>
                    <b>Name: </b> {person.name} &emsp;
                    <b>Height: </b> {person.height}&emsp;
                    <b>Mass: </b>
                    {person.mass} &emsp;
                    <b>Hair color: </b>
                    {person.hair_color}&emsp;
                    <b>Birth year: </b> {person.birth_year}
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
