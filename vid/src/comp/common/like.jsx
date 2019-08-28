import React, { Component } from 'react';

// Input: liked: Boolean
// Output: onClick

class Like extends Component {
	render() {
		let classes = 'fa fa-heart';
		if (!this.props.liked) classes += '-o';

		return (
			<i onClick={this.props.onLikeToggle} style={{ cursor: 'pointer' }} className={classes} aria-hidden="true" />
		);
	}
}

export default Like;
