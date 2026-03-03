import moment from 'moment'

const question = 'Masukkan tanggal (dd-mm-yyyy): ';

export const chooseMenu = async (rl) => {
  console.log('---- Date Formater ----')
  console.log('1. Using Moment')
  console.log('2. Using Built-In')
  console.log('0. Exit')

  try {
    let choice = await rl.question("Masukkan pilihan: ")
    switch (choice) {
      case '1':
        dateFormatter(rl)
        break;
      case '2':
        builtInDateFormatter(rl)
        break;
      case '0':
        console.log('Goodbye 👋')
        rl.close();
        break;
      default:
        throw 'Invalid input, please try again'
    }
  } catch (err) {
    console.log(err)
    chooseMenu(rl)
  }
}

// Minitask 1
const dateFormatter = async (rl) => {
  try {
    let answer = await rl.question(question);
    if (moment(answer, "DD-MM-YYYY", true).isValid()) {
      answer = moment(answer, 'DD-MM-YYYY').format('DD/MM/YYYY')
      console.log(`Tanggal berhasil diubah ${answer}`)
    } else {
      throw "Format tanggal salah!"
    }
  } catch (err) {
    console.log(err)
  }

  rl.close();
}

// Minitask 2
const builtInDateFormatter = async (rl) => {
  try {
    let answer = await rl.question(question);
    const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d$/;
    if (regex.test(answer)) {
      answer = answer.split('-').join('/')
      console.log(`Tanggal berhasil diubah ${answer}`)
    } else {
      throw "Format tanggal salah!"
    }
  } catch (err) {
    console.log(err)
  }

  rl.close();
}