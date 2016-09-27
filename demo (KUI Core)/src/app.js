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
import KendoAutoComplete from 'kendo-ui-react-jquery-autocomplete';
import KendoComboBox from 'kendo-ui-react-jquery-combobox';
import KendoDateTimePicker from 'kendo-ui-react-jquery-datetimepicker';
import KendoMaskedTextBox from 'kendo-ui-react-jquery-maskedtextbox';
import KendoMultiSelect from 'kendo-ui-react-jquery-multiselect';
import KendoNumericTextBox from 'kendo-ui-react-jquery-numerictextbox';
import KendoSlider from 'kendo-ui-react-jquery-slider';
import KendoTimePicker from 'kendo-ui-react-jquery-timepicker';
import KendoValidator from 'kendo-ui-react-jquery-validator';
import KendoButton from 'kendo-ui-react-jquery-button';
import KendoMenu from 'kendo-ui-react-jquery-menu';
import KendoPanelBar from 'kendo-ui-react-jquery-panelbar';
import KendoTabStrip from 'kendo-ui-react-jquery-tabstrip';
import KendoToolBar from 'kendo-ui-react-jquery-toolbar';
import KendoNotification from 'kendo-ui-react-jquery-notification';
import KendoSplitter from 'kendo-ui-react-jquery-splitter';
import KendoTooltip from 'kendo-ui-react-jquery-tooltip';
import KendoResponsivePanel from 'kendo-ui-react-jquery-responsivepanel';
import KendoWindow from 'kendo-ui-react-jquery-window';

//CSS
//kendo-ui-core CSS files
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.default.min.css';

import './app.css';

