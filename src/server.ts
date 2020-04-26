import {SpecifyFields, User} from './common';

function loadAllUsers(): User[] {
  return [
    {id: 111, username: 'aaa000', email: 'aaa@test.com'},
    {id: 222, username: 'bbb000', email: 'bbb@test.com'},
    {id: 333, username: 'ccc000', email: 'ccc@test.com'},
  ];
}

function keepSpecifiedFields<T extends object>(user: T, specifyUserFields: SpecifyFields<T>): Partial<T> {
  for (const field in user) {
    if (user.hasOwnProperty(field)) {
      if (!specifyUserFields[field]) {
        delete user[field]
      }
    }
  }
  return user;
}

export function searchUsers(keyword: string, specifyUserFields: SpecifyFields<User>): Partial<User>[] {
  const matchedUsers = loadAllUsers().filter(it => it.username.includes(keyword))
  return matchedUsers.map(it => keepSpecifiedFields(it, specifyUserFields))
}
