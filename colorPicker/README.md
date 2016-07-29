# kendo-ui-react-jquery-colorpicker

> The Kendo UI for jQuery ColorPicker widget wrapped as a React component.

## Install

```bash
npm i -S kendo-ui-react-jquery-colorpicker
```

## Usage Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import KendoColorPicker from 'kendo-ui-react-jquery-colorpicker';

//Don't forget CSS, webpack used to include CSS
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';

var App = React.createClass({
  render: function() {
	  return (
			<KendoColorPicker
				options={{
					value:"#ffffff",
					buttons:false
			}} />
  	);
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
```

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
