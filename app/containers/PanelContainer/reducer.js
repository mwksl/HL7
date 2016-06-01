/*
 *
 * PanelContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  APPLY_FILTERS,
} from './constants';

const initialState = fromJS({
  filter: null,
});

function panelContainerReducer(state = initialState, action) {
  switch (action.type) {
    case APPLY_FILTERS:
      return state
        .set('filter', action.filters);
    default:
      return state;
  }
}

export default panelContainerReducer;
