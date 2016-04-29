import * as _ from 'lodash';

export function sortedByVotes <T> (task:T[]):T[] {
	return _.orderBy(task, ['votes'], ['desc']);
}
