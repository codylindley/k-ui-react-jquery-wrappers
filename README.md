# Kendo UI (for jQuery) React Component Wrappers

React component wrappers (around Kendo UI) that you can include via npm so that [Kendo UI for jQuery widgets](http://demos.telerik.com/kendo-ui/) can be used in a React app.

Read more about it here: [http://developer.telerik.com/featured/using-kendo-ui-jquery-react-app/](http://developer.telerik.com/featured/using-kendo-ui-jquery-react-app/)

For example:

```
<KendoDropDownList options={{index: 0}}>
	<select>
		<option>S - 6 3/5"</option>
		<option>M - 7 1/4"</option>
		<option>L - 7 1/8"</option>
		<option>XL - 7 5/8"</option>
	</select>
</KendoDropDownList>
```

## Available Wrappers on npm

| Feature | [Core](http://www.telerik.com/kendo-ui/open-source-core) (free) | [Professional](http://www.telerik.com/kendo-ui) (Paid) | wrapper on npm | github |
| ------- | :----: | :--------: | :------------------: | ------------------ |
| **Data Management**       |
| [Grid](http://demos.telerik.com/kendo-ui/grid/index)                  | :x:  | :white_check_mark: |  [`npm install kendo-ui-react-jquery-grid`](https://www.npmjs.com/package/kendo-ui-react-jquery-grid) | [source](packages/grid)
| [Spreadsheet](http://demos.telerik.com/kendo-ui/spreadsheet/index)    | :x:  | :white_check_mark: | BUG [https://github.com/telerik/kendo-ui-core/issues/2162](https://github.com/telerik/kendo-ui-core/issues/2162) |
| [ListView](http://demos.telerik.com/kendo-ui/listview/index)          | :white_check_mark: | :white_check_mark: |[`npm install kendo-ui-react-jquery-listview`](https://www.npmjs.com/package/kendo-ui-react-jquery-listview) | [source](packages/listView)
| [PivotGrid](http://demos.telerik.com/kendo-ui/pivotgrid/index)        | :x:  | :white_check_mark: | [`npm install kendo-ui-react-jquery-pivotgrid`](https://www.npmjs.com/package/kendo-ui-react-jquery-pivotgrid) | [source](packages/pivotGrid)
| [TreeList](http://demos.telerik.com/kendo-ui/treelist/index)          | :x:  | :white_check_mark: | [`npm install kendo-ui-react-jquery-treelist`](https://www.npmjs.com/package/kendo-ui-react-jquery-treelist) | [source](packages/treeList)
| **Editors**               |
| [AutoComplete](http://demos.telerik.com/kendo-ui/autocomplete/index)  | :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-autocomplete`](https://www.npmjs.com/package/kendo-ui-react-jquery-autocomplete) | [source](packages/autoComplete)
| [Color Picker](http://demos.telerik.com/kendo-ui/colorpicker/index)   | :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-colorpicker`](https://www.npmjs.com/package/kendo-ui-react-jquery-colorpicker) | [source](packages/colorPicker)
| [ComboBox](http://demos.telerik.com/kendo-ui/combobox/index)          | :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-combobox`](https://www.npmjs.com/package/kendo-ui-react-jquery-combobox) | [source](packages/comboBox)
| [DatePicker](http://demos.telerik.com/kendo-ui/datepicker/index)      | :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-datepicker`](https://www.npmjs.com/package/kendo-ui-react-jquery-datepicker) | [source](packages/datePicker)
| [DateTimePicker](http://demos.telerik.com/kendo-ui/datetimepicker/index) | :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-datetimepicker`](https://www.npmjs.com/package/kendo-ui-react-jquery-datetimepicker) | [source](packages/dateTimePicker)
| [DropDownList](http://demos.telerik.com/kendo-ui/dropdownlist/index)  | :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-dropdownlist`](https://www.npmjs.com/package/kendo-ui-react-jquery-dropdownlist) | [source](packages/dropDownList)
| [Editor](http://demos.telerik.com/kendo-ui/editor/index)              | :x:  | :white_check_mark: | BUG [https://github.com/telerik/kendo-ui-core/issues/2176](https://github.com/telerik/kendo-ui-core/issues/2176) |
| [MaskedTextBox](http://demos.telerik.com/kendo-ui/maskedtextbox/index)| :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-maskedtextbox`](https://www.npmjs.com/package/kendo-ui-react-jquery-maskedtextbox) | [source](packages/maskedTextBox)
| [MultiSelect](http://demos.telerik.com/kendo-ui/multiselect/index)    | :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-multiselect`](https://www.npmjs.com/package/kendo-ui-react-jquery-multiselect) | [source](packages/multiSelect)
| [NumericTextBox](http://demos.telerik.com/kendo-ui/numerictextbox/index) | :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-numerictextbox`](https://www.npmjs.com/package/kendo-ui-react-jquery-numerictextbox) | [source](packages/numericTextbox)
| [Slider](http://demos.telerik.com/kendo-ui/slider/index)              | :white_check_mark:| :white_check_mark: | [`npm install kendo-ui-react-jquery-slider`](https://www.npmjs.com/package/kendo-ui-react-jquery-slider) | [source](packages/slider)
| [TimePicker](http://demos.telerik.com/kendo-ui/timepicker/index)      | :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-timepicker`](https://www.npmjs.com/package/kendo-ui-react-jquery-timepicker) | [source](packages/timePicker)
| [Upload](http://demos.telerik.com/kendo-ui/upload/index)              | :x:  | :white_check_mark: | [`npm install kendo-ui-react-jquery-upload`](https://www.npmjs.com/package/kendo-ui-react-jquery-upload) | [source](packages/upload)
| [Validator](http://demos.telerik.com/kendo-ui/validator/index)        | :white_check_mark:  | :white_check_mark: | [`npm install kendo-ui-react-jquery-validator`](https://www.npmjs.com/package/kendo-ui-react-jquery-validator) | [source](packages/validator)
| **Charts**                |
| [Area Charts](http://demos.telerik.com/kendo-ui/area-charts/index)    | :x: | :white_check_mark: | |
| [Bar Charts](http://demos.telerik.com/kendo-ui/bar-charts/index)      | :x: | :white_check_mark: | |
| [Box Plot Charts](http://demos.telerik.com/kendo-ui/box-plot-charts/index) | :x: | :white_check_mark: | |
| [Bubble Charts](http://demos.telerik.com/kendo-ui/bubble-charts/index)| :x: | :white_check_mark: | |
| [Bullet Charts](http://demos.telerik.com/kendo-ui/bullet-charts/index)| :x: | :white_check_mark: | |
| [Chart API](http://demos.telerik.com/kendo-ui/chart-api/index)        | :x: | :white_check_mark: | |
| [Donut Charts](http://demos.telerik.com/kendo-ui/donut-charts/index)  | :x: | :white_check_mark: | |
| [Funnel Charts](http://demos.telerik.com/kendo-ui/funnel-charts/index)| :x: | :white_check_mark: | |
| [Line Charts](http://demos.telerik.com/kendo-ui/line-charts/index)    | :x: | :white_check_mark: | |
| [Pie Charts](http://demos.telerik.com/kendo-ui/pie-charts/index)      | :x: | :white_check_mark: | |
| [Polar Charts](http://demos.telerik.com/kendo-ui/polar-charts/index)  | :x: | :white_check_mark: | |
| [Radar Charts](http://demos.telerik.com/kendo-ui/radar-charts/index)  | :x: | :white_check_mark: | |
| [Range Bar Charts](http://demos.telerik.com/kendo-ui/range-bar-charts/index) | :x: | :white_check_mark: | |
| [Scatter Charts](http://demos.telerik.com/kendo-ui/scatter-charts/index) | :x: | :white_check_mark: | |
| [Sparklines](http://demos.telerik.com/kendo-ui/sparklines/index)      | :x: | :white_check_mark: | |
| [Stock Charts](http://demos.telerik.com/kendo-ui/financial/index)     | :x: | :white_check_mark: | |
| [TreeMap](http://demos.telerik.com/kendo-ui/treemap/index)            | :x: | :white_check_mark: | |
| [Waterfall Charts](http://demos.telerik.com/kendo-ui/waterfall-charts/index) | :x: | :white_check_mark: | |
| **Gauges**                |
| [LinearGauge](http://demos.telerik.com/kendo-ui/linear-gauge/index)   | :x: | :white_check_mark: | |
| [RadialGauge](http://demos.telerik.com/kendo-ui/radial-gauge/index)   | :x: | :white_check_mark: | |
| **Barcodes**              |
| [Barcode](http://demos.telerik.com/kendo-ui/barcode/index)            | :x: | :white_check_mark: | |
| [QR Code](http://demos.telerik.com/kendo-ui/qrcode/index)             | :x: | :white_check_mark: | |
| **Diagram and Maps**      |
| [Diagram](http://demos.telerik.com/kendo-ui/diagram/index)            | :x: | :white_check_mark: | |
| [Map](http://demos.telerik.com/kendo-ui/map/index)                    | :x: | :white_check_mark: | |
| **Scheduling**            |
| [Calendar](http://demos.telerik.com/kendo-ui/calendar/index)          | :white_check_mark: | :white_check_mark: | [`npm install kendo-ui-react-jquery-calendar`](https://www.npmjs.com/package/kendo-ui-react-jquery-calendar) | [source](packages/calendar)
| [Gantt](http://demos.telerik.com/kendo-ui/gantt/index)                | :x:  | :white_check_mark: | |
| [Scheduler](http://demos.telerik.com/kendo-ui/scheduler/index)        | :x:  | :white_check_mark: | |
| **Layout**                |
| [Notification](http://demos.telerik.com/kendo-ui/notification/index)  | :white_check_mark: | :white_check_mark: | |
| [Responsive Panel](http://demos.telerik.com/kendo-ui/responsive-panel/index)| :white_check_mark: | :white_check_mark: | |
| [Splitter](http://demos.telerik.com/kendo-ui/splitter/index)          | :white_check_mark:| :white_check_mark: | |
| [Tooltip](http://demos.telerik.com/kendo-ui/tooltip/index)            | :white_check_mark: | :white_check_mark: | |
| [Window](http://demos.telerik.com/kendo-ui/window/index)              | :white_check_mark: | :white_check_mark: | |
| **Navigation**            |
| [Button](http://demos.telerik.com/kendo-ui/button/index)              | :white_check_mark: | :white_check_mark: | |
| [ButtonGroup](http://demos.telerik.com/kendo-ui/buttongroup/index)    | :white_check_mark: | :white_check_mark: | |
| [Menu](http://demos.telerik.com/kendo-ui/menu/index)                  | :white_check_mark: | :white_check_mark: | |
| [PanelBar](http://demos.telerik.com/kendo-ui/panelbar/index)          | :white_check_mark: | :white_check_mark: | |
| [TabStrip](http://demos.telerik.com/kendo-ui/tabstrip/index)          | :white_check_mark: | :white_check_mark: | |
| [ToolBar](http://demos.telerik.com/kendo-ui/toolbar/index)            | :white_check_mark: | :white_check_mark: | |
| [TreeView](http://demos.telerik.com/kendo-ui/treeview/index)          | :x:  | :white_check_mark: | [`npm install kendo-ui-react-jquery-treeview`](https://www.npmjs.com/package/kendo-ui-react-jquery-treeview) | [source](packages/treeView)
| **Interactivity and UX**  |
| [Drag-and-Drop](http://demos.telerik.com/kendo-ui/dragdrop/index)     | :white_check_mark: | :white_check_mark: | |
| [Effects](http://demos.telerik.com/kendo-ui/fx/expand)                | :white_check_mark: | :white_check_mark: | |
| [ProgressBar](http://demos.telerik.com/kendo-ui/progressbar/index)    | :white_check_mark: | :white_check_mark: | |
| [Sortable](http://demos.telerik.com/kendo-ui/sortable/index)          | :white_check_mark: | :white_check_mark: | |

## Installing Wrappers from npm 

```bash
npm i kendo-ui-react-jquery-[NAME OF WIDGET ALL LOWERCASE e.g. dropdownlist]
```

For example the following command will install the [dropDownList](colorPicker) wrapper:

```bash
npm i kendo-ui-react-jquery-dropdownlist
```

## Example Usage in React app (assumes webpack)

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import KendoDropDownList from 'kendo-ui-react-jquery-dropdownlist';

//Don't forget CSS, webpack plugin used to include CSS
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
