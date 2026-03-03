import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { chooseMenu as menu } from './date-conversion.js'

const rl = readline.createInterface({ input, output });
// formater(rl)
// formaterBuiltIn(rl)
menu(rl)