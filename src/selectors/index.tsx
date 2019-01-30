import { createSelector } from 'reselect'

const getBar = (state) => state.foo.bar

export const getFolderState = createSelector(
	[getBar],
	(bar) => bar
)