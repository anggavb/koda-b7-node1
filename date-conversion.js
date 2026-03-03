import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import moment from 'moment'

// Minitask 1
export const dateFormater = async () => {
  const rl = readline.createInterface({ input, output });
  let answer = await rl.question('Masukkan tanggal (dd-mm-yyyy): ');
  if (moment(answer, "DD-MM-YYYY", true).isValid()) {
    answer = moment(answer, 'D-MM-YYYY').format('DD/MM/YYYY')
    console.log(`Tanggal berhasil diubah ${answer}`)
  } else {
    console.log(`Format tanggal salah!`)
  }

  rl.close();
}

// Minitask 2
export const dateFormaterBuiltIn = async () => {
  const rl = readline.createInterface({ input, output });
  let answer = await rl.question('Masukkan tanggal (dd-mm-yyyy): ');
  
  const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d$/;
  if (regex.test(answer)) {
    answer = answer.split('-').join('/')
    console.log(`Tanggal berhasil diubah ${answer}`)
  } else {
    console.log(`Format tanggal salah!`)
  }

  rl.close();
}