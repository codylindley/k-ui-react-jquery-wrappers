# kendo-ui-react-jquery-colorpicker

The Kendo UI for jQuery ColorPicker widget wrapped as a React component.

* ColorPicker demos: [http://demos.telerik.com/kendo-ui/colorpicker/index](http://demos.telerik.com/kendo-ui/colorpicker/index)
* ColorPicker docs: [http://docs.telerik.com/kendo-ui/controls/editors/colorpicker/overview](http://docs.telerik.com/kendo-ui/controls/editors/colorpicker/overview)
* ColorPicker API: [http://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker](http://docs.telerik.com/kendo-ui/api/javascript/ui/colorpicker)

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
		<KendoColorPicker options={{
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
