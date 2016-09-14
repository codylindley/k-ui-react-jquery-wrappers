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
import KendoSpreadsheet from 'kendo-ui-react-jquery-spreadsheet';
import Kendo from 'kendo/js/kendo.core';
import KendoTreeList from 'kendo-ui-react-jquery-treelist';

//CSS
//kendo-ui-core CSS files
//import 'kendo-ui-core/css/web/kendo.common.core.min.css';
//import 'kendo-ui-core/css/web/kendo.default.min.css';
//kendo Professional CSS files (if included don't include kendo-ui-core)
import 'kendo/css/web/kendo.common.min.css';
import 'kendo/css/web/kendo.default.min.css';

import './app.css';

var treeListDataSource = new Kendo.data.TreeListDataSource({
	data: [
		{ id: 1, Name: "Daryl Sweeney", Position: "CEO", Phone: "(555) 924-9726", parentId: null },
		{ id: 2, Name: "Guy Wooten", Position: "Chief Technical Officer", Phone: "(438) 738-4935", parentId: 1 },
		{ id: 32, Name: "Buffy Weber", Position: "VP, Engineering", Phone: "(699) 838-6121", parentId: 2 },
		{ id: 11, Name: "Hyacinth Hood", Position: "Team Lead", Phone: "(889) 345-2438", parentId: 32 },
		{ id: 60, Name: "Akeem Carr", Position: "Junior Software Developer", Phone: "(738) 136-2814", parentId: 11 },
		{ id: 78, Name: "Rinah Simon", Position: "Software Developer", Phone: "(285) 912-5271", parentId: 11 },
		{ id: 42, Name: "Gage Daniels", Position: "Software Architect", Phone: "(107) 290-6260", parentId: 32 },
		{ id: 43, Name: "Constance Vazquez", Position: "Director, Engineering", Phone: "(800) 301-1978", parentId: 32 },
		{ id: 46, Name: "Darrel Solis", Position: "Team Lead", Phone: "(327) 977-0216", parentId: 43 },
		{ id: 47, Name: "Brian Yang", Position: "Senior Software Developer", Phone: "(565) 146-5435", parentId: 46 },
		{ id: 50, Name: "Lillian Bradshaw", Position: "Software Developer", Phone: "(323) 509-3479", parentId: 46 },
		{ id: 51, Name: "Christian Palmer", Position: "Technical Lead", Phone: "(490) 421-8718", parentId: 46 },
		{ id: 55, Name: "Summer Mosley", Position: "QA Engineer", Phone: "(784) 962-2301", parentId: 46 },
		{ id: 56, Name: "Barry Ayers", Position: "Software Developer", Phone: "(452) 373-9227", parentId: 46 },
		{ id: 59, Name: "Keiko Espinoza", Position: "Junior QA Engineer", Phone: "(226) 600-5305", parentId: 46 },
		{ id: 61, Name: "Candace Pickett", Position: "Support Officer", Phone: "(120) 117-7475", parentId: 46 },
		{ id: 63, Name: "Mia Caldwell", Position: "Team Lead", Phone: "(848) 636-6470", parentId: 43 },
		{ id: 65, Name: "Thomas Terry", Position: "Senior Enterprise Support Officer", Phone: "(764) 831-4248", parentId: 63 },
		{ id: 67, Name: "Ruth Downs", Position: "Senior Software Developer", Phone: "(138) 991-1440", parentId: 63 },
		{ id: 70, Name: "Yasir Wilder", Position: "Senior QA Enginner", Phone: "(759) 701-8665", parentId: 63 },
		{ id: 71, Name: "Flavia Short", Position: "Support Officer", Phone: "(370) 133-9238", parentId: 63 },
		{ id: 74, Name: "Aaron Roach", Position: "Junior Software Developer", Phone: "(958) 717-9230", parentId: 63 },
		{ id: 75, Name: "Eric Russell", Position: "Software Developer", Phone: "(516) 575-8505", parentId: 63 },
		{ id: 76, Name: "Cheyenne Olson", Position: "Software Developer", Phone: "(241) 645-0257", parentId: 63 },
		{ id: 77, Name: "Shaine Avila", Position: "UI Designer", Phone: "(844) 435-1360", parentId: 63 },
		{ id: 81, Name: "Chantale Long", Position: "Senior QA Enginner", Phone: "(252) 419-6891", parentId: 63 },
		{ id: 83, Name: "Dane Cruz", Position: "Junior Software Developer", Phone: "(946) 701-6165", parentId: 63 },
		{ id: 84, Name: "Regan Patterson", Position: "Technical Writer", Phone: "(265) 946-1765", parentId: 63 },
		{ id: 85, Name: "Drew Mckay", Position: "Senior Software Developer", Phone: "(327) 293-0162", parentId: 63 },
		{ id: 88, Name: "Bevis Miller", Position: "Senior Software Developer", Phone: "(525) 557-0169", parentId: 63 },
		{ id: 89, Name: "Bruce Mccarty", Position: "Support Officer", Phone: "(936) 777-8730", parentId: 63 },
		{ id: 90, Name: "Ocean Blair", Position: "Team Lead", Phone: "(343) 586-6614", parentId: 43 },
		{ id: 91, Name: "Guinevere Osborn", Position: "Software Developer", Phone: "(424) 741-0006", parentId: 90 },
		{ id: 92, Name: "Olga Strong", Position: "Graphic Designer", Phone: "(949) 417-1168", parentId: 90 },
		{ id: 93, Name: "Robert Orr", Position: "Support Officer", Phone: "(977) 341-3721", parentId: 90 },
		{ id: 95, Name: "Odette Sears", Position: "Senior Software Developer", Phone: "(264) 818-6576", parentId: 90 },
		{ id: 45, Name: "Zelda Medina", Position: "QA Architect", Phone: "(563) 359-6023", parentId: 32 },
		{ id: 3, Name: "Priscilla Frank", Position: "Chief Product Officer", Phone: "(217) 280-5300", parentId: 1 },
		{ id: 4, Name: "Ursula Holmes", Position: "EVP, Product Strategy", Phone: "(370) 983-8796", parentId: 3 },
		{ id: 24, Name: "Melvin Carrillo", Position: "Director, Developer Relations", Phone: "(344) 496-9555", parentId: 3 },
		{ id: 29, Name: "Martha Chavez", Position: "Developer Advocate", Phone: "(140) 772-7509", parentId: 24 },
		{ id: 30, Name: "Oren Fox", Position: "Developer Advocate", Phone: "(714) 284-2408", parentId: 24 },
		{ id: 41, Name: "Amos Barr", Position: "Developer Advocate", Phone: "(996) 587-8405", parentId: 24 }
	],

	schema: {
		model: {
			id: "id",
			expanded: true
		}
	}
});

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
					<h2>KendoTreeList</h2>
					<KendoTreeList options={{
						dataSource: treeListDataSource,
                        height: 540,
                        columns: [
                            { field: 'Position' },
                            { field: 'Name' },
                            { field: 'Phone' }
                        ]
					}}></KendoTreeList>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoSpreadsheet</h2>
					<KendoSpreadsheet />
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoGrid</h2>
					<KendoGrid options={{ height: 550, sortable: true }}>
						<table id="grid">
							<colgroup>
								<col />
								<col />
								<col style={{ width: 110 }} />
								<col style={{ width: 120 }} />
								<col style={{ width: 130 }} />
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
