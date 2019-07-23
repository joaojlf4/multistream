// @flow
import { hot } from "react-hot-loader/root";
import React from "react";
import PropTypes from "prop-types"

import "./app.global.css";

type Props = {
	greeting: String
}

/**
 *
 *
 * @param {Props} props
 * props
 * @returns {JSX.Element}
 * element
 */
const App = ({
	greeting
}: Props) => (
	<div>
		<h2>{greeting} World!</h2>
	</div>
);

App.propTypes = {
	greeting: PropTypes.string.isRequired,
};

export default module.hot ? hot(App) : App;
