console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();

  process.stdout.write(`Your name is: ${name}\r`);
  // console.log(`Your name is: ${name}`);

  if (!process.stdin.isTTY) {
    // process.stdout.write('This important software is now closing\r\n');
    console.log('This important software is now closing');
  }
  process.exit(0);
});
