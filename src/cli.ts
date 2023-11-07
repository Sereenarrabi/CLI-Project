


import * as readline from 'readline';
import { Command } from './Interfaces/commands';
import { PalindromeCommand } from './Commands/Palindrome-command';
import { LowerCommand } from './Commands/lower-commands';
import { DigitsCommand } from './Commands/Digits-commands';
import { ArmstrongCommand } from './Commands/ArmStrong-command';
import { ExitCommand } from './Commands/Exit-commands';
import { NationalizeCommand } from './Commands/Nationalize-commands';

//func that check the command
// command = (A)---> is Palindrome - Check if the input is a palindrome
// command = (B)--> is Lower - Check if all characters in the input are lowercase
// command = (C)--> Digits - Check if all characters in the input are digits
// command = (D)--> Armstrong - Check if the input is an "Armstrong Number"
// command = (E)--> Nationalize - Check the nationality probability of a given first name
// command = (F)--> Exit - Exit successfully from the application
export function checkTheCommand() {
    displayAllCommands();
    read.question('Choose a command (A/B/C/D/E/F): ', (command) => {
        const index = parseInt(command) - 1;
        if (0 <= index && index <= commands.length - 1) {
            commands[index].execute();
        } else {
            console.log('Invalid command. Please try again.');
            checkTheCommand();
        }
    });
}

export const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const commands: Command[] = [new PalindromeCommand(), new LowerCommand(), new DigitsCommand(), new ArmstrongCommand(), new NationalizeCommand(), new ExitCommand()];


//func that display all available commands
function displayAllCommands() {
    console.log('Available Commands:');
    commands.forEach((command, index) => {
        console.log(`(${index + 1}) ${command.name} - ${command.description}`);
    });
}



console.log('Welcome , the CLI application is ready!');
checkTheCommand();