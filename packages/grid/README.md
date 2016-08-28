# kendo-ui-react-jquery-grid

The Kendo UI for jQuery grid widget wrapped as a React component.

***WARNING:*** Must install professional version of Kendo UI using credentials.

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

Create a file called `.netrc` in your home directory (`~/.netrc`). Make sure you modify the file permissions to make it readable only to you.

Add your credentials to the `~/.netrc` file using the format from the example below.

EXAMPLE:

```
machine bower.telerik.com
    login my-telerik.identity@example.com-here
    password my-password-here
```

## Install

```bash
npm i -S kendo-ui-react-jquery-grid
```

## Usage Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import KendoGrid from 'kendo-ui-react-jquery-grid';

//Don't forget CSS, webpack used to include CSS
import 'kendo/css/web/kendo.common.min.css';
import 'kendo/css/web/kendo.default.min.css';


var App = React.createClass({
  render: function() {
	  return (
		  <KendoGrid options={{height: 550,sortable: true}}>
			<table id="grid">
				<colgroup>
				<col />
				<col />
				<col style={{width:110}} />
				<col style={{width:120}} />
				<col style={{width:130}} />
				</colgroup>
				<thead>
				<tr>
					<th data-field="make">Car Make</th>
					<th data-field="model">Car Model</th>
					<th data-field="year">Year</th>
					<th data-field="category">Category</th>
					<th data-field="airconditioner">Air Conditioner</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>Volvo</td>
					<td>S60</td>
					<td>2010</td>
					<td>Saloon</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Audi</td>
					<td>A4</td>
					<td>2002</td>
					<td>Saloon</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>BMW</td>
					<td>535d</td>
					<td>2006</td>
					<td>Saloon</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>BMW</td>
					<td>320d</td>
					<td>2006</td>
					<td>Saloon</td>
					<td>No</td>
				</tr>
				<tr>
					<td>VW</td>
					<td>Passat</td>
					<td>2007</td>
					<td>Saloon</td>
					<td>No</td>
				</tr>
				<tr>
					<td>VW</td>
					<td>Passat</td>
					<td>2008</td>
					<td>Saloon</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Peugeot</td>
					<td>407</td>
					<td>2006</td>
					<td>Saloon</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Honda</td>
					<td>Accord</td>
					<td>2008</td>
					<td>Saloon</td>
					<td>No</td>
				</tr>
				<tr>
					<td>Alfa Romeo</td>
					<td>159</td>
					<td>2008</td>
					<td>Saloon</td>
					<td>No</td>
				</tr>
				<tr>
					<td>Nissan</td>
					<td>Almera</td>
					<td>2001</td>
					<td>Saloon</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Mitsubishi</td>
					<td>Lancer</td>
					<td>2008</td>
					<td>Saloon</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Opel</td>
					<td>Vectra</td>
					<td>2008</td>
					<td>Saloon</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Toyota</td>
					<td>Avensis</td>
					<td>2006</td>
					<td>Saloon</td>
					<td>No</td>
				</tr>
				<tr>
					<td>Toyota</td>
					<td>Avensis</td>
					<td>2008</td>
					<td>Saloon</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Toyota</td>
					<td>Avensis</td>
					<td>2008</td>
					<td>Saloon</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Audi</td>
					<td>Q7</td>
					<td>2007</td>
					<td>SUV</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Hyundai</td>
					<td>Santa Fe</td>
					<td>2012</td>
					<td>SUV</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Hyundai</td>
					<td>Santa Fe</td>
					<td>2013</td>
					<td>SUV</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Nissan</td>
					<td>Qashqai</td>
					<td>2007</td>
					<td>SUV</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Mercedez</td>
					<td>B Class</td>
					<td>2007</td>
					<td>Hatchback</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>Lancia</td>
					<td>Ypsilon</td>
					<td>2006</td>
					<td>Hatchback</td>
					<td>Yes</td>
				</tr>
				</tbody>
			</table>
		</KendoGrid>
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

* Grid demos: [http://demos.telerik.com/kendo-ui/grid/index](http://demos.telerik.com/kendo-ui/grid/index)
* Grid docs: [http://docs.telerik.com/kendo-ui/controls/data-management/grid/overview](http://docs.telerik.com/kendo-ui/controls/data-management/grid/overview)
* Grid API: [http://docs.telerik.com/kendo-ui/api/javascript/ui/grid](http://docs.telerik.com/kendo-ui/api/javascript/ui/grid)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
