import readline from "readline";
export async function command_line_read(prompt) {
  let answer = await new Promise(function lambda2(resolve) {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    function lambda(answer_typed) {
      rl.close();
      resolve(answer_typed);
    }
    rl.question(prompt, lambda);
  });
  return answer;
}
