export interface IEventHeader {
  userId: string;

  // DO NOT rely on the userName, because it is currently equal to
  // the userEmail that can be changed by user.
  // Therefore we decide to hide it to prevent developers using
  // it as unique identifier.
  // userName?: string;

  userGroups?: string[];
  userRoles?: string[];
  userEmail?: string;
  source?: any;
}
