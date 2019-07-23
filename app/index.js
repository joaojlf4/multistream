import React from "react";
import { render } from "react-dom";

import App from "./app.js";

render(
	<App greeting="Hello" />,
	document.getElementById("root")
);
