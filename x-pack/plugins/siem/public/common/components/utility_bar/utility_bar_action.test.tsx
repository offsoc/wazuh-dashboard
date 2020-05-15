/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { mount, shallow } from 'enzyme';
import React from 'react';

import { TestProviders } from '../../mock';
import { UtilityBarAction } from './index';

describe('UtilityBarAction', () => {
  test('it renders', () => {
    const wrapper = shallow(
      <TestProviders>
        <UtilityBarAction iconType="alert">{'Test action'}</UtilityBarAction>
      </TestProviders>
    );

    expect(wrapper.find('UtilityBarAction')).toMatchSnapshot();
  });

  test('it renders a popover', () => {
    const wrapper = mount(
      <TestProviders>
        <UtilityBarAction iconType="alert" popoverContent={() => <p>{'Test popover'}</p>}>
          {'Test action'}
        </UtilityBarAction>
      </TestProviders>
    );

    expect(
      wrapper
        .find('.euiPopover')
        .first()
        .exists()
    ).toBe(true);
  });
});