import readline from "readline";
export async function command_line_read(prompt) {
  let v = await new Promise(function lambda2(resolve) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    function lambda(answer) {
      rl.close();
      resolve(answer);
    }
    rl.question(prompt, lambda);
  });
  return v;
}
