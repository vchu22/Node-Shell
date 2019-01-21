const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');
//Output a prompt
process.stdout.write('prompt > ');

const done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  process.stdout.write('You typed: ' + cmd + '\n');
  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd.slice(0, 4) === 'cat ') {
    let fn = cmd.slice(4);
    cat(fn, done);
  } else if (cmd.slice(0, 5) === 'curl ') {
    let url = cmd.slice(5);
    curl(url, done);
  } else {
    done('Command not found');
  }
});
