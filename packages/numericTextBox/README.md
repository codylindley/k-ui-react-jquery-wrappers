# kendo-ui-react-jquery-numerictextbox

The Kendo UI for jQuery NumericTextBox widget wrapped as a React component.

## Install

```bash
npm i kendo-ui-react-jquery-numerictextbox
```

## Usage Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import KendoNumericTextBox from 'kendo-ui-react-jquery-numerictextbox';

//Don't forget CSS, webpack used to include CSS
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';

var App = React.createClass({
  render: function() {
	  return (<KendoNumericTextBox options={{
			format: "p0",
			placeholder: "Select A Value",
			min: 0,
			max: 0.1,
			step: 0.01
		}}>
	  </KendoNumericTextBox>);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
```

## React Props

Every KUI React Wrapper can make use of the following React props:

* `options`
* `methods`
* `events`
* `unbindEvents`
* `triggerEvents`

Each is demonstrated below using a `<KendoDropDownList>` KUI React wrapper.

```javascript
<KendoDropDownList
	//only updates upon state change from above if widget supports setOptions()
	//don't define events here, do it in events prop
	options={{ //nothing new here, object of KUI configuration values
		dataSource:[{
			text: "Item1",
			value: "1"
		}, {
			text: "Item2",
			value: "2"
		}, {
			text: "Item3",
			value: "3"
		}],
		dataTextField: "text",
		dataValueField: "value"
	}}
	//updates if object is different from initial mount
	methods={{ //name of method and array of arguments to pass to method
		open:[], //send empty array if no arguments
		value:['2']
	}}
	//Right now, always updates
	events={{ //name of event, and callback
		close:function(){console.log('dropdown closed')},
		select:function(){console.log('item selected')},
		open:function(){console.log('dropdown opened')}
	}}
	//updates if array is different from initial mount
	unbindEvents={[ //name of event to unbind, string
		"select"
	]}
	//updates if array is different from initial mount
	triggerEvents={[ //name of event to trigger, string
		"open",
	]}>
		<input className="kendoDropDownList" />
</KendoDropDownList>
```

## KUI API

* NumericTextBox demos: [http://demos.telerik.com/kendo-ui/numerictextbox/index](http://demos.telerik.com/kendo-ui/numerictextbox/index)
* NumericTextBox docs: [http://docs.telerik.com/kendo-ui/controls/editors/numerictextbox/overview](http://docs.telerik.com/kendo-ui/controls/editors/numerictextbox/overview)
* NumericTextBox API: [http://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox](http://docs.telerik.com/kendo-ui/api/javascript/ui/numerictextbox)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
