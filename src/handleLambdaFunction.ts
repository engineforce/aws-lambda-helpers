import { IEvent } from './IEvent';
import { deepFreeze } from 'immutable-assign';
import isFunction from 'lodash/fp/isFunction';

export function handleLambdaFunction(
  handler: (input) => Promise<any>,
  eventMapper?: (event) => any
) {
  return function handle(
    event: IEvent,
    context,
    callback: (error, data) => void
  ) {
    console.log(
      'Inputs:',
      JSON.stringify(event, undefined, 2),
      JSON.stringify(context, undefined, 2)
    );

    const unhandledRejection = async (ex) => {
      console.warn('unhandledRejection: ' + ex, ex);
      await fail(ex, callback, unhandledRejection, uncaughtException);
    };

    process.on('unhandledRejection', unhandledRejection);

    const uncaughtException = async (ex) => {
      console.warn('uncaughtException: ' + ex, ex);
      await fail(ex, callback, unhandledRejection, uncaughtException);
    };

    process.on('uncaughtException', uncaughtException);

    let promise = Promise.resolve();

    promise = promise.then(() => {
      event = deepFreeze(event);
      if (eventMapper && isFunction(eventMapper)) {
        event = eventMapper(event);
      }

      console.log('Mapped Inputs', JSON.stringify(event, undefined, 2));

      return handler(event);
    });

    promise.then(
      async (data) => {
        await pass(data, callback, unhandledRejection, uncaughtException);
      },
      async (ex) => {
        await fail(ex, callback, unhandledRejection, uncaughtException);
      }
    );
  };
}

async function pass(data, callback, unhandledRejection, uncaughtException) {
  cleanup(unhandledRejection, uncaughtException);
  console.log('Pass:', data);
  callback(undefined, data);
}

async function fail(ex, callback, unhandledRejection, uncaughtException) {
  cleanup(unhandledRejection, uncaughtException);
  console.error('Error:', ex);
  callback(ex, 'Error');
}

function cleanup(unhandledRejection, uncaughtException) {
  if (unhandledRejection) {
    process.removeListener('unhandledRejection', unhandledRejection);
  }

  if (uncaughtException) {
    process.removeListener('uncaughtException', uncaughtException);
  }
}
