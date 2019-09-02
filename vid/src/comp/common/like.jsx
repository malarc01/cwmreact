import React from 'react';

// Input: liked: Boolean
// Output: onClick

//converted to stateles functional component

const Like = (props) => {
	console.log('OUTPUT =>: Like -> props', props);

	let classes = 'fa fa-heart';
	if (!props.liked) classes += '-o';

	return <i onClick={props.onLikeToggle} style={{ cursor: 'pointer' }} className={classes} aria-hidden='true' />;
};

export default Like;
