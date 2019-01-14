const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  process.stdout.write('You typed: ' + cmd + '\n');
  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.slice(0, 4) === 'cat ') {
    let fn = cmd.slice(4);
    cat(fn);
  }
});
