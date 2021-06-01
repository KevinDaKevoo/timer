for (let time of process.argv.splice(2)) {
  if (time < 0) {
  } else if (typeof (Number.parseInt(time)) !== 'number') {
  } else {
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, (time * 1000));
  }
}
