# kendo-ui-react-jquery-sparklines

The Kendo UI for jQuery Sparklines widget wrapped as a React component.

***WARNING:*** Must npm install professional version of Kendo UI using credentials.

You'll need to setup a `.netrc` file on your local system. This file contains the login (username & password) of the account on telerik.com in which you purchased [Kendo UI professional](http://www.telerik.com/kendo-ui) or [DevCraft](http://www.telerik.com/devcraft).

Below are the instructions for both Windows and Mac users.

***On Windows:***

Create a text file called `\_netrc` in your home directory (e.g. `c:\users\jane\_netrc`).

Next, Declare a HOME environment variable.

EXAMPLE

```
C:\> SETX HOME %USERPROFILE%
```

Add the credentials using the format in the example above.

Git might have problems resolving your home directory if it contains spaces in its path—for example, `c:\Documents and Settings\jane`). Therefore, update your %HOME% environment variable to point to a directory having no spaces in its name.

***On Mac:***

Create a file called `.netrc` in your home directory `~/.netrc` (i.e `/User/USERNAME/.netrc`). Make sure you modify the file permissions to make it readable only to you.

Add your credentials to the `~/.netrc` (i.e `/User/USERNAME/.netrc`) file using the format from the example below.

EXAMPLE:

```
machine bower.telerik.com
    login my-telerik.identity@example.com-here
    password my-password-here
```

## Install

```bash
npm i kendo-ui-react-jquery-sparklines
```

## Usage Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import KendoSparklines from 'kendo-ui-react-jquery-sparklines';
import Kendo from 'kendo/js/kendo.core';

//Don't forget CSS, webpack used to include CSS
import 'kendo/css/web/kendo.common.min.css';
import 'kendo/css/web/kendo.default.min.css';

var App = React.createClass({
  render: function() {
	  return (<KendoSparklines options={{
							data: [
								936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007,
								1004, 988, 990, 988, 987, 995, 946, 954, 991, 984,
								974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953,
								952, 940, 937, 980, 966, 965, 928, 916, 910, 980
							]
						}}></KendoSparklines><br /><br />
						<KendoSparklines options={{
							type: "column",
							data: [
								16, 17, 18, 19, 20, 21, 21, 22, 23, 22,
								20, 18, 17, 17, 16, 16, 17, 18, 19, 20,
								21, 22, 23, 25, 24, 24, 22, 22, 23, 22,
								22, 21, 16, 15, 15, 16, 19, 20, 20, 21
							],
							tooltip: {
								format: "{0} &deg;C"
							}
						}}></KendoSparklines><br /><br />
						<KendoSparklines options={{
							type: "area",
							data: [
								71, 70, 69, 68, 65, 60, 55, 55, 50, 52,
								73, 72, 72, 71, 68, 63, 57, 58, 53, 55,
								63, 59, 61, 64, 58, 53, 48, 48, 45, 45,
								63, 64, 63, 67, 58, 56, 53, 59, 51, 54
							],
							tooltip: {
								format: "{0} %"
							}
						}}></KendoSparklines><br /><br />
						<KendoSparklines options={{
							type: "bullet",
							data: [21, 23],
							valueAxis: {
								min: 0,
								max: 30,
								plotBands: [{
									from: 0, to: 15, color: "#787878", opacity: 0.15
								}, {
									from: 15, to: 22, color: "#787878", opacity: 0.3
								}, {
									from: 22, to: 30, color: "#787878", opacity: 0.15
								}]
							},
							tooltip: {
								visible: true
							}
						}}></KendoSparklines><br /><br />
						<KendoSparklines options={{
							type: "pie",
							data: [14, 10]
						}}>
			</KendoSparklines>
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

* Sparklines demos: [http://demos.telerik.com/kendo-ui/sparklines/index](http://demos.telerik.com/kendo-ui/sparklines/index)
* Sparklines docs: [http://docs.telerik.com/kendo-ui/controls/charts/sparklines/overview](http://docs.telerik.com/kendo-ui/controls/charts/sparklines/overview)
* Sparklines API: [http://docs.telerik.com/kendo-ui/api/javascript/ui/sparklines](http://docs.telerik.com/kendo-ui/api/javascript/ui/sparklines)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
