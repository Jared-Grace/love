import readline from "readline";
export async function function_run_prompt() {
    prompt=''
  await command_line_read(prompt);
}
async function command_line_read(prompt) {
    return await new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

