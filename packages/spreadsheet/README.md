# kendo-ui-react-jquery-spreadsheet

The Kendo UI for jQuery Spreadsheet widget wrapped as a React component.

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
npm i -S kendo-ui-react-jquery-spreadsheet
```

## Usage Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import KendoSpreadsheet from 'kendo-ui-react-jquery-spreadsheet';

//Don't forget CSS, webpack used to include CSS
import 'kendo/css/web/kendo.common.min.css';
import 'kendo/css/web/kendo.default.min.css';

var sheets = [{
    name: "Food Order",
    mergedCells: [
        "A1:G1",
        "C15:E15"
    ],
    rows: [{
        height: 70,
        cells: [{
            index: 0,
            value: "Invoice #52 - 06/23/2015",
            fontSize: 32,
            background: "rgb(96,181,255)",
            textAlign: "center",
            color: "white"
        }]
    }, {
        height: 25,
        cells: [{
            value: "ID",
            background: "rgb(167,214,255)",
            textAlign: "center",
            color: "rgb(0,62,117)"
        }, {
            value: "Product",
            background: "rgb(167,214,255)",
            textAlign: "center",
            color: "rgb(0,62,117)"
        }, {
            value: "Quantity",
            background: "rgb(167,214,255)",
            textAlign: "center",
            color: "rgb(0,62,117)"
        }, {
            value: "Price",
            background: "rgb(167,214,255)",
            textAlign: "center",
            color: "rgb(0,62,117)"
        }, {
            value: "Tax",
            background: "rgb(167,214,255)",
            textAlign: "center",
            color: "rgb(0,62,117)"
        }, {
            value: "Amount",
            background: "rgb(167,214,255)",
            textAlign: "center",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(167,214,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        cells: [{
            value: 216321,
            textAlign: "center",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: "Calzone",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 1,
            textAlign: "center",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 12.39,
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C3*D3*0.2",
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C3*D3+E3",
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        cells: [{
            value: 546897,
            textAlign: "center",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: "Margarita",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 2,
            textAlign: "center",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 8.79,
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C4*D4*0.2",
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C4*D4+E4",
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        cells: [{
            value: 456231,
            textAlign: "center",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: "Pollo Formaggio",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 1,
            textAlign: "center",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 13.99,
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C5*D5*0.2",
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C5*D5+E5",
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        cells: [{
            value: 455873,
            textAlign: "center",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: "Greek Salad",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 1,
            textAlign: "center",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 9.49,
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C6*D6*0.2",
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C6*D6+E6",
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        cells: [{
            value: 456892,
            textAlign: "center",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: "Spinach and Blue Cheese",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 3,
            textAlign: "center",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 11.49,
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C7*D7*0.2",
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C7*D7+E7",
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        cells: [{
            value: 546564,
            textAlign: "center",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: "Rigoletto",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 1,
            textAlign: "center",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 10.99,
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C8*D8*0.2",
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C8*D8+E8",
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        cells: [{
            value: 789455,
            textAlign: "center",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: "Creme Brulee",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 5,
            textAlign: "center",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 6.99,
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C9*D9*0.2",
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C9*D9+E9",
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        cells: [{
            value: 123002,
            textAlign: "center",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: "Radeberger Beer",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 4,
            textAlign: "center",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 4.99,
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C10*D10*0.2",
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C10*D10+E10",
            format: "$#,##0.00",
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        cells: [{
            value: 564896,
            textAlign: "center",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: "Budweiser Beer",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 3,
            textAlign: "center",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            value: 4.49,
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C11*D11*0.2",
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            formula: "C11*D11+E11",
            format: "$#,##0.00",
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        index: 11,
        cells: [{
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(229,243,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        index: 12,
        cells: [{
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(255,255,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        height: 25,
        index: 13,
        cells: [{
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)"
        }, {
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)"
        }, {
            value: "Tip:",
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)",
            textAlign: "right",
            verticalAlign: "bottom"
        }, {
            formula: "SUM(F3:F11)*0.1",
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)",
            format: "$#,##0.00",
            bold: "true",
            verticalAlign: "bottom"
        }, {
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)"
        }]
    }, {
        height: 50,
        index: 14,
        cells: [{
            index: 0,
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)",
        }, {
            index: 1,
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)",
        }, {
            index: 2,
            fontSize: 20,
            value: "Total Amount:",
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)",
            textAlign: "right"
        }, {
            index: 5,
            fontSize: 20,
            formula: "SUM(F3:F14)",
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)",
            format: "$#,##0.00",
            bold: "true"
        }, {
            index: 6,
            background: "rgb(193,226,255)",
            color: "rgb(0,62,117)"
        }]
    }],
    columns: [{
        width: 100
    }, {
        width: 215
    }, {
        width: 115
    }, {
        width: 115
    }, {
        width: 115
    }, {
        width: 155
    }]
}];

var App = React.createClass({
  render: function() {
	  return (
		  <KendoSpreadsheet options={{sheets:sheets}}></KendoSpreadsheet>
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

* Spreadsheet demos: [http://demos.telerik.com/kendo-ui/spreadsheet/index](http://demos.telerik.com/kendo-ui/spreadsheet/index)
* Spreadsheet docs: [http://docs.telerik.com/kendo-ui/controls/data-management/spreadsheet/overview](http://docs.telerik.com/kendo-ui/controls/data-management/spreadsheet/overview)
* Spreadsheet API: [http://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet](http://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet)

## License

[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
