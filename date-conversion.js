import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import moment from 'moment'

export const dateFormater = async () => {
  let res;
  const rl = readline.createInterface({ input, output });
  let answer = await rl.question('Masukkan tanggal (dd-mm-yyyy): ');
  answer = moment(answer, 'D-MM-YYYY').format('D/MM/YYYY')
  console.log(`Tanggal berhasil diubah ${answer}`)

  rl.close();
}