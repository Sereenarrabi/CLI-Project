import { Command } from '../Interfaces/commands';
import { checkTheCommand, read } from '../cli';

export class LowerCommand implements Command {
    name = 'Lower';
    description = 'Check if all characters in the input are lowercase';

    execute(): void {
        read.question('Enter a string: ', (input) => {
            const isLowercase = /^[a-z]+$/.test(input);
            if (isLowercase) {
                console.log('\nAll characters are lowercase.\n');
                checkTheCommand();
            } else {
                console.log('\nNot all characters are lowercase.\n');
                checkTheCommand();
            }
        });
    }
}