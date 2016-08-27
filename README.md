# Kendo UI (for jQuery) React Component Wrappers

React component wrappers that you can include via npm so that [Kendo UI for jQuery widgets](http://demos.telerik.com/kendo-ui/) can be used in a React app.

For example:

```
<KendoDropDownList options={{configuration:values}}>
	<select>
		<option>S - 6 3/5"</option>
		<option>M - 7 1/4"</option>
		<option>L - 7 1/8"</option>
		<option>XL - 7 5/8"</option>
	</select>
</KendoDropDownList>
```

## Available Wrappers

* [calendar](packages/calendar) on [npm](https://www.npmjs.com/package/kendo-ui-react-jquery-calendar)
* [colorPicker](packages/colorPicker) on [npm](https://www.npmjs.com/package/kendo-ui-react-jquery-colorpicker)
* [datePicker](packages/datePicker) on [npm](https://www.npmjs.com/package/kendo-ui-react-jquery-datepicker)
* [dropDownList](packages/dropDownList) on [npm](https://www.npmjs.com/package/kendo-ui-react-jquery-dropdownlist)
* [listView](packages/listView) on [npm](https://www.npmjs.com/package/kendo-ui-react-jquery-listview)

## Installing Wrappers

```bash
npm i -S kendo-ui-react-jquery-[NAME OF WIDGET ALL LOWERCASE e.g. dropdownlist]
```

For example the following command will install the [dropDownList](colorPicker) wrapper:

```bash
npm i -S kendo-ui-react-jquery-dropdownlist
```

## Example Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import KendoDropDownList from 'kendo-ui-react-jquery-dropdownlist';

//Don't forget CSS, webpack used to include CSS
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';

var App = React.createClass({
  render: function() {
	  return (
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
			);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
```

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
