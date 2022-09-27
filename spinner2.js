// const lines = ('\r|\r/\r-\r\\\r|\r/\r-\r\\\r|\n')

const lines = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|\n']

let delay = 0;

for (const line of lines) {
  
  setTimeout(() => {
    process.stdout.write(line)
  }, delay);
  delay += 150;
  
};