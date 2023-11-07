import { Command } from '../Interfaces/commands';
import { checkTheCommand, read } from '../cli';


//export of a class that implement from command interface
export class ArmstrongCommand implements Command {
    name = 'Armstrong';
    description = 'Check if the input is an "Armstrong Number"';

    execute(): void {
        read.question('input a number: ', (number) => {
            const num = parseInt(number);
            const numStr = num.toString();
            //number.digits of str
            const numDigits = numStr.length;
            let sum = 0;

            for (let i = 0; i < numDigits; i++) {
                sum += Math.pow(parseInt(numStr[i]), numDigits);
            }

            if (sum === num) {
                console.log(`\n${num} is an Armstrong Number.\n`);
                checkTheCommand();
            } else {
                console.log(`\n${num} is not an Armstrong Number.\n`);
                checkTheCommand();
            }
        });
    }
}
1