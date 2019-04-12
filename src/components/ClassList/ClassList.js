import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: []
		};
	}

	componentDidMount() {
		axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then((res) => {
			this.setState({ students: res.data });
		});
	}

	render() {
		let getStudents = this.state.students.map((val, index) => {
			return (
				<Link to={`/student/${val.id}`}>
					<h3 key={index}>
						{' '}
						{val.first_name} {val.last_name}
					</h3>
				</Link>
			);
		});

		return (
			<div className="box">
				<h1>{this.props.match.params.class}</h1>
				<h2>ClassList:</h2>
				{getStudents}
			</div>
		);
	}
}
