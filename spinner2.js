// setTimeout(() => {
//   process.stdout.write('\r|   ');  
// }, 100);
// setTimeout(() => {
//   process.stdout.write('\r/   ');  
// }, 300);
// setTimeout(() => {
//   process.stdout.write('\r-   ');  
// }, 500);
// setTimeout(() => {
//   process.stdout.write('\r\\   ');  
// }, 700);
// setTimeout(() => {
//   process.stdout.write('\r|   ');  
// }, 900);
// setTimeout(() => {
//   process.stdout.write('\r/   ');  
// }, 1100);
// setTimeout(() => {
//   process.stdout.write('\r-   ');  
// }, 1300);
// setTimeout(() => {
//   process.stdout.write('\r\\   ');  
// }, 1500);
// setTimeout(() => {
//   process.stdout.write('\r|   ');
//   process.stdout.write("\n");  
// }, 1700);
const animation = ['\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
const spinner = (array) => {
  for(let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write(array[i]);  
      if(i === array.length - 1) {
        process.stdout.write('\n')
      }
    }, 100 + i*200);
  }
};

spinner(animation);

