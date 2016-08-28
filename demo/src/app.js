import React from 'react';
import ReactDOM from 'react-dom';

//Kendo UI for jQuery Component, locally
//import KendoDropDownList from './kendoDropDownList.js';

//from npm, to test
import KendoDropDownList from 'kendo-ui-react-jquery-dropdownlist';
import KendoColorPicker from 'kendo-ui-react-jquery-colorpicker';
import KendoCalendar from 'kendo-ui-react-jquery-calendar';
import KendoDatePicker from 'kendo-ui-react-jquery-datepicker';
import KendoListView from 'kendo-ui-react-jquery-listview';
import KendoGrid from 'kendo-ui-react-jquery-grid';

//CSS
//kendo-ui-core CSS files
//import 'kendo-ui-core/css/web/kendo.common.core.min.css';
//import 'kendo-ui-core/css/web/kendo.default.min.css';
//kendo Professional CSS files (if included don't include kendo-ui-core)
import 'kendo/css/web/kendo.common.min.css';
import 'kendo/css/web/kendo.default.min.css';

import './app.css';

//Static Data
var data = [{
	text: "Item1",
	value: "1"
}, {
	text: "Item2",
	value: "2"
}, {
	text: "Item3",
	value: "3"
}];

var fakeApropChange = '3';

var App = React.createClass({
  getInitialState: function() {
    return {now: Date.now()};
  },

  componentDidMount: function() {
	//demonstrate that state changes from above, means props can change and prop changes change widget
	var changeStateInterval = setInterval(function() {
		fakeApropChange = '2';
		this.setState({now: Date.now()});
	}.bind(this), 4000);

	setTimeout(function(){ clearInterval(changeStateInterval); }, 5000);
  },

  render: function() {
	  return (
  		<div>
		<div style={{marginBottom:150}}>
		<h2>KendoGrid</h2>
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
</table></KendoGrid>
		</div>
  			<div style={{marginBottom:150}}>
			<h2>KendoDropDownList</h2>
			<KendoDropDownList
				//only updates upon state change from above if widget supports setOptions()
				//don't define events here, do it in events prop
				options={{ //nothing new here, object of configuration options
					dataSource:data,
					dataTextField: "text",
					dataValueField: "value"
				}}
				//updates if object is different from initial mount
				methods={{ //name of method and array of arguments to pass to method
					open:[], //send empty array if no arguments
					value:[fakeApropChange]
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
					<input />
			</KendoDropDownList></div>

			<div style={{marginBottom:150}}>
			<h2>KendoCalendar</h2>
			<KendoCalendar />
			</div>

			<div style={{marginBottom:150}}>
			<h2>KendoDatePicker</h2>
			<KendoDatePicker><input value="10/10/2011" /></KendoDatePicker></div>

			<div style={{marginBottom:150}}>
			<h2>KendoColorPicker</h2>
			<KendoColorPicker
				options={{
					value:"#ffffff",
					buttons:false
				}} >
			</KendoColorPicker></div>

			<div style={{marginBottom:150}}>
			<h2>KendoListView</h2>
			<KendoListView options={{template:'<div>${text}: ${value}</div>',dataSource:data}} /></div>

  		</div>
  	);
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
