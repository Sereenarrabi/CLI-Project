import { Command } from '../Interfaces/commands';
import { read } from '../cli';

export class ExitCommand implements Command {
    name = 'Exit';
    description = 'Exit the application';

    execute(): void {
        console.log('\nExiting the application...');
        read.close();
    }
}