# Kendo UI (for jQuery) React Wrappers

Individual wrappers that you can include in your application so that Kendo UI for jQuery widgets can be used like so in a React application:

```
<KendoDropDownList options={{}}>
	<select>
		<option>S - 6 3/5"</option>
		<option>M - 7 1/4"</option>
		<option>L - 7 1/8"</option>
		<option>XL - 7 5/8"</option>
	</select>
</KendoDropDownList>
```

## Install

```bash
npm i -S kendo-ui-react-jquery-[NAME OF WIDGET ALL LOWERCASE e.g. colorpicker]
```

For example the following command will install the [colorPicker](colorPicker) wrapper:

```bash
npm i -S kendo-ui-react-jquery-colorpicker
```

## Example Usage

```
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
		}];,
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

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
