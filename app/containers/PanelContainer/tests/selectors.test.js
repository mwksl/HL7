import {
  selectPanelContainer,
  selectFilters,
} from '../selectors';
import { fromJS } from 'immutable';
import expect from 'expect';

describe('selectPanelContainer', () => {
  const panelSelector = selectPanelContainer();
  it('should select the panel state', () => {
    const panelState = fromJS({
      filter: {},
    });
    const mockedState = fromJS({
      panel: panelState,
    });
    expect(panelSelector(mockedState)).toEqual(panelState);
  });
});
