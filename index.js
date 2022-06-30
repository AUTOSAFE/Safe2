const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  console.log(`

██╗░░░░░░█████╗░███╗░░██╗░█████╗░
██║░░░░░██╔══██╗████╗░██║██╔══██╗
██║░░░░░███████║██╔██╗██║███████║
██║░░░░░██╔══██║██║╚████║██╔══██║
███████╗██║░░██║██║░╚███║██║░░██║
╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝
───────────▄██████████████▄
───────▄████░░░░░░░░█▀────█▄
──────██░░░░░░░░░░░█▀──────█▄
─────██░░░░░░░░░░░█▀────────█▄
────██░░░░░░░░░░░░█──────────██
───██░░░░░░░░░░░░░█──────██──██
──██░░░░░░░░░░░░░░█▄─────██──██
─████████████░░░░░░██────────██
██░░░░░░░░░░░██░░░░░█████████████
██░░░░░░░░░░░██░░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓█
██░░░░░░░░░░░██░░░█▓▓▓▓▓▓▓▓▓▓▓▓▓▓█
─▀███████████▒▒▒▒█▓▓▓███████████▀
────██▒▒▒▒▒▒▒▒▒▒▒▒█▓▓▓▓▓▓▓▓▓▓▓▓█
─────██▒▒▒▒▒▒▒▒▒▒▒▒██▓▓▓▓▓▓▓▓▓▓█
──────█████▒▒▒▒▒▒▒▒▒▒██████████
─────────▀███████████▀

${chalk.blue('Note : use this tool at 11.00 to 16.00 so as not to get banned')}
${chalk.red('Type : X TOOL BY Lana V5.2.0')}
By : ${chalk.red('@Lana')} - ${chalk.blue('X CHEAT DEVELOPER SINCE 1945')}
`);

  const auth = rs.question('[+] Enter Authentication Code! : ');
  console.log('');

  while (true) {


    const result = await GoStumble(auth);
    if (!result) {

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.bgBlack(`\r[ ${moment().format('HH:mm:ss')} ] ${chalk.white(`User : ${username}`)} | ${chalk.yellow(`Trophy : ${trophy}`)} | ${chalk.red(`Crown : ${crown}`)}`));
      await sleep(2700);

    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Akun mu di ban kontol`));
     break;
    }
  }


})();
