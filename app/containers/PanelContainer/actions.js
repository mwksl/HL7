/*
 *
 * PanelContainer actions
 *
 */

import {
  APPLY_FILTERS,
} from './constants';

/**
 * Dispatched when the panels are initially loaded to apply user-applied filters
 *
 * @param  {array} filters The filter data(types)
 *
 */
export function applyFilters(filters) {
  return {
    type: APPLY_FILTERS,
    filters,
  };
}
