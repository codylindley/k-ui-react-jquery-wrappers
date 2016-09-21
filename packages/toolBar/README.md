# kendo-ui-react-jquery-toolbar

The Kendo UI for jQuery ToolBar widget wrapped as a React component.

## Install

```bash
npm i -S kendo-ui-react-jquery-toolbar
```

## Usage Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import KendoToolBar from 'kendo-ui-react-jquery-toolbar';

//Don't forget CSS, webpack used to include CSS
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';

var App = React.createClass({
  render: function() {
	  return (
			<KendoToolBar options={{
				items: [
					{
						type: "button",
						text: "Button",
						icon: "note",
						showIcon: "toolbar"
					},
					{
						type: "button",
						togglable: true,
						text: "Toggle Button",
						icon: "tick"
					},
					{
						type: "splitButton",
						text: "Split Button",
						menuButtons: [
							{ id: "option1", text: "Option 1" },
							{ id: "option2", text: "Option 2" },
							{ id: "option3", text: "Option 3" }
						]
					}
				]
			}}>
			</KendoToolBar>
	  );
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

* ToolBar demos: [http://demos.telerik.com/kendo-ui/toolbar/index](http://demos.telerik.com/kendo-ui/toolbar/index)
* ToolBar docs: [http://docs.telerik.com/kendo-ui/controls/navigation/toolbar/overview](http://docs.telerik.com/kendo-ui/controls/navigation/toolbar/overview)
* ToolBar API: [http://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar](http://docs.telerik.com/kendo-ui/api/javascript/ui/toolbar)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
