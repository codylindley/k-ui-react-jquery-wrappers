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
import Kendo from 'kendo/js/kendo.core';
import KendoTreeList from 'kendo-ui-react-jquery-treelist';
import KendoPivotGrid from 'kendo-ui-react-jquery-pivotgrid';
import KendoAutoComplete from 'kendo-ui-react-jquery-autocomplete';
import KendoComboBox from 'kendo-ui-react-jquery-combobox';
import KendoDateTimePicker from 'kendo-ui-react-jquery-datetimepicker';
import KendoMaskedTextBox from 'kendo-ui-react-jquery-maskedtextbox';
import KendoMultiSelect from 'kendo-ui-react-jquery-multiselect';
import KendoNumericTextBox from 'kendo-ui-react-jquery-numerictextbox';
import KendoSlider from 'kendo-ui-react-jquery-slider';
import KendoTimePicker from 'kendo-ui-react-jquery-timepicker';
import KendoTreeView from 'kendo-ui-react-jquery-treeview';
import KendoUpload from 'kendo-ui-react-jquery-upload';
import KendoValidator from 'kendo-ui-react-jquery-validator';
import KendoButton from 'kendo-ui-react-jquery-button';
import KendoMenu from 'kendo-ui-react-jquery-menu';
import KendoPanelBar from 'kendo-ui-react-jquery-panelbar';
import KendoTabStrip from 'kendo-ui-react-jquery-tabstrip';
import KendoToolBar from 'kendo-ui-react-jquery-toolbar';
import KendoTreeMap from 'kendo-ui-react-jquery-treemap';
import KendoStockChart from 'kendo-ui-react-jquery-stockchart';
import KendoSparklines from 'kendo-ui-react-jquery-sparklines';
import KendoCharts from 'kendo-ui-react-jquery-charts';
import KendoLinearGauge from 'kendo-ui-react-jquery-lineargauge';
import KendoRadialGauge from 'kendo-ui-react-jquery-radialgauge';
import KendoBarCode from 'kendo-ui-react-jquery-barcode';
import KendoQRCode from 'kendo-ui-react-jquery-qrcode';


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

var dataTreeMap = [{"name":"Population in USA","value":316128839,"items":[{"name":"Alabama","value":4833722,"items":[{"name":"Birmingham","value":212113},{"name":"Montgomery","value":201332},{"name":"Mobile","value":194899},{"name":"Huntsville","value":186254},{"name":"Tuscaloosa","value":95334},{"name":"Hoover","value":84126},{"name":"Dothan","value":68001},{"name":"Auburn","value":58582},{"name":"Decatur","value":55816}]},{"name":"Alaska","value":735132,"items":[{"name":"Anchorage","value":300950},{"name":"Badger","value":20200},{"name":"College","value":13400},{"name":"Fairbanks","value":32324},{"name":"Juneau","value":32660},{"name":"Ketchikan","value":8214},{"name":"Sitka","value":9020}]},{"name":"Arizona","value":6626624,"items":[{"name":"Phoenix","value":1513367},{"name":"Tucson","value":526116},{"name":"Mesa","value":457587},{"name":"Chandler","value":249146},{"name":"Glendale","value":234632},{"name":"Gilbert","value":229972},{"name":"Scottsdale","value":226918},{"name":"Tempe","value":168228},{"name":"Peoria","value":162592},{"name":"Surprise","value":123546}]},{"name":"Arkansas","value":2959373,"items":[{"name":"Little Rock","value":197357},{"name":"Fort Smith","value":87650},{"name":"Fayetteville","value":78960},{"name":"Springdale","value":75229},{"name":"Jonesboro","value":71551},{"name":"North Little Rock","value":66075},{"name":"Conway","value":63816},{"name":"Rogers","value":60112},{"name":"Pine Bluff","value":46094},{"name":"Bentonville","value":40167}]},{"name":"California","value":38332521,"items":[{"name":"Los Angeles","value":3884307},{"name":"San Diego","value":1355896},{"name":"San Jose","value":998537},{"name":"San Francisco","value":837442},{"name":"Fresno","value":509924},{"name":"Sacramento","value":479686},{"name":"Long Beach","value":469428},{"name":"Oakland","value":406253},{"name":"Bakersfield","value":363630},{"name":"Anaheim","value":345012},{"name":"Santa Ana","value":334227}]},{"name":"Colorado","value":5268367,"items":[{"name":"Denver","value":649495},{"name":"Colorado Springs","value":439886},{"name":"Aurora","value":345803},{"name":"Fort Collins","value":152061},{"name":"Lakewood","value":147214},{"name":"Thornton","value":127359},{"name":"Arvada","value":111707},{"name":"Westminster","value":110945},{"name":"Pueblo","value":108249},{"name":"Centennial","value":106114},{"name":"Boulder","value":103166},{"name":"Highlands Ranch","value":102000}]},{"name":"Connecticut","value":3596080,"items":[{"name":"Bridgeport","value":147216},{"name":"New Haven","value":130660},{"name":"Stamford","value":126456},{"name":"Hartford","value":125017},{"name":"Waterbury","value":109676},{"name":"Norwalk","value":87776},{"name":"Danbury","value":83684},{"name":"New Britain","value":72939},{"name":"West Hartford","value":63371},{"name":"Bristol","value":60568},{"name":"Meriden","value":60456}]}]}];

