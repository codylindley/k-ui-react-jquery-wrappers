# kendo-ui-react-jquery-treemap

The Kendo UI for jQuery TreeMap widget wrapped as a React component.

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
npm i kendo-ui-react-jquery-treemap
```

## Usage Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import KendoTreeMap from 'kendo-ui-react-jquery-treemap';
import Kendo from 'kendo/js/kendo.core';

//Don't forget CSS, webpack used to include CSS
import 'kendo/css/web/kendo.common.min.css';
import 'kendo/css/web/kendo.default.min.css';

let dataTreeMap = [{"name":"Population in USA","value":316128839,"items":[{"name":"Alabama","value":4833722,"items":[{"name":"Birmingham","value":212113},{"name":"Montgomery","value":201332},{"name":"Mobile","value":194899},{"name":"Huntsville","value":186254},{"name":"Tuscaloosa","value":95334},{"name":"Hoover","value":84126},{"name":"Dothan","value":68001},{"name":"Auburn","value":58582},{"name":"Decatur","value":55816}]},{"name":"Alaska","value":735132,"items":[{"name":"Anchorage","value":300950},{"name":"Badger","value":20200},{"name":"College","value":13400},{"name":"Fairbanks","value":32324},{"name":"Juneau","value":32660},{"name":"Ketchikan","value":8214},{"name":"Sitka","value":9020}]},{"name":"Arizona","value":6626624,"items":[{"name":"Phoenix","value":1513367},{"name":"Tucson","value":526116},{"name":"Mesa","value":457587},{"name":"Chandler","value":249146},{"name":"Glendale","value":234632},{"name":"Gilbert","value":229972},{"name":"Scottsdale","value":226918},{"name":"Tempe","value":168228},{"name":"Peoria","value":162592},{"name":"Surprise","value":123546}]},{"name":"Arkansas","value":2959373,"items":[{"name":"Little Rock","value":197357},{"name":"Fort Smith","value":87650},{"name":"Fayetteville","value":78960},{"name":"Springdale","value":75229},{"name":"Jonesboro","value":71551},{"name":"North Little Rock","value":66075},{"name":"Conway","value":63816},{"name":"Rogers","value":60112},{"name":"Pine Bluff","value":46094},{"name":"Bentonville","value":40167}]},{"name":"California","value":38332521,"items":[{"name":"Los Angeles","value":3884307},{"name":"San Diego","value":1355896},{"name":"San Jose","value":998537},{"name":"San Francisco","value":837442},{"name":"Fresno","value":509924},{"name":"Sacramento","value":479686},{"name":"Long Beach","value":469428},{"name":"Oakland","value":406253},{"name":"Bakersfield","value":363630},{"name":"Anaheim","value":345012},{"name":"Santa Ana","value":334227}]},{"name":"Colorado","value":5268367,"items":[{"name":"Denver","value":649495},{"name":"Colorado Springs","value":439886},{"name":"Aurora","value":345803},{"name":"Fort Collins","value":152061},{"name":"Lakewood","value":147214},{"name":"Thornton","value":127359},{"name":"Arvada","value":111707},{"name":"Westminster","value":110945},{"name":"Pueblo","value":108249},{"name":"Centennial","value":106114},{"name":"Boulder","value":103166},{"name":"Highlands Ranch","value":102000}]},{"name":"Connecticut","value":3596080,"items":[{"name":"Bridgeport","value":147216},{"name":"New Haven","value":130660},{"name":"Stamford","value":126456},{"name":"Hartford","value":125017},{"name":"Waterbury","value":109676},{"name":"Norwalk","value":87776},{"name":"Danbury","value":83684},{"name":"New Britain","value":72939},{"name":"West Hartford","value":63371},{"name":"Bristol","value":60568},{"name":"Meriden","value":60456}]}]}];

var App = React.createClass({
  render: function() {
	  return (
		  	<KendoTreeMap options={{
                dataSource: dataTreeMap,
                valueField: "value",
                textField: "name"
			}}></KendoTreeMap>
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

* TreeMap demos: [http://demos.telerik.com/kendo-ui/treemap/index](http://demos.telerik.com/kendo-ui/treemap/index)
* TreeMap docs: [http://docs.telerik.com/kendo-ui/controls/charts/treemap/overview](http://docs.telerik.com/kendo-ui/controls/charts/treemap/overview)
* TreeMap API: [http://docs.telerik.com/kendo-ui/api/javascript/ui/treemap](http://docs.telerik.com/kendo-ui/api/javascript/ui/treemap)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