var autoCompleteData = [
	"Albania",
	"Andorra",
	"Armenia",
	"Austria",
	"Azerbaijan",
	"Belarus",
	"Belgium",
	"Bosnia & Herzegovina",
	"Bulgaria",
	"Croatia",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Estonia",
	"Finland",
	"France",
	"Georgia",
	"Germany",
	"Greece",
	"Hungary",
	"Iceland",
	"Ireland",
	"Italy",
	"Kosovo",
	"Latvia",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macedonia",
	"Malta",
	"Moldova",
	"Monaco",
	"Montenegro",
	"Netherlands",
	"Norway",
	"Poland",
	"Portugal",
	"Romania",
	"Russia",
	"San Marino",
	"Serbia",
	"Slovakia",
	"Slovenia",
	"Spain",
	"Sweden",
	"Switzerland",
	"Turkey",
	"Ukraine",
	"United Kingdom",
	"Vatican City"
];

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
	getInitialState: function () {
		return { now: Date.now() };
	},

	componentDidMount: function () {
		//demonstrate that state changes from above, means props can change and prop changes change widget
		var changeStateInterval = setInterval(function () {
			fakeApropChange = '2';
			this.setState({ now: Date.now() });
		}.bind(this), 4000);

		setTimeout(function () { clearInterval(changeStateInterval); }, 5000);
	},

	render: function () {
		return (
			<div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoWindow</h2>
					<KendoWindow>
							Window content
					</KendoWindow>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoResponsivePanel</h2>
					<KendoResponsivePanel options={{autoClose: false}}>
							<a href="#">Home</a>
							<a href="#">Products</a>
					</KendoResponsivePanel>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoTooltip</h2>
					<KendoTooltip options={{
						content: "Tooltip content"
					}}>
						Mouse over me to see tooltip!
					</KendoTooltip>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoSplitter</h2>
					<KendoSplitter options={{
						orientation: "vertical"
					}}>
						<div>
						<div>Pane A</div>
						<div>Pane B</div>
						</div>
					</KendoSplitter>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoNotification</h2>
					<KendoNotification options={{
						position: {
						// notification popup will scroll together with the other content
						pinned: false,
						// the first notification popup will appear 30px from the viewport's top and right edge
						top: 30,
						right: 30
						},
						// new notifications will appear below old ones
						stacking: "down",
						// set appropriate size
						width: 300,
						height: 50,
						 // hide automatically after 7 seconds
						autoHideAfter: 0
					}} methods={{show:['I am a Notification']}} />
				</div>			
				<div style={{ marginBottom: 150 }}>
					<h2>KendoToolBar</h2>
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
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoTabStrip</h2>
					<KendoTabStrip>
						<ul>
							<li className="k-state-active">First tab</li>
							<li>Second tab</li>
						</ul>
						<div>First tab content</div>
						<div>Second tab content</div>
					</KendoTabStrip>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoPanelBar</h2>
					<KendoPanelBar methods={{expand:['li:first']}}>
						<ul>
							<li>
								Item 1
									<ul>
										<li>Sub Item 1</li>
										<li>Sub Item 2</li>
									</ul>
							</li>
							<li>Item 2
								<ul>
									<li>Sub Item 1</li>
									<li>Sub Item 2</li>
								</ul>
							</li>
						</ul>
					</KendoPanelBar>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoMenu</h2>
					<KendoMenu>
						<ul>
							<li>root item 1</li>
							<li>root item 2
								<ul>
									<li>child item 1</li>
									<li>child item 2</li>
								</ul>
							</li>			
						</ul>
					</KendoMenu>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoButton</h2>
					<KendoButton>button</KendoButton>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoValidator</h2>
						<KendoValidator>
							<form>
							<input name="username" required /> <br />
							<input type="email" name="userEmail" required data-message="My custom email message" /> <br />
							<button>Validate</button>
							</form>
						</KendoValidator>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoTimePicker</h2>
					<KendoTimePicker options={{ value: new Date(2011, 0, 1, 10, 30)}}>
						<input />
					</KendoTimePicker>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoSlider</h2>
					<KendoSlider options={{
						increaseButtonTitle: "Right",
						decreaseButtonTitle: "Left",
						min: -10,
						max: 10,
						smallStep: 2,
						largeStep: 1
						}}>
					</KendoSlider>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoNumericTextBox</h2>
					<KendoNumericTextBox options={{
							format: "p0",
							placeholder: "Select A Value",
							min: 0,
							max: 0.1,
							step: 0.01
						}}>
					</KendoNumericTextBox>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoMultiSelect</h2>
					<KendoMultiSelect>
						<select id="required" multiple="multiple" data-placeholder="Select attendees...">
						<option>Steven White</option>
						<option>Nancy King</option>
						<option>Nancy Davolio</option>
						<option>Robert Davolio</option>
						<option>Michael Leverling</option>
						<option>Andrew Callahan</option>
						<option>Michael Suyama</option>
						<option selected>Anne King</option>
						<option>Laura Peacock</option>
						<option>Robert Fuller</option>
						<option>Janet White</option>
						<option>Nancy Leverling</option>
						<option>Robert Buchanan</option>
						<option>Margaret Buchanan</option>
						<option selected>Andrew Fuller</option>
						<option>Anne Davolio</option>
						<option>Andrew Suyama</option>
						<option>Nige Buchanan</option>
						<option>Laura Fuller</option>
						</select>
					</KendoMultiSelect>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoMaskedTextBox</h2>
					<KendoMaskedTextBox options={{mask: "(999) 000-0000"}}><input value="555 123 4567" /></KendoMaskedTextBox>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoDateTimePicker</h2>
					<KendoDateTimePicker options={{
						value:new Date()
					}}></KendoDateTimePicker>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoComboBox</h2>
					<KendoComboBox options={{
						dataTextField: "text",
						dataValueField: "value",
						dataSource: [
							{ text: "Item1", value: "1" },
							{ text: "Item2", value: "2" }
						]
					}}></KendoComboBox>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoAutoComplete</h2>
					<KendoAutoComplete options={{
                        dataSource: autoCompleteData,
                        filter: "startswith",
                        placeholder: "Select country...",
                        separator: ", "
					}}></KendoAutoComplete>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoDropDownList</h2>
					<KendoDropDownList
						//only updates upon state change from above if widget supports setOptions()
						//don't define events here, do it in events prop
						options={{ //nothing new here, object of configuration options
							dataSource: data,
							dataTextField: "text",
							dataValueField: "value"
						}}
						//updates if object is different from initial mount
						methods={{ //name of method and array of arguments to pass to method
							open: [], //send empty array if no arguments
							value: [fakeApropChange]
						}}
						//Right now, always updates
						events={{ //name of event, and callback
							close: function () { console.log('dropdown closed') },
							select: function () { console.log('item selected') },
							open: function () { console.log('dropdown opened') }
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

				<div style={{ marginBottom: 150 }}>
					<h2>KendoCalendar</h2>
					<KendoCalendar />
				</div>

				<div style={{ marginBottom: 150 }}>
					<h2>KendoDatePicker</h2>
					<KendoDatePicker><input value="10/10/2011" /></KendoDatePicker></div>

				<div style={{ marginBottom: 150 }}>
					<h2>KendoColorPicker</h2>
					<KendoColorPicker
						options={{
							value: "#ffffff",
							buttons: false
						}} >
					</KendoColorPicker></div>

				<div style={{ marginBottom: 150 }}>
					<h2>KendoListView</h2>
					<KendoListView options={{ template: '<div>${text}: ${value}</div>', dataSource: data }} /></div>

			</div>
		);
				}
});

ReactDOM.render(<App />, document.getElementById('app'));
