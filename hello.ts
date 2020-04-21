type User = {
  id: number,
  username: string,
  email: string,
}

type SpecifyFields<T> = {
  [key in keyof T]?: true
}

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

function searchUsers(keyword: string, specifyUserFields: SpecifyFields<User>): Partial<User>[] {
  const matchedUsers = loadAllUsers().filter(it => it.username.includes(keyword))
  return matchedUsers.map(it => keepSpecifiedFields(it, specifyUserFields))
}

const users1 = searchUsers('aaa', {
  id: true,
  username: true
})
console.log('### users1', users1);

const users2 = searchUsers('000', {
  id: true,
  username: true,
  email: true
})
console.log('### users2', users2);

