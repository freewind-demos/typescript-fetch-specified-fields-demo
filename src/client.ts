import {searchUsers} from './server';

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