var dataStockChart = [{"Date":"2000/01/03","Open":41.62,"High":41.69,"Low":39.81,"Close":40.12,"Volume":2632000},{"Date":"2000/01/04","Open":39.88,"High":41.12,"Low":39.75,"Close":40.12,"Volume":3584700},{"Date":"2000/01/05","Open":42,"High":43.31,"Low":41.38,"Close":42.62,"Volume":7631700},{"Date":"2000/01/06","Open":42.25,"High":43.44,"Low":41.12,"Close":43.06,"Volume":4922200},{"Date":"2000/01/07","Open":43.88,"High":44.88,"Low":43.69,"Close":44.12,"Volume":6008300},{"Date":"2000/01/10","Open":44.31,"High":44.5,"Low":43.5,"Close":43.69,"Volume":2400000},{"Date":"2000/01/11","Open":43.38,"High":43.94,"Low":42.75,"Close":42.88,"Volume":2450200},{"Date":"2000/01/12","Open":42.75,"High":44.19,"Low":42.5,"Close":43.06,"Volume":2326900},{"Date":"2000/01/13","Open":43.31,"High":43.38,"Low":42,"Close":42.38,"Volume":3030100},{"Date":"2000/01/14","Open":43.62,"High":44.25,"Low":42.94,"Close":44,"Volume":3834900},{"Date":"2000/01/18","Open":43.88,"High":45,"Low":43.12,"Close":45,"Volume":5859100},{"Date":"2000/01/19","Open":45.38,"High":48.12,"Low":45.25,"Close":47.62,"Volume":11457600},{"Date":"2000/01/20","Open":47.56,"High":47.88,"Low":45.75,"Close":46.5,"Volume":8931100},{"Date":"2000/01/21","Open":46.94,"High":46.94,"Low":45,"Close":45.69,"Volume":4390000},{"Date":"2000/01/24","Open":45.81,"High":46.19,"Low":43.62,"Close":44.31,"Volume":3296200},{"Date":"2000/01/25","Open":45,"High":46,"Low":44.75,"Close":45.69,"Volume":5052200},{"Date":"2000/01/26","Open":45.69,"High":46.5,"Low":45,"Close":46.19,"Volume":3090100},{"Date":"2000/01/27","Open":46,"High":46.88,"Low":44.88,"Close":45.06,"Volume":3329100},{"Date":"2000/01/28","Open":44.81,"High":45.62,"Low":44.5,"Close":44.62,"Volume":2258400},{"Date":"2000/01/31","Open":44,"High":44.56,"Low":43.94,"Close":44.5,"Volume":2340500},{"Date":"2000/02/01","Open":43.88,"High":44.19,"Low":43.31,"Close":43.75,"Volume":2670800},{"Date":"2000/02/02","Open":43.38,"High":45.19,"Low":43.38,"Close":44.62,"Volume":3295500},{"Date":"2000/02/03","Open":45,"High":45.06,"Low":43.12,"Close":43.44,"Volume":2886400},{"Date":"2000/02/04","Open":43.75,"High":44.19,"Low":42.56,"Close":44,"Volume":2927200},{"Date":"2000/02/07","Open":43.88,"High":43.88,"Low":41.69,"Close":41.81,"Volume":3024400},{"Date":"2000/02/08","Open":41.94,"High":42.06,"Low":40,"Close":41,"Volume":5097700},{"Date":"2000/02/09","Open":40.25,"High":40.25,"Low":38.38,"Close":39,"Volume":5535800},{"Date":"2000/02/10","Open":38.81,"High":40.19,"Low":38.75,"Close":39.75,"Volume":4040600},{"Date":"2000/02/11","Open":39.75,"High":40.38,"Low":39.12,"Close":39.88,"Volume":3127800},{"Date":"2000/02/14","Open":39.62,"High":39.69,"Low":38.06,"Close":38.25,"Volume":2605900},{"Date":"2000/02/15","Open":38.12,"High":38.69,"Low":37.38,"Close":38.5,"Volume":3947800},{"Date":"2000/02/16","Open":37.75,"High":37.94,"Low":36.88,"Close":37.25,"Volume":3423000},{"Date":"2000/02/17","Open":37.25,"High":37.88,"Low":36.56,"Close":37.5,"Volume":3400500},{"Date":"2000/02/18","Open":37.38,"High":37.5,"Low":35.88,"Close":36,"Volume":5536500},{"Date":"2000/02/22","Open":35.94,"High":39.94,"Low":35.88,"Close":38.88,"Volume":4768400},{"Date":"2000/02/23","Open":38.62,"High":38.69,"Low":37.06,"Close":37.12,"Volume":3880800},{"Date":"2000/02/24","Open":36.88,"High":37,"Low":35.88,"Close":36.56,"Volume":4198300},{"Date":"2000/02/25","Open":37.06,"High":38,"Low":36.81,"Close":37.81,"Volume":3170600},{"Date":"2000/02/28","Open":37.5,"High":37.62,"Low":36.56,"Close":37,"Volume":3573300},{"Date":"2000/02/29","Open":37.19,"High":37.62,"Low":36.12,"Close":36.94,"Volume":3503100},{"Date":"2000/03/01","Open":36.94,"High":36.62,"Low":35.94,"Close":36.31,"Volume":2838000},{"Date":"2000/03/02","Open":35.94,"High":37.19,"Low":35.38,"Close":35.94,"Volume":4053200},{"Date":"2000/03/03","Open":35.94,"High":36.5,"Low":35.69,"Close":35.94,"Volume":3884100},{"Date":"2000/03/06","Open":35.94,"High":36.19,"Low":35,"Close":35.12,"Volume":2879500},{"Date":"2000/03/07","Open":35.12,"High":35.12,"Low":34.12,"Close":34.75,"Volume":3565000},{"Date":"2000/03/08","Open":34,"High":34.19,"Low":33.38,"Close":33.38,"Volume":4134600},{"Date":"2000/03/09","Open":33.5,"High":34.5,"Low":33.25,"Close":33.75,"Volume":3236700},{"Date":"2000/03/10","Open":33.94,"High":33.94,"Low":32.31,"Close":33.25,"Volume":5080300},{"Date":"2000/03/13","Open":32.25,"High":33.12,"Low":32,"Close":32.62,"Volume":3420200},{"Date":"2000/03/14","Open":32.75,"High":33.81,"Low":32.44,"Close":33.06,"Volume":3727900},{"Date":"2000/03/15","Open":32.88,"High":35.5,"Low":32.81,"Close":34.88,"Volume":4859300},{"Date":"2000/03/16","Open":35,"High":35.94,"Low":34.69,"Close":35.62,"Volume":4725200},{"Date":"2000/03/17","Open":37.25,"High":38.94,"Low":36,"Close":37.19,"Volume":15099400},{"Date":"2000/03/20","Open":37.19,"High":37.69,"Low":36.38,"Close":37,"Volume":5786400},{"Date":"2000/03/21","Open":37.19,"High":37.44,"Low":36.19,"Close":36.56,"Volume":4153400},{"Date":"2000/03/22","Open":36.94,"High":37.19,"Low":35.75,"Close":36.38,"Volume":3358600},{"Date":"2000/03/23","Open":35.62,"High":35.94,"Low":34.81,"Close":35.12,"Volume":4080400},{"Date":"2000/03/24","Open":36,"High":36.44,"Low":35.5,"Close":36.12,"Volume":5797400},{"Date":"2000/03/27","Open":36.25,"High":37.31,"Low":36.12,"Close":37.12,"Volume":2534000},{"Date":"2000/03/28","Open":36.94,"High":38.19,"Low":36.88,"Close":38,"Volume":5056400},{"Date":"2000/03/29","Open":37.75,"High":38.19,"Low":37.31,"Close":37.88,"Volume":2731000},{"Date":"2000/03/30","Open":37.88,"High":38.94,"Low":37.62,"Close":38.62,"Volume":3266100},{"Date":"2000/03/31","Open":38.75,"High":38.81,"Low":37.81,"Close":37.81,"Volume":4630100},{"Date":"2000/04/03","Open":37.75,"High":37.75,"Low":37.06,"Close":37.19,"Volume":3234700},{"Date":"2000/04/04","Open":37.38,"High":38.25,"Low":36.56,"Close":37.31,"Volume":4002100},{"Date":"2000/04/05","Open":36.88,"High":37.25,"Low":36,"Close":36.06,"Volume":2860900},{"Date":"2000/04/06","Open":36,"High":36.44,"Low":35.62,"Close":36.12,"Volume":2941900},{"Date":"2000/04/07","Open":36.19,"High":36.31,"Low":35.38,"Close":35.69,"Volume":2381600},{"Date":"2000/04/10","Open":35.5,"High":35.62,"Low":35,"Close":35.06,"Volume":2452600},{"Date":"2000/04/11","Open":35,"High":36.38,"Low":35,"Close":35.69,"Volume":2251100},{"Date":"2000/04/12","Open":35.94,"High":38.38,"Low":35.88,"Close":37.62,"Volume":4620200},{"Date":"2000/04/13","Open":37.62,"High":37.62,"Low":36.5,"Close":37,"Volume":2916700},{"Date":"2000/04/14","Open":36,"High":36.75,"Low":34.75,"Close":35.38,"Volume":3744900},{"Date":"2000/04/17","Open":35.12,"High":35.38,"Low":34.06,"Close":35.31,"Volume":3739100},{"Date":"2000/04/18","Open":34.62,"High":35.06,"Low":34.31,"Close":34.75,"Volume":3378800},{"Date":"2000/04/19","Open":35.94,"High":37.75,"Low":35.56,"Close":37.25,"Volume":5709000},{"Date":"2000/04/20","Open":37.5,"High":40.25,"Low":37.5,"Close":40.06,"Volume":8110700},{"Date":"2000/04/24","Open":39.62,"High":41.25,"Low":37.5,"Close":37.88,"Volume":10087700},{"Date":"2000/04/25","Open":38.25,"High":39.56,"Low":38.25,"Close":39,"Volume":5397100},{"Date":"2000/04/26","Open":39.19,"High":40.56,"Low":39,"Close":39.94,"Volume":5338300},{"Date":"2000/04/27","Open":39,"High":40.25,"Low":38.94,"Close":39.81,"Volume":3176700},{"Date":"2000/04/28","Open":39.62,"High":40.06,"Low":38.94,"Close":39.69,"Volume":1853600},{"Date":"2000/05/01","Open":39.69,"High":40.19,"Low":39,"Close":39.06,"Volume":2886100},{"Date":"2000/05/02","Open":39.06,"High":39.06,"Low":37.81,"Close":37.94,"Volume":2549200},{"Date":"2000/05/03","Open":37.31,"High":38.19,"Low":36.81,"Close":37.31,"Volume":3311300},{"Date":"2000/05/04","Open":38.25,"High":39.31,"Low":37.81,"Close":38.19,"Volume":2981100},{"Date":"2000/05/05","Open":38,"High":39.88,"Low":37.94,"Close":39.5,"Volume":2792900},{"Date":"2000/05/08","Open":39,"High":39.5,"Low":38.19,"Close":38.25,"Volume":3146400},{"Date":"2000/05/09","Open":38.5,"High":39.19,"Low":38.12,"Close":38.31,"Volume":2567300},{"Date":"2000/05/10","Open":37.75,"High":37.94,"Low":36.56,"Close":36.88,"Volume":4820400},{"Date":"2000/05/11","Open":37.12,"High":38.19,"Low":37.06,"Close":37.31,"Volume":2887200},{"Date":"2000/05/12","Open":37.62,"High":37.62,"Low":37.06,"Close":37.19,"Volume":2453200},{"Date":"2000/05/15","Open":36.62,"High":37.5,"Low":36.44,"Close":37.19,"Volume":2913500},{"Date":"2000/05/16","Open":37.19,"High":37.88,"Low":36.75,"Close":37.38,"Volume":3815700},{"Date":"2000/05/17","Open":37,"High":37.5,"Low":36.56,"Close":37.38,"Volume":2739800},{"Date":"2000/05/18","Open":37.12,"High":37.75,"Low":37.12,"Close":37.62,"Volume":2050100},{"Date":"2000/05/19","Open":37,"High":37.38,"Low":36.25,"Close":36.94,"Volume":2193900},{"Date":"2000/05/22","Open":37.38,"High":37.69,"Low":36.25,"Close":36.56,"Volume":2966000},{"Date":"2000/05/23","Open":36.62,"High":37.94,"Low":36.62,"Close":37.12,"Volume":2850600},{"Date":"2000/05/24","Open":37.25,"High":39,"Low":37.19,"Close":38.88,"Volume":4642600},{"Date":"2000/05/25","Open":38.62,"High":38.69,"Low":37.88,"Close":38.38,"Volume":3027300},{"Date":"2000/05/26","Open":38,"High":38.94,"Low":38,"Close":38.25,"Volume":2102100},{"Date":"2000/05/30","Open":38.75,"High":39.69,"Low":38.56,"Close":39.56,"Volume":2325300},{"Date":"2000/05/31","Open":39.56,"High":39.62,"Low":39,"Close":39.06,"Volume":2057000},{"Date":"2000/06/01","Open":39.56,"High":39.88,"Low":39.31,"Close":39.69,"Volume":2322400},{"Date":"2000/06/02","Open":40.06,"High":40.56,"Low":39.5,"Close":39.88,"Volume":3449500},{"Date":"2000/06/05","Open":39.12,"High":39.44,"Low":38.56,"Close":38.94,"Volume":2478000},{"Date":"2000/06/06","Open":39.19,"High":40.19,"Low":39.06,"Close":39.88,"Volume":2938800},{"Date":"2000/06/07","Open":39.69,"High":40,"Low":38.5,"Close":38.56,"Volume":2520100},{"Date":"2000/06/08","Open":38.5,"High":38.62,"Low":37.69,"Close":38.19,"Volume":2481700},{"Date":"2000/06/09","Open":38.75,"High":39.69,"Low":38.62,"Close":39.19,"Volume":2714200},{"Date":"2000/06/12","Open":38.62,"High":39.06,"Low":38.06,"Close":38.12,"Volume":1551800},{"Date":"2000/06/13","Open":38,"High":38.88,"Low":37.69,"Close":38.81,"Volume":2597400},{"Date":"2000/06/14","Open":38.5,"High":39.38,"Low":38.38,"Close":38.81,"Volume":2834500},{"Date":"2000/06/15","Open":39.5,"High":41,"Low":39.25,"Close":40.12,"Volume":6321600},{"Date":"2000/06/16","Open":40.12,"High":40.38,"Low":38.81,"Close":39.25,"Volume":4861000},{"Date":"2000/06/19","Open":39.38,"High":39.56,"Low":38.56,"Close":39,"Volume":3950100},{"Date":"2000/06/20","Open":38.88,"High":39.69,"Low":38.31,"Close":39.56,"Volume":2824900},{"Date":"2000/06/21","Open":39.44,"High":40.12,"Low":39.06,"Close":39.81,"Volume":2531000},{"Date":"2000/06/22","Open":39.75,"High":39.94,"Low":38.75,"Close":38.94,"Volume":2102400},{"Date":"2000/06/23","Open":39.5,"High":40.12,"Low":39.38,"Close":39.88,"Volume":1984700},{"Date":"2000/06/26","Open":39.5,"High":40,"Low":39.5,"Close":39.75,"Volume":2666600},{"Date":"2000/06/27","Open":39.5,"High":40.25,"Low":39.31,"Close":40,"Volume":2845500},{"Date":"2000/06/28","Open":40.38,"High":41.62,"Low":40.25,"Close":40.5,"Volume":3834100},{"Date":"2000/06/29","Open":40.69,"High":41.5,"Low":40.5,"Close":40.94,"Volume":3364100},{"Date":"2000/06/30","Open":41,"High":42.25,"Low":41,"Close":41.81,"Volume":4694200},{"Date":"2000/07/03","Open":41.62,"High":41.94,"Low":41.44,"Close":41.69,"Volume":1232300},{"Date":"2000/07/05","Open":42.12,"High":43.38,"Low":42.06,"Close":42.81,"Volume":4990900},{"Date":"2000/07/06","Open":42.88,"High":43.19,"Low":42.56,"Close":43,"Volume":3642900},{"Date":"2000/07/07","Open":43.12,"High":44.06,"Low":43.06,"Close":43.75,"Volume":4241100},{"Date":"2000/07/10","Open":43.88,"High":44,"Low":43,"Close":43,"Volume":2796200},{"Date":"2000/07/11","Open":43.12,"High":44.75,"Low":43.06,"Close":44.31,"Volume":3799200},{"Date":"2000/07/12","Open":43.94,"High":44.38,"Low":43.69,"Close":43.88,"Volume":2173800},{"Date":"2000/07/13","Open":44.12,"High":45,"Low":44.12,"Close":44.56,"Volume":3427700},{"Date":"2000/07/14","Open":44.75,"High":45.12,"Low":44.31,"Close":44.44,"Volume":3472100},{"Date":"2000/07/17","Open":44.44,"High":44.44,"Low":43.44,"Close":44,"Volume":2465200},{"Date":"2000/07/18","Open":44,"High":45.25,"Low":43.31,"Close":45.12,"Volume":4773100},{"Date":"2000/07/19","Open":45,"High":46.19,"Low":44.06,"Close":45.88,"Volume":7478900},{"Date":"2000/07/20","Open":46,"High":46.25,"Low":45.19,"Close":46.06,"Volume":5032000},{"Date":"2000/07/21","Open":46,"High":47.31,"Low":45.81,"Close":46.81,"Volume":7622000},{"Date":"2000/07/24","Open":46.69,"High":48.25,"Low":46.69,"Close":48.12,"Volume":5027400},{"Date":"2000/07/25","Open":48,"High":50.25,"Low":47.88,"Close":49.44,"Volume":8838400},{"Date":"2000/07/26","Open":49,"High":49.44,"Low":47.69,"Close":48,"Volume":5298100},{"Date":"2000/07/27","Open":48.25,"High":49.44,"Low":48.19,"Close":48.25,"Volume":3898500},{"Date":"2000/07/28","Open":48.19,"High":49.12,"Low":47.94,"Close":48.81,"Volume":3930300},{"Date":"2000/07/31","Open":48.5,"High":49.25,"Low":48.44,"Close":49,"Volume":4475100},{"Date":"2000/08/01","Open":48.88,"High":49.5,"Low":48.69,"Close":48.69,"Volume":3226800},{"Date":"2000/08/02","Open":48.88,"High":49.94,"Low":48.88,"Close":49.88,"Volume":4376200},{"Date":"2000/08/03","Open":49.56,"High":49.94,"Low":48.81,"Close":49,"Volume":3226900},{"Date":"2000/08/04","Open":49,"High":49.12,"Low":48.31,"Close":49,"Volume":2419000},{"Date":"2000/08/07","Open":48.94,"High":49.5,"Low":48.5,"Close":49.06,"Volume":2112800},{"Date":"2000/08/08","Open":48.62,"High":49.19,"Low":48.38,"Close":48.56,"Volume":3384000},{"Date":"2000/08/09","Open":48.62,"High":48.62,"Low":47.12,"Close":47.75,"Volume":4278000},{"Date":"2000/08/10","Open":47.56,"High":48.88,"Low":47.56,"Close":48.88,"Volume":2544700},{"Date":"2000/08/11","Open":48.5,"High":49.94,"Low":48.5,"Close":49.62,"Volume":3281200},{"Date":"2000/08/14","Open":49.62,"High":49.88,"Low":49.31,"Close":49.5,"Volume":2855800},{"Date":"2000/08/15","Open":48.56,"High":48.75,"Low":47.25,"Close":47.25,"Volume":3951800},{"Date":"2000/08/16","Open":46.88,"High":46.88,"Low":45.88,"Close":46.56,"Volume":6308400},{"Date":"2000/08/17","Open":45.88,"High":46.12,"Low":45.75,"Close":45.88,"Volume":2810800},{"Date":"2000/08/18","Open":45.94,"High":46.06,"Low":45.31,"Close":45.69,"Volume":4070500},{"Date":"2000/08/21","Open":45.94,"High":48.25,"Low":45.5,"Close":47.75,"Volume":4088800},{"Date":"2000/08/22","Open":47.75,"High":49.44,"Low":47.62,"Close":49.31,"Volume":4678200},{"Date":"2000/08/23","Open":48.88,"High":50.94,"Low":48.88,"Close":50.56,"Volume":6971500},{"Date":"2000/08/24","Open":50.25,"High":54,"Low":50.19,"Close":53.5,"Volume":10874700},{"Date":"2000/08/25","Open":53.5,"High":54.5,"Low":53.38,"Close":54.12,"Volume":7613400},{"Date":"2000/08/28","Open":54.12,"High":54,"Low":52.94,"Close":53.25,"Volume":4938200},{"Date":"2000/08/29","Open":52.94,"High":53.12,"Low":52.25,"Close":52.62,"Volume":3984900},{"Date":"2000/08/30","Open":52.12,"High":53,"Low":51.94,"Close":52.5,"Volume":3673400},{"Date":"2000/08/31","Open":52.25,"High":54.88,"Low":52.25,"Close":53.62,"Volume":3758200},{"Date":"2000/09/01","Open":53.81,"High":56.25,"Low":53.75,"Close":54.75,"Volume":5087500},{"Date":"2000/09/05","Open":54,"High":56.25,"Low":54,"Close":55.44,"Volume":3704900},{"Date":"2000/09/06","Open":55.62,"High":58.62,"Low":55.56,"Close":57.88,"Volume":7914100},{"Date":"2000/09/07","Open":57,"High":59.94,"Low":57,"Close":59.38,"Volume":10888800},{"Date":"2000/09/08","Open":58.62,"High":59,"Low":57.62,"Close":58.12,"Volume":6635000},{"Date":"2000/09/11","Open":57.88,"High":59.44,"Low":57.69,"Close":58.62,"Volume":4333700},{"Date":"2000/09/12","Open":58.75,"High":60.06,"Low":58.12,"Close":59,"Volume":5625100},{"Date":"2000/09/13","Open":58.88,"High":60.12,"Low":58.75,"Close":59.44,"Volume":4063800},{"Date":"2000/09/14","Open":58.88,"High":58.88,"Low":57.69,"Close":58.38,"Volume":4237000},{"Date":"2000/09/15","Open":57.88,"High":59.19,"Low":56.75,"Close":56.88,"Volume":5781200},{"Date":"2000/09/18","Open":56.75,"High":58.56,"Low":56.62,"Close":56.94,"Volume":3178700},{"Date":"2000/09/19","Open":56.62,"High":57.56,"Low":56.25,"Close":56.77,"Volume":4220300},{"Date":"2000/09/20","Open":57,"High":60.06,"Low":56.94,"Close":59.06,"Volume":6373800},{"Date":"2000/09/21","Open":59.5,"High":60.69,"Low":59.25,"Close":60.12,"Volume":6158200},{"Date":"2000/09/22","Open":59.75,"High":64.31,"Low":59,"Close":64,"Volume":6829300},{"Date":"2000/09/25","Open":63.75,"High":64.31,"Low":61.75,"Close":63.88,"Volume":5338300},{"Date":"2000/09/26","Open":63.12,"High":66.94,"Low":62.81,"Close":66.06,"Volume":7064600},{"Date":"2000/09/27","Open":65.75,"High":66.5,"Low":63.38,"Close":65.25,"Volume":7533400},{"Date":"2000/09/28","Open":63.88,"High":65.38,"Low":63.62,"Close":64.5,"Volume":6704100},{"Date":"2000/09/29","Open":62.62,"High":63.94,"Low":60.62,"Close":63.12,"Volume":5004300},{"Date":"2000/10/02","Open":61,"High":61.25,"Low":57.25,"Close":58.44,"Volume":9275500},{"Date":"2000/10/03","Open":59,"High":60.31,"Low":59,"Close":59.88,"Volume":5007200},{"Date":"2000/10/04","Open":59.5,"High":62.44,"Low":59.5,"Close":61.12,"Volume":5019900},{"Date":"2000/10/05","Open":61.06,"High":63,"Low":60.25,"Close":61.06,"Volume":4016900},{"Date":"2000/10/06","Open":61.19,"High":62.19,"Low":60.5,"Close":61,"Volume":3057100},{"Date":"2000/10/09","Open":60.25,"High":60.69,"Low":59.25,"Close":59.44,"Volume":2180100},{"Date":"2000/10/10","Open":59.62,"High":60.12,"Low":59.06,"Close":59.56,"Volume":2501200},{"Date":"2000/10/11","Open":59,"High":61.25,"Low":58.81,"Close":60.19,"Volume":2960800},{"Date":"2000/10/12","Open":59.94,"High":60.31,"Low":54,"Close":56.12,"Volume":8935400},{"Date":"2000/10/13","Open":56,"High":60.31,"Low":55.94,"Close":58.75,"Volume":4721000},{"Date":"2000/10/16","Open":59.62,"High":61.06,"Low":59.44,"Close":60.19,"Volume":2649100},{"Date":"2000/10/17","Open":60.19,"High":61.44,"Low":58.62,"Close":60.5,"Volume":2909800},{"Date":"2000/10/18","Open":58.5,"High":61.5,"Low":58.38,"Close":60.75,"Volume":4731000},{"Date":"2000/10/19","Open":61,"High":61.19,"Low":57.31,"Close":58.44,"Volume":6481600},{"Date":"2000/10/20","Open":58.38,"High":60.25,"Low":57.81,"Close":60,"Volume":3795000},{"Date":"2000/10/23","Open":60.5,"High":62,"Low":60.06,"Close":61.25,"Volume":5672500},{"Date":"2000/10/24","Open":60.88,"High":61.94,"Low":60.62,"Close":61,"Volume":4167200},{"Date":"2000/10/25","Open":61.12,"High":63.94,"Low":61.12,"Close":62.56,"Volume":5929900},{"Date":"2000/10/26","Open":62,"High":63.62,"Low":61.88,"Close":63.06,"Volume":4459800},{"Date":"2000/10/27","Open":63.06,"High":63.81,"Low":63,"Close":63.75,"Volume":2632700},{"Date":"2000/10/30","Open":63.75,"High":65.19,"Low":63.69,"Close":64.69,"Volume":4769200},{"Date":"2000/10/31","Open":64.69,"High":67.88,"Low":64.06,"Close":67.81,"Volume":4694800},{"Date":"2000/11/01","Open":67.56,"High":67.75,"Low":65.12,"Close":65.75,"Volume":5574200},{"Date":"2000/11/02","Open":65.38,"High":67,"Low":63.81,"Close":66.12,"Volume":5114500},{"Date":"2000/11/03","Open":66.19,"High":66.75,"Low":65.5,"Close":66.12,"Volume":2738700},{"Date":"2000/11/06","Open":64.44,"High":66.38,"Low":64,"Close":66,"Volume":3576700},{"Date":"2000/11/07","Open":65.5,"High":65.94,"Low":65.06,"Close":65.19,"Volume":3025800},{"Date":"2000/11/08","Open":65.19,"High":66.12,"Low":64.5,"Close":65.06,"Volume":1595500},{"Date":"2000/11/09","Open":64.88,"High":65.94,"Low":64.44,"Close":65.69,"Volume":2047300},{"Date":"2000/11/10","Open":65.44,"High":65.75,"Low":63.25,"Close":63.25,"Volume":2847400},{"Date":"2000/11/13","Open":62.12,"High":63.62,"Low":61.94,"Close":62.81,"Volume":2943400},{"Date":"2000/11/14","Open":63.06,"High":64.81,"Low":63.06,"Close":64.38,"Volume":3553800},{"Date":"2000/11/15","Open":63.75,"High":63.81,"Low":62.69,"Close":63.56,"Volume":3089800},{"Date":"2000/11/16","Open":63.56,"High":66.38,"Low":63.56,"Close":65.81,"Volume":3557400},{"Date":"2000/11/17","Open":65.75,"High":66.81,"Low":65.06,"Close":65.38,"Volume":3517000},{"Date":"2000/11/20","Open":65,"High":66.5,"Low":65,"Close":65.56,"Volume":2503900},{"Date":"2000/11/21","Open":65.31,"High":69.5,"Low":65.31,"Close":68.62,"Volume":5728600},{"Date":"2000/11/22","Open":68.12,"High":68.44,"Low":64.88,"Close":65.12,"Volume":4276000},{"Date":"2000/11/24","Open":66,"High":66.81,"Low":65.56,"Close":65.69,"Volume":1122400},{"Date":"2000/11/27","Open":67,"High":68,"Low":67,"Close":67.38,"Volume":2771400},{"Date":"2000/11/28","Open":67.31,"High":68.19,"Low":66.25,"Close":67.5,"Volume":3243900},{"Date":"2000/11/29","Open":66.44,"High":70,"Low":66.19,"Close":69.88,"Volume":6369100},{"Date":"2000/11/30","Open":69.44,"High":69.69,"Low":67.56,"Close":68.75,"Volume":4245000},{"Date":"2000/12/01","Open":68.69,"High":68.69,"Low":65.19,"Close":65.81,"Volume":4420400},{"Date":"2000/12/04","Open":65.81,"High":65.81,"Low":63.69,"Close":64.69,"Volume":5188000},{"Date":"2000/12/05","Open":65.94,"High":70.19,"Low":64.5,"Close":68.94,"Volume":6329000},{"Date":"2000/12/06","Open":68.94,"High":69.44,"Low":66.81,"Close":67.32,"Volume":4597700},{"Date":"2000/12/07","Open":67.12,"High":68.12,"Low":66.81,"Close":66.81,"Volume":2295400},{"Date":"2000/12/08","Open":67.56,"High":70.94,"Low":67.38,"Close":67.38,"Volume":5175200},{"Date":"2000/12/11","Open":69.69,"High":70.62,"Low":68.38,"Close":68.38,"Volume":3799000},{"Date":"2000/12/12","Open":68.12,"High":70.44,"Low":68.12,"Close":69.12,"Volume":3164500},{"Date":"2000/12/13","Open":68.75,"High":69.81,"Low":67.75,"Close":67.88,"Volume":2366600},{"Date":"2000/12/14","Open":67.38,"High":68.94,"Low":66.5,"Close":67.25,"Volume":3319700},{"Date":"2000/12/15","Open":65.88,"High":66.69,"Low":64.75,"Close":64.88,"Volume":6202400},{"Date":"2000/12/18","Open":66,"High":69.94,"Low":66,"Close":68.5,"Volume":4228800},{"Date":"2000/12/19","Open":67.88,"High":68.62,"Low":66.12,"Close":66.38,"Volume":4316000},{"Date":"2000/12/20","Open":66.12,"High":66.44,"Low":64.06,"Close":65,"Volume":4035600},{"Date":"2000/12/21","Open":64.75,"High":65,"Low":62.56,"Close":64.62,"Volume":4724400},{"Date":"2000/12/22","Open":64.19,"High":65,"Low":61.44,"Close":63.44,"Volume":4071700},{"Date":"2000/12/26","Open":63.88,"High":64.5,"Low":62.25,"Close":63,"Volume":2366500},{"Date":"2000/12/27","Open":62.25,"High":64.88,"Low":62.25,"Close":64.06,"Volume":2723600},{"Date":"2000/12/28","Open":64,"High":67,"Low":63.75,"Close":65.44,"Volume":2486100},{"Date":"2000/12/29","Open":65.88,"High":66.75,"Low":65.62,"Close":66,"Volume":2553400},{"Date":"2001/01/02","Open":64.88,"High":65.31,"Low":60.56,"Close":62,"Volume":3762200},{"Date":"2001/01/03","Open":60.75,"High":63.75,"Low":59.19,"Close":62.56,"Volume":6428500},{"Date":"2001/01/04","Open":64,"High":64.19,"Low":60.25,"Close":61,"Volume":3841100},{"Date":"2001/01/05","Open":61.38,"High":61.5,"Low":58.12,"Close":58.75,"Volume":3758500},{"Date":"2001/01/08","Open":58.75,"High":60.5,"Low":58.69,"Close":59,"Volume":3012100},{"Date":"2001/01/09","Open":59,"High":59,"Low":57.19,"Close":58.94,"Volume":4356700},{"Date":"2001/01/10","Open":58.38,"High":60.88,"Low":58.31,"Close":60.38,"Volume":3659600},{"Date":"2001/01/11","Open":60,"High":60.75,"Low":59,"Close":59.12,"Volume":3371000},{"Date":"2001/01/12","Open":59.56,"High":60.69,"Low":58.56,"Close":60.62,"Volume":3150700},{"Date":"2001/01/16","Open":59.94,"High":61.62,"Low":59.5,"Close":61,"Volume":3268200},{"Date":"2001/01/17","Open":62.44,"High":62.69,"Low":58.25,"Close":58.75,"Volume":6605200},{"Date":"2001/01/18","Open":56.5,"High":58,"Low":55.62,"Close":57.38,"Volume":6044500},{"Date":"2001/01/19","Open":57.38,"High":57.44,"Low":55.5,"Close":55.69,"Volume":4295900},{"Date":"2001/01/22","Open":56.31,"High":56.88,"Low":55.69,"Close":56,"Volume":3604000},{"Date":"2001/01/23","Open":56.94,"High":58,"Low":56.19,"Close":57.5,"Volume":4417100},{"Date":"2001/01/24","Open":56.88,"High":58,"Low":56.88,"Close":57.44,"Volume":2997300},{"Date":"2001/01/25","Open":56.5,"High":59.69,"Low":56.5,"Close":59.25,"Volume":3683300},{"Date":"2001/01/26","Open":58.75,"High":59.69,"Low":57.5,"Close":58.06,"Volume":2299000},{"Date":"2001/01/29","Open":57.7,"High":57.99,"Low":56.31,"Close":56.46,"Volume":2357500},{"Date":"2001/01/30","Open":56.46,"High":56.59,"Low":54.56,"Close":56.15,"Volume":3650100},{"Date":"2001/01/31","Open":56.5,"High":58.91,"Low":56.5,"Close":58.5,"Volume":3614600},{"Date":"2001/02/01","Open":58,"High":58.5,"Low":56.06,"Close":56.52,"Volume":4099000},{"Date":"2001/02/02","Open":56.97,"High":57.5,"Low":56.04,"Close":56.85,"Volume":2121700},{"Date":"2001/02/05","Open":56.73,"High":58.04,"Low":56.42,"Close":57.93,"Volume":2188100},{"Date":"2001/02/06","Open":57.88,"High":58.46,"Low":56.47,"Close":56.73,"Volume":2353100},{"Date":"2001/02/07","Open":56.95,"High":57.89,"Low":56.65,"Close":57.45,"Volume":2182900},{"Date":"2001/02/08","Open":57.35,"High":58.26,"Low":57.12,"Close":57.51,"Volume":2777000},{"Date":"2001/02/09","Open":57.7,"High":58.17,"Low":56.78,"Close":57.34,"Volume":1997200},{"Date":"2001/02/12","Open":58.65,"High":59.1,"Low":58.21,"Close":59.07,"Volume":2875500},{"Date":"2001/02/13","Open":59.09,"High":61.38,"Low":59.09,"Close":60.72,"Volume":4984900},{"Date":"2001/02/14","Open":61.72,"High":61.94,"Low":60.34,"Close":60.59,"Volume":3684200},{"Date":"2001/02/15","Open":60.59,"High":60.76,"Low":58.84,"Close":60.15,"Volume":2531900},{"Date":"2001/02/16","Open":59.8,"High":60.61,"Low":59.63,"Close":59.99,"Volume":2933600},{"Date":"2001/02/20","Open":60.35,"High":62.8,"Low":60.15,"Close":61.85,"Volume":3139500},{"Date":"2001/02/21","Open":61.85,"High":62.38,"Low":60.15,"Close":60.2,"Volume":2286300},{"Date":"2001/02/22","Open":60.2,"High":62.23,"Low":60.2,"Close":61.28,"Volume":2767600},{"Date":"2001/02/23","Open":60.98,"High":61.75,"Low":60.55,"Close":61.61,"Volume":2266900},{"Date":"2001/02/26","Open":61.45,"High":62.97,"Low":61.02,"Close":62.76,"Volume":1854600},{"Date":"2001/02/27","Open":62.3,"High":63.9,"Low":62,"Close":63.7,"Volume":2993000},{"Date":"2001/02/28","Open":63.8,"High":63.83,"Low":61.99,"Close":62.2,"Volume":3051400},{"Date":"2001/03/01","Open":61.85,"High":61.86,"Low":58.6,"Close":59.65,"Volume":4225700},{"Date":"2001/03/02","Open":59.55,"High":61.45,"Low":58.3,"Close":60.1,"Volume":3763900},{"Date":"2001/03/05","Open":59.9,"High":62.15,"Low":59.88,"Close":61.91,"Volume":2814700},{"Date":"2001/03/06","Open":62.05,"High":62.59,"Low":61.29,"Close":62.13,"Volume":2783400},{"Date":"2001/03/07","Open":61.95,"High":64.21,"Low":61.87,"Close":64.1,"Volume":3475400},{"Date":"2001/03/08","Open":64,"High":65.2,"Low":63.55,"Close":64.75,"Volume":4224600},{"Date":"2001/03/09","Open":64.45,"High":65.6,"Low":64.2,"Close":65.5,"Volume":2716600},{"Date":"2001/03/12","Open":64.2,"High":64.32,"Low":60.96,"Close":61,"Volume":4269900},{"Date":"2001/03/13","Open":62.01,"High":62.99,"Low":60.06,"Close":60.57,"Volume":4786300},{"Date":"2001/03/14","Open":59.5,"High":59.51,"Low":56.83,"Close":58.02,"Volume":5983800},{"Date":"2001/03/15","Open":58.02,"High":58.02,"Low":55.51,"Close":56.1,"Volume":5136800},{"Date":"2001/03/16","Open":55.63,"High":56.2,"Low":52.85,"Close":53.75,"Volume":10933600},{"Date":"2001/03/19","Open":54.57,"High":56.25,"Low":53.75,"Close":56.02,"Volume":6143200},{"Date":"2001/03/20","Open":56.6,"High":57.19,"Low":54.76,"Close":55,"Volume":4359800},{"Date":"2001/03/21","Open":54.6,"High":55.4,"Low":53.2,"Close":53.85,"Volume":3758400},{"Date":"2001/03/22","Open":53.1,"High":53.35,"Low":49.7,"Close":52,"Volume":6600400},{"Date":"2001/03/23","Open":52.75,"High":53.44,"Low":51.6,"Close":53,"Volume":4632300},{"Date":"2001/03/26","Open":53.55,"High":56.17,"Low":53.55,"Close":55.44,"Volume":4778800},{"Date":"2001/03/27","Open":55.31,"High":56.24,"Low":54.25,"Close":55.2,"Volume":3634200},{"Date":"2001/03/28","Open":54.6,"High":55.18,"Low":51.85,"Close":55,"Volume":2861600},{"Date":"2001/03/29","Open":54.55,"High":56.3,"Low":54.25,"Close":55.95,"Volume":2814300},{"Date":"2001/03/30","Open":55.4,"High":57.27,"Low":55.31,"Close":55.71,"Volume":3741200},{"Date":"2001/04/02","Open":55.4,"High":56.6,"Low":54.53,"Close":55.02,"Volume":3182300},{"Date":"2001/04/03","Open":55.45,"High":55.45,"Low":54.11,"Close":54.61,"Volume":3337500},{"Date":"2001/04/04","Open":54.5,"High":55.2,"Low":53.92,"Close":54.63,"Volume":2953500},{"Date":"2001/04/05","Open":56,"High":57.5,"Low":55.84,"Close":56.81,"Volume":2703000},{"Date":"2001/04/06","Open":56,"High":56.65,"Low":55.32,"Close":55.98,"Volume":2768100},{"Date":"2001/04/09","Open":56.05,"High":57.74,"Low":56,"Close":56.87,"Volume":2547300},{"Date":"2001/04/10","Open":58.1,"High":60.19,"Low":57.83,"Close":59.82,"Volume":4478700},{"Date":"2001/04/11","Open":60.57,"High":61,"Low":58.5,"Close":59.12,"Volume":3979200},{"Date":"2001/04/12","Open":58.95,"High":60.5,"Low":58.62,"Close":60.5,"Volume":1607100},{"Date":"2001/04/16","Open":60.25,"High":60.98,"Low":59.18,"Close":59.75,"Volume":2145500},{"Date":"2001/04/17","Open":59.75,"High":60.6,"Low":59,"Close":60.6,"Volume":2257400},{"Date":"2001/04/18","Open":60.85,"High":63.73,"Low":60.7,"Close":61.3,"Volume":3076500},{"Date":"2001/04/19","Open":61.48,"High":61.62,"Low":59.55,"Close":60.63,"Volume":3549200},{"Date":"2001/04/20","Open":61.9,"High":64.91,"Low":60.5,"Close":61.7,"Volume":7126900},{"Date":"2001/04/23","Open":60.9,"High":61.28,"Low":59.61,"Close":60.14,"Volume":4319700},{"Date":"2001/04/24","Open":60,"High":62.13,"Low":60,"Close":60.8,"Volume":3076600},{"Date":"2001/04/25","Open":59.95,"High":60.41,"Low":59.9,"Close":60.34,"Volume":3494100},{"Date":"2001/04/26","Open":60.09,"High":61.2,"Low":59.77,"Close":60.98,"Volume":2992200},{"Date":"2001/04/27","Open":60.92,"High":61.8,"Low":60.84,"Close":61.61,"Volume":2178600},{"Date":"2001/04/30","Open":62.4,"High":64.16,"Low":61.8,"Close":61.8,"Volume":3052800},{"Date":"2001/05/01","Open":62.7,"High":64.48,"Low":62.7,"Close":63.43,"Volume":4772100},{"Date":"2001/05/02","Open":63.68,"High":64.3,"Low":63.25,"Close":64,"Volume":3346200},{"Date":"2001/05/03","Open":63.75,"High":64.2,"Low":62.71,"Close":64,"Volume":2168500},{"Date":"2001/05/04","Open":63.15,"High":65,"Low":63,"Close":64.5,"Volume":2390700},{"Date":"2001/05/07","Open":64.7,"High":65.27,"Low":64.25,"Close":64.69,"Volume":2149200},{"Date":"2001/05/08","Open":64.5,"High":65.2,"Low":64.3,"Close":64.63,"Volume":2663000},{"Date":"2001/05/09","Open":64.05,"High":65.51,"Low":64,"Close":65,"Volume":2351300},{"Date":"2001/05/10","Open":65.55,"High":66,"Low":65.16,"Close":65.95,"Volume":2437300},{"Date":"2001/05/11","Open":65.97,"High":66.43,"Low":65.3,"Close":66.01,"Volume":1659000},{"Date":"2001/05/14","Open":66,"High":66.75,"Low":65.87,"Close":66.74,"Volume":1399700},{"Date":"2001/05/15","Open":66.02,"High":66.7,"Low":65.44,"Close":66.59,"Volume":2583000},{"Date":"2001/05/16","Open":66.6,"High":66.75,"Low":65.65,"Close":66.75,"Volume":3985800},{"Date":"2001/05/17","Open":66.75,"High":69.85,"Low":66.56,"Close":68.79,"Volume":6049300},{"Date":"2001/05/18","Open":68.79,"High":68.9,"Low":67.97,"Close":68.35,"Volume":3360700},{"Date":"2001/05/21","Open":67.9,"High":68.75,"Low":67.87,"Close":68.69,"Volume":1554000},{"Date":"2001/05/22","Open":68.1,"High":68.95,"Low":67.5,"Close":68,"Volume":2810100},{"Date":"2001/05/23","Open":67.4,"High":67.65,"Low":66,"Close":66,"Volume":3684300},{"Date":"2001/05/24","Open":66.2,"High":67.46,"Low":64.05,"Close":65.2,"Volume":4250300},{"Date":"2001/05/25","Open":64.9,"High":64.9,"Low":62.9,"Close":63.33,"Volume":3136600},{"Date":"2001/05/29","Open":63.5,"High":63.9,"Low":63.2,"Close":63.53,"Volume":2271400},{"Date":"2001/05/30","Open":63.57,"High":63.95,"Low":62.8,"Close":63.05,"Volume":3197700},{"Date":"2001/05/31","Open":63.3,"High":63.4,"Low":62.33,"Close":62.89,"Volume":2652800},{"Date":"2001/06/01","Open":63,"High":65.57,"Low":62.9,"Close":65,"Volume":3300300},{"Date":"2001/06/04","Open":64.9,"High":66.7,"Low":64.9,"Close":66.03,"Volume":2464100},{"Date":"2001/06/05","Open":67.03,"High":67.55,"Low":66.7,"Close":66.93,"Volume":3384100},{"Date":"2001/06/06","Open":66.15,"High":66.26,"Low":65.72,"Close":66.1,"Volume":3492100},{"Date":"2001/06/07","Open":65.95,"High":66.06,"Low":65.12,"Close":65.65,"Volume":2176200},{"Date":"2001/06/08","Open":65.62,"High":65.62,"Low":64.1,"Close":64.59,"Volume":2250000},{"Date":"2001/06/11","Open":64.59,"High":64.75,"Low":63.67,"Close":64.5,"Volume":1662300},{"Date":"2001/06/12","Open":64.3,"High":66.14,"Low":64.2,"Close":65.71,"Volume":3072300},{"Date":"2001/06/13","Open":65.6,"High":66.49,"Low":65.4,"Close":65.49,"Volume":2161500},{"Date":"2001/06/14","Open":65.49,"High":65.49,"Low":63.32,"Close":63.56,"Volume":3703600},{"Date":"2001/06/15","Open":63.8,"High":64.51,"Low":63.72,"Close":64.25,"Volume":5569400},{"Date":"2001/06/18","Open":64.85,"High":64.99,"Low":64.41,"Close":64.88,"Volume":2421700},{"Date":"2001/06/19","Open":64.7,"High":64.88,"Low":61.54,"Close":61.8,"Volume":4503100},{"Date":"2001/06/20","Open":61.8,"High":62.85,"Low":60.38,"Close":61.11,"Volume":5948800},{"Date":"2001/06/21","Open":60,"High":60,"Low":56.7,"Close":57.75,"Volume":9704900},{"Date":"2001/06/22","Open":57.75,"High":57.88,"Low":55.4,"Close":57,"Volume":6128000},{"Date":"2001/06/25","Open":56.95,"High":57.78,"Low":56.39,"Close":56.96,"Volume":5424700},{"Date":"2001/06/26","Open":56.7,"High":57.82,"Low":56.05,"Close":57.02,"Volume":4629500},{"Date":"2001/06/27","Open":57.02,"High":58.04,"Low":56.88,"Close":57.7,"Volume":3117600},{"Date":"2001/06/28","Open":57.3,"High":58.38,"Low":56.88,"Close":57.24,"Volume":4013600},{"Date":"2001/06/29","Open":56.89,"High":57.5,"Low":55.58,"Close":55.6,"Volume":4835700},{"Date":"2001/07/02","Open":56.6,"High":57.22,"Low":56.3,"Close":56.36,"Volume":3338500},{"Date":"2001/07/03","Open":56.36,"High":57.06,"Low":56.15,"Close":56.33,"Volume":2202300},{"Date":"2001/07/05","Open":56.7,"High":56.72,"Low":55.15,"Close":55.23,"Volume":3139100},{"Date":"2001/07/06","Open":55.05,"High":55.48,"Low":53.77,"Close":54.3,"Volume":4104200},{"Date":"2001/07/09","Open":53.85,"High":54.02,"Low":52.55,"Close":52.83,"Volume":5520600},{"Date":"2001/07/10","Open":53.73,"High":54.62,"Low":53.19,"Close":54.15,"Volume":4709600},{"Date":"2001/07/11","Open":54,"High":54.21,"Low":52.9,"Close":52.9,"Volume":3299200},{"Date":"2001/07/12","Open":53.4,"High":54.79,"Low":53.26,"Close":54.5,"Volume":3217400},{"Date":"2001/07/13","Open":54.49,"High":55.21,"Low":53.77,"Close":55.07,"Volume":1637700},{"Date":"2001/07/16","Open":54.62,"High":55.39,"Low":54.08,"Close":55.28,"Volume":1945300},{"Date":"2001/07/17","Open":55.4,"High":56.72,"Low":55.4,"Close":56.3,"Volume":3840900},{"Date":"2001/07/18","Open":57.6,"High":57.6,"Low":55.05,"Close":57.13,"Volume":5454100},{"Date":"2001/07/19","Open":57.41,"High":57.95,"Low":55.7,"Close":56.39,"Volume":3427100},{"Date":"2001/07/20","Open":56.39,"High":57.15,"Low":56.27,"Close":56.79,"Volume":1834100},{"Date":"2001/07/23","Open":57.09,"High":57.25,"Low":56.05,"Close":56.25,"Volume":2119300},{"Date":"2001/07/24","Open":56.6,"High":56.6,"Low":55.19,"Close":55.26,"Volume":2174700},{"Date":"2001/07/25","Open":55.96,"High":56.85,"Low":55.82,"Close":56.67,"Volume":1581100},{"Date":"2001/07/26","Open":56.55,"High":58.18,"Low":56.52,"Close":58.11,"Volume":2309300},{"Date":"2001/07/27","Open":57.95,"High":58.9,"Low":57.95,"Close":58.14,"Volume":2611900},{"Date":"2001/07/30","Open":58.64,"High":58.9,"Low":57.4,"Close":57.4,"Volume":2613500},{"Date":"2001/07/31","Open":57.2,"High":58.79,"Low":57.12,"Close":58.53,"Volume":2612700},{"Date":"2001/08/01","Open":58.65,"High":59.34,"Low":58.52,"Close":59,"Volume":2174400},{"Date":"2001/08/02","Open":59.5,"High":59.75,"Low":58.32,"Close":58.82,"Volume":2348200},{"Date":"2001/08/03","Open":58.82,"High":59.25,"Low":58.56,"Close":59.21,"Volume":1946300},{"Date":"2001/08/06","Open":59,"High":59.8,"Low":58.34,"Close":58.4,"Volume":2721600},{"Date":"2001/08/07","Open":57.44,"High":57.73,"Low":56.5,"Close":57.5,"Volume":4131100},{"Date":"2001/08/08","Open":57.15,"High":57.68,"Low":56.32,"Close":56.61,"Volume":2982800},{"Date":"2001/08/09","Open":56.51,"High":57.04,"Low":55.88,"Close":56.36,"Volume":3755500},{"Date":"2001/08/10","Open":56.51,"High":56.93,"Low":56.11,"Close":56.85,"Volume":2330500},{"Date":"2001/08/13","Open":56.55,"High":57.24,"Low":56.15,"Close":56.45,"Volume":1590500},{"Date":"2001/08/14","Open":56.45,"High":56.7,"Low":55.85,"Close":55.89,"Volume":2119000},{"Date":"2001/08/15","Open":55.55,"High":56.1,"Low":54.39,"Close":54.44,"Volume":3311300},{"Date":"2001/08/16","Open":54.1,"High":55.13,"Low":53.79,"Close":55.13,"Volume":2957000},{"Date":"2001/08/17","Open":55,"High":55,"Low":53.4,"Close":54,"Volume":2412300},{"Date":"2001/08/20","Open":53.75,"High":53.8,"Low":52.8,"Close":53.34,"Volume":3228000},{"Date":"2001/08/21","Open":53.27,"High":53.31,"Low":51.94,"Close":51.94,"Volume":3330300},{"Date":"2001/08/22","Open":51.94,"High":52.6,"Low":51.78,"Close":52.3,"Volume":4189500},{"Date":"2001/08/23","Open":52.1,"High":52.5,"Low":52,"Close":52.17,"Volume":1561600},{"Date":"2001/08/24","Open":52.34,"High":53.95,"Low":52.3,"Close":53.63,"Volume":2352500},{"Date":"2001/08/27","Open":53.91,"High":53.91,"Low":53.01,"Close":53.06,"Volume":1694300},{"Date":"2001/08/28","Open":53,"High":53.21,"Low":51.55,"Close":51.65,"Volume":4484300},{"Date":"2001/08/29","Open":51.8,"High":52,"Low":50.51,"Close":50.7,"Volume":3533500},{"Date":"2001/08/30","Open":50.7,"High":51.15,"Low":50.17,"Close":50.5,"Volume":2518100},{"Date":"2001/08/31","Open":50.5,"High":51.2,"Low":50.26,"Close":51.2,"Volume":1887700},{"Date":"2001/09/04","Open":49.75,"High":51.97,"Low":49.45,"Close":49.95,"Volume":3242700},{"Date":"2001/09/05","Open":50.2,"High":51.25,"Low":49.9,"Close":50.61,"Volume":3354600},{"Date":"2001/09/06","Open":50.1,"High":50.45,"Low":48.45,"Close":48.84,"Volume":3921700},{"Date":"2001/09/07","Open":47.8,"High":48,"Low":44.79,"Close":45.18,"Volume":8114600}];

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
					<h2>KendoMap</h2>
					<KendoMap options={{
						center: [30.268107, -97.744821],
						zoom: 3,
						layers: [{
							type: "tile",
							urlTemplate: "http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
							subdomains: ["a", "b", "c"],
							attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap contributors</a>"
						}],
						markers: [{
							location: [30.268107, -97.744821],
							shape: "pinTarget",
							tooltip: {
								content: "Austin, TX"
							}
						}]
					}}></KendoMap>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoDiagram</h2>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoQRCode</h2>
					<KendoQRCode options={{
						value: "//github.com/codylindley/k-ui-react-jquery-wrappers",
                        errorCorrection: "M",
                        size: 120,
                        border: {
                            color: "#000000",
                            width: 5
                        }
					}}></KendoQRCode>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoBarCode</h2>
					<KendoBarCode options={{
                    value: "2346722",
                    type: "ean8",
                    width: 280,
                    height: 100
					}}></KendoBarCode>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoRadialGauge</h2>
					<KendoRadialGauge options={{
                        pointer: [{
                            value: 10,
                            color: "#c20000",
                            cap: { size: 0.15 }
                        }, {
                            value: 70,
                            color: "#ff7a00",
                            cap: { size: 0.1 }
                        }, {
                            value: 140,
                            color: "#ffc700"
                        }],
                        scale: {
                            minorUnit: 5,
                            startAngle: -30,
                            endAngle: 210,
                            max: 180
                        }
					}}></KendoRadialGauge>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoLinearGauge</h2>
					<KendoLinearGauge options={{
						pointer: {
                            value: 28
                        },

                        scale: {
                            majorUnit: 20,
                            minorUnit: 2,
                            min: -40,
                            max: 60,
                            vertical: true,
                            ranges: [
                                {
                                    from: -40,
                                    to: -20,
                                    color: "#2798df"
                                }, {
                                    from: 30,
                                    to: 45,
                                    color: "#ffc700"
                                }, {
                                    from: 45,
                                    to: 60,
                                    color: "#c20000"
                                }
                            ]
                        }
					}}></KendoLinearGauge>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoCharts</h2>
						<KendoCharts options={{
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
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoSparklines</h2>
						<KendoSparklines options={{
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
						}}></KendoSparklines>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoStockChart</h2>
						<KendoStockChart options={{
								dataSource: {
								data: dataStockChart,
								schema: {
									model: {
										fields: {
											Date: { type: "date" }
										}
									}
								}
							},
							title: {
								text: "The Boeing Company\nNYSE:BA"
							},
							dateField: "Date",
							series: [{
								type: "candlestick",
								openField: "Open",
								highField: "High",
								lowField: "Low",
								closeField: "Close"
							}],
							categoryAxis: {
								labels: {
									rotation: "auto"
								}
							},
							navigator: {
								series: {
									type: "area",
									field: "Close"
								},
								select: {
									from: "2000/02/05",
									to: "2000/10/07"
								},
								categoryAxis: {
									labels: {
										rotation: "auto"
									}
								}
							}
						}}></KendoStockChart>
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoTreeMap</h2>
						<KendoTreeMap options={{
							dataSource: dataTreeMap,
							valueField: "value",
							textField: "name"
						}}></KendoTreeMap>
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
					<h2>KendoUpload</h2>
					<KendoUpload />
				</div>
				<div style={{ marginBottom: 150 }}>
					<h2>KendoTreeView</h2>
					<KendoTreeView>
						<ul>
							<li>Item 1
								<ul>
									<li>Item 1.1</li>
									<li>Item 1.2</li>
								</ul>
							</li>
							<li>Item 2</li>
						</ul>
					</KendoTreeView>
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
					<h2>KendoEditor</h2>
					{/*<KendoEditor></KendoEditor>*/}
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
					<h2>KendoPivotGrid</h2>
					<KendoPivotGrid options={{
						dataSource: {
							type: "xmla", //define the type
							columns: [{ name: "[Date].[Calendar]" }], //specify a dimesion on columns
							rows: [{ name: "[Product].[Category]" }], //specify a dimesion on rows
							measures: ["[Measures].[Internet Sales Amount]"], //specify a measure to display
							transport: {
								connection: {
									catalog: "Adventure Works DW 2008R2", //specify the name of the catalog
									cube: "Adventure Works" //specify the name of the cube
								},
								read: {
									url: "http://demos.telerik.com/olap/msmdpump.dll", //define the URL of the service
									dataType: "text",
									contentType: "text/xml",
									type: "POST"
								}
							},
							schema: {
								type: "xmla" //specify the type of the schema
							},
						}
					}}></KendoPivotGrid>
				</div>
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
					{/*<KendoSpreadsheet />*/}
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
