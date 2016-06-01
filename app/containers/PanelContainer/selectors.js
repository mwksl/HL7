import { createSelector } from 'reselect';

/**
 * Direct selector to the panelContainer state domain
 */
const selectPanelContainerDomain = () => state => state.get('panelContainer');

/**
 * Other specific selectors
 */

/**
 * Default selector used by PanelContainer
 */

const selectPanelContainer = () => createSelector(
  selectPanelContainerDomain(),
  (substate) => substate.toJS()
);

const selectFilters = () => createSelector(
  selectPanelContainer(),
  (panelState) => panelState.get('filter')
);

export default selectPanelContainer;
export {
  selectPanelContainerDomain,
  selectFilters,
};
