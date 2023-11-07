import { Command } from '../Interfaces/commands';
import { checkTheCommand, read } from '../cli';

export class DigitsCommand implements Command {
    name = 'Digits';
    description = 'Check if all characters in the input are digits';

    execute(): void {
        read.question('Enter a string: ', (str) => {
            const isDigits = /^\d+/.test(str);
            //if the character is digit
            if (isDigits) {
                console.log('\nSuccessful test , all the chars are digits.\n');
                checkTheCommand();
            } else {
                console.log('\nFail test , Not all characters are digits.\n');
                checkTheCommand();
            }
        });
    }
}