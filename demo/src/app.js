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

//CSS
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';
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
