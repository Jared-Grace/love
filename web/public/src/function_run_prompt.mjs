import readline from "readline";
export async function function_run_prompt() {
  await new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Enter something: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}
