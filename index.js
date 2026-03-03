import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { chooseMenu as menu } from './date-conversion.js'

const rl = readline.createInterface({ input, output });
// formater(rl)
// formaterBuiltIn(rl)
menu(rl)

const validTypeOf = 'Im valid string'
typeof validTypeOf == 'string'
const unused = 'Please use me 😭'

function unusedExpression(params) {
  return 'Im unused expression'
}

async function requireAwait(params) {
  return `${params}`
}
console.log(requireAwait('params'))

for (let i = 0; i<10; i--){
  console.log(i)
}

async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await doAsyncWork(thing));
  }
  return results;
}
