import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
	render(){
		return (
			<div>
				<h3>Home page</h3>
				<Link to="about">Go to about page</Link>
			</div>
		)
	}
}

export default Home;