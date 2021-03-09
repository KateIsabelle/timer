const args = process.argv.slice(2);

const timer = function(seconds) {
  for (let num of seconds) {
    num = parseInt(num);
    if (typeof num === "number" && num > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num*1000);
    }
  }
}
timer(args);
