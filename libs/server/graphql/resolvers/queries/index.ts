import { taskQueries } from './task-queries';
import { cliQueries } from './cli-queries';
import { syncQueries } from './sync-queries';
import { systemQueries } from './system-queries';

export const queries = {
   ...systemQueries,
   ...taskQueries,
   ...cliQueries,
   ...syncQueries,
};
