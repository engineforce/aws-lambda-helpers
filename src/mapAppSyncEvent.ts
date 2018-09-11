import iassign from 'immutable-assign';
import cloneDeep from 'clone-deep';
import { IEvent } from './IEvent';
import { IEventHeader } from './IEventHeader';

export function mapAppSyncEvent(event: IEvent) {
  if (typeof event != 'object') {
    event = { header: <any>{}, data: {} };
  } else {
    event = iassign(event, (e) => {
      if (event.header == undefined) {
        e.header = <any>{};
      }
      if (event.data == undefined) {
        e.data = {};
      }

      return e;
    });
  }

  return iassign(
    event,
    (e) => e.header,
    (header: IEventHeader & { context: any }) => {
      header = cloneDeep(header);

      if (header.context) {
        if (header.context.identity) {
          header.userId = header.context.identity.username;
          header.userGroups = header.context.identity.groups;

          if (header.context.identity.claims) {
            header.userRoles = header.context.identity.claims['cognito:roles'];
            header.userEmail = header.context.identity.claims.email;
          }
        }

        // GraphQL parent node data
        header.source = header.context.source;
      }

      // Only expose properties you use like above.
      delete header.context;
      return header;
    }
  );
}
