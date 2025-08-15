import { Command } from 'commander';
import { generateContent } from '@gemini/core';

export function initCli() {
    const program = new Command();

    program
        .name('gemini')
        .description('A CLI to interact with the Gemini API')
        .version('0.1.0');

    program
        .command('prompt <prompt_text>')
        .description('Send a prompt to the Gemini model')
        .action(async (prompt_text) => {
            const apiKey = process.env.GEMINI_API_KEY;
            if (!apiKey) {
                console.error('GEMINI_API_KEY environment variable not set.');
                process.exit(1);
            }
            try {
                const text = await generateContent(apiKey, prompt_text);
                console.log(text);
            } catch (error) {
                console.error('Error generating content:', error);
            }
        });

    program.parse(process.argv);
}
