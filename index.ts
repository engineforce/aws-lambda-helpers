import aws from 'aws-sdk';

export * from './src/mapAppSyncEvent';
export * from './src/handleLambdaFunction';

//@ts-ignore
export { IEvent } from './src/IEvent';

//@ts-ignore
export { IEventHeader } from './src/IEventHeader';

import { loadFindFunctions } from './src/findFunctions';

const lambda = new aws.Lambda();

export const findFunctions = loadFindFunctions({ lambda });
