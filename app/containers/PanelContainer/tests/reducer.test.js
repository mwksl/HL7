import expect from 'expect';
import panelContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('panelContainerReducer', () => {
  it('returns the initial state', () => {
    expect(panelContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
