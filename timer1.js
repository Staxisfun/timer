const args = process.argv;
let consoleArguments = args.slice(2);



// Creates an alarm clock for each console argument where the alarm delay === to the argument


if (consoleArguments.length < 1) {
   
  console.log("No timers created")
}

let delay;

for (let argument of consoleArguments) {

   if ((argument < 0) || (isNaN(argument))) {
    continue
  }

delay = (argument * 1000)

setTimeout(() => {
  process.stdout.write('\x07');
}, delay)

}
