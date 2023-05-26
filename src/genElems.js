import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class Titles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ideaOne: this.props.decentralized,
            elementList: [
                {
                    ideaOne: 'Application assisting Clubs - promotion, marketing, connecting with patrons, social media for clubs.',
                    ideaTwo: 'E-Commerce application levying cryptocurrency as a means of transaction. Initializing a database for user storage.',
                    ideaThree: 'Smart Contract creation leveraging people as NFTs.',
                    ideaFour: 'Church platform creating a social media platform for 18-25 year olds to connect with one another - speed dating, events, users connecting to individual churches and churches connecting with one another.',
                    ideaFive: 'Creation of landing page, database, and application for entreprenuerial ideas or projects.'

                }

            ]
        };
    }

render() {
 
  return (
    <tr className="elem-row">
        <td>{this.props.ideaOne}</td>
        <td>{this.props.ideaTwo}</td>
        <td>{this.props.ideaThree}</td>
        <td>{this.props.ideaFour}</td>
        <td>{this.props.ideaFive}</td>
      </tr>
  );
  }
}
Titles.propTypes = {
    ideaOne: PropTypes.string,
    ideaTwo: PropTypes.string,
    ideaThree: PropTypes.string,
    ideaFour: PropTypes.string,
    ideaFive: PropTypes.string
  
}