import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Component from '../src/index.js';

describe("A suite", function() {
	it("minimal test for component", function() {
  	const wrapper = shallow(<Component />);
      expect(wrapper.unrendered.type.displayName).to.equal('KendoColorPicker');
    });
});
