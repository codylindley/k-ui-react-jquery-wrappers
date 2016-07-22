import $ from 'jquery';
import kuidropdown from 'kendo-ui-core/js/kendo.dropdownlist.js';
import React from 'react';
import ReactDOM from 'react-dom';
import deepDiff from 'deep-diff';

const KendoDropDownList = React.createClass({
	componentDidMount: function() {//comonent is in the DOM, so do stuff to it
		//store reference to:
		//1. element node widget is invoked on
		//2. element node widget, wrapped with jQuery
		//3. instance of widget
		var elementNode, $elementNode, widgetInstance;
		this.elementNode = elementNode = ReactDOM.findDOMNode(this);
		this.$elementNode = $elementNode = $(elementNode);

		//instantiate the Kendo UI widget from props & save ref in widgetInstance
		this.widgetInstance = widgetInstance = new kuidropdown.ui.DropDownList(ReactDOM.findDOMNode(this),this.props.options);

		//if props are avaliable for events, triggers, unbind events, or methods make it happen
		this.props.events ? this.bindEventsToKendoWidget(this.props.events) : null;
		this.props.methods ? this.callKendoWidgetMethods(this.props.methods) : null;
		this.props.triggerEvents ? this.triggerKendoWidgetEvents(this.props.triggerEvents) : null;
		this.props.unbindEvents ? this.unbindEventsToKendoWidget(this.props.unbindEvents) : null;
	},
	triggerKendoWidgetEvents:function(events){
		events.forEach(function(event){
			this.widgetInstance.trigger(event);
		}, this);
	},
	bindEventsToKendoWidget:function(events){
		Object.keys(events).forEach(function(event){
			this.widgetInstance.bind(event,events[event]);
		}, this);
	},
	unbindEventsToKendoWidget:function(events){
		events.forEach(function(event){
			this.widgetInstance.unbind(event);
		}, this);
	},
	callKendoWidgetMethods:function(methods){
		Object.keys(methods).forEach(function(method){
		    this.widgetInstance[method](...methods[method])
		}, this);
	},
	//not called on inital render, but whenever parent state changes this is called
	componentWillReceiveProps: function(nextProps){
		//have too, because these are functions, for now, thinking about stringing them and comparing
		if(nextProps.events){
			this.bindEventsToKendoWidget(nextProps.events);
		}

		if(this.widgetInstance.setOptions){
			if(nextProps.options){
				this.widgetInstance.setOptions(nextProps.options);
			}
		}

		if(nextProps.methods){
			if(deepDiff(nextProps.methods,this.props.methods)){
				this.callKendoWidgetMethods(nextProps.methods);
			}
		}

		if(nextProps.unbindEvents){
			if(deepDiff(nextProps.unbindEvents,this.props.unbindEvents)){
				this.unbindEventsToKendoWidget(nextProps.unbindEvents);
			}
		}

		if(nextProps.triggerEvents){
			if(deepDiff(nextProps.triggerEvents,this.props.triggerEvents)){
				this.triggerKendoWidgetEvents(nextProps.triggerEvents);
			}
		}
  	},
	shouldComponentUpdate: function(){
		//doing this so Kendo UI widget is only ever create once
		//then, when a component above this one renders, it will send new props
		//that will update the kendo ui widget
		return false;
	},
	componentWillUnmount: function() {
		$(ReactDOM.findDOMNode(this)).getKendoDropDownList().destroy();
	},
	render: function() {
		return this.props.children ? this.props.children : <div/>;
	}
});

export default KendoDropDownList
