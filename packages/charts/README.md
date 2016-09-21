# kendo-ui-react-jquery-charts

The Kendo UI for jQuery Charts widget wrapped as a React component.

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
npm i kendo-ui-react-jquery-charts
```

## Usage Example

Note that the example below shows a scatter chart but chart can produce the following data visualizations as well:

[Area](http://demos.telerik.com/kendo-ui/area-charts/index)<br />[Bar](http://demos.telerik.com/kendo-ui/bar-charts/index)<br />[Box Plot](http://demos.telerik.com/kendo-ui/box-plot-charts/index)<br />[Bubble](http://demos.telerik.com/kendo-ui/bubble-charts/index)<br />[Bullet](http://demos.telerik.com/kendo-ui/bullet-charts/index)<br />[Donut](http://demos.telerik.com/kendo-ui/donut-charts/index)<br />[Funnel](http://demos.telerik.com/kendo-ui/funnel-charts/index)<br />[Line](http://demos.telerik.com/kendo-ui/line-charts/index)<br />[Pie](http://demos.telerik.com/kendo-ui/pie-charts/index)<br />[Polar](http://demos.telerik.com/kendo-ui/polar-charts/index)<br />[Radar](http://demos.telerik.com/kendo-ui/radar-charts/index)<br />[Range Bar](http://demos.telerik.com/kendo-ui/range-bar-charts/index)<br />[Scatter](http://demos.telerik.com/kendo-ui/scatter-charts/index)<br />[Waterfall](http://demos.telerik.com/kendo-ui/waterfall-charts/index)

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import KendoCharts from 'kendo-ui-react-jquery-charts';

//Don't forget CSS, webpack used to include CSS
import 'kendo/css/web/kendo.common.min.css';
import 'kendo/css/web/kendo.default.min.css';

var App = React.createClass({
  render: function() {
	  return (<KendoCharts options={{
							title: {
									text: "Rainfall - Wind Speed"
								},
								legend: {
									position: "bottom"
								},
								seriesDefaults: {
									type: "scatter"
								},
								series: [{
									name: "January 2008",
									data: [
										[16.4, 5.4],
										[21.7, 2],
										[25.4, 3],
										[19, 2],
										[10.9, 1],
										[13.6, 3.2],
										[10.9, 7.4],
										[10.9, 0],
										[10.9, 8.2],
										[16.4, 0],
										[16.4, 1.8],
										[13.6, 0.3],
										[13.6, 0],
										[29.9, 0],
										[27.1, 2.3],
										[16.4, 0],
										[13.6, 3.7],
										[10.9, 5.2],
										[16.4, 6.5],
										[10.9, 0],
										[24.5, 7.1],
										[10.9, 0],
										[8.1, 4.7],
										[19, 0],
										[21.7, 1.8],
										[27.1, 0],
										[24.5, 0],
										[27.1, 0],
										[29.9, 1.5],
										[27.1, 0.8],
										[22.1, 2]
									]
								}, {
									name: "January 2009",
									data: [
										[6.4, 13.4],
										[1.7, 11],
										[5.4, 8],
										[9, 17],
										[1.9, 4],
										[3.6, 12.2],
										[1.9, 14.4],
										[1.9, 9],
										[1.9, 13.2],
										[1.4, 7],
										[6.4, 8.8],
										[3.6, 4.3],
										[1.6, 10],
										[9.9, 2],
										[7.1, 15],
										[1.4, 0],
										[3.6, 13.7],
										[1.9, 15.2],
										[6.4, 16.5],
										[0.9, 10],
										[4.5, 17.1],
										[10.9, 10],
										[0.1, 14.7],
										[9, 10],
										[2.7, 11.8],
										[2.1, 10],
										[2.5, 10],
										[27.1, 10],
										[2.9, 11.5],
										[7.1, 10.8],
										[2.1, 12]
									]
								}, {
									name: "January 2010",
									data: [
										[21.7, 3],
										[13.6, 3.5],
										[13.6, 3],
										[29.9, 3],
										[21.7, 20],
										[19, 2],
										[10.9, 3],
										[28, 4],
										[27.1, 0.3],
										[16.4, 4],
										[13.6, 0],
										[19, 5],
										[16.4, 3],
										[24.5, 3],
										[32.6, 3],
										[27.1, 4],
										[13.6, 6],
										[13.6, 8],
										[13.6, 5],
										[10.9, 4],
										[16.4, 0],
										[32.6, 10.3],
										[21.7, 20.8],
										[24.5, 0.8],
										[16.4, 0],
										[21.7, 6.9],
										[13.6, 7.7],
										[16.4, 0],
										[8.1, 0],
										[16.4, 0],
										[16.4, 0]
									]
								}],
								xAxis: {
									max: 35,
									title: {
										text: "Wind Speed [km/h]"
									},
									crosshair: {
										visible: true,
										tooltip: {
											visible: true,
											format: "n1"
										}
									}
								},
								yAxis: {
									min: -5,
									max: 25,
									title: {
										text: "Rainfall [mm]"
									},
									axisCrossingValue: -5,
									crosshair: {
										visible: true,
										tooltip: {
											visible: true,
											format: "n1"
										}
									}
								}
						}}></KendoCharts>
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

* Charts demos: [http://demos.telerik.com/kendo-ui/charts/index](http://demos.telerik.com/kendo-ui/charts/index)
* Charts docs: [http://docs.telerik.com/kendo-ui/controls/charts/charts/overview](http://docs.telerik.com/kendo-ui/controls/charts/charts/overview)
* Charts API: [http://docs.telerik.com/kendo-ui/api/javascript/ui/charts](http://docs.telerik.com/kendo-ui/api/javascript/ui/charts)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
