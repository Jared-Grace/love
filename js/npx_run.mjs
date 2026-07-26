import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function npx_run(words, extra) {
  "Runs npx with the command given as a list of words rather than as a line of text, and answers what it printed.";
  "The list is the whole point. A line of text has to be split back into words before it can be run, and that split is what lets a value carried inside the line stop being one word. Handing the words over already separated means nothing a word contains can make it into two.";
  "The program is spelled here and is never a parameter, so this cannot be asked to run anything but npx. That is what keeps it off the list of functions whose arguments name what to run - and if a later change makes the program an argument, it belongs on that list.";
  "This repeats the spawning that git has its own copy of, and the repeat is deliberate: sharing one spawner would mean handing it the program as an argument, which is exactly the general launcher both copies exist to avoid. The duplication is what buys each caller the right to be granted by name.";
  "A command that failed throws, and the error carries what was printed on both channels, because a build that quietly did nothing looks exactly like one that worked.";
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let options = {
    ...extra,
    shell: false,
  };
  let result = await new Promise(function lambda(resolve, reject) {
    let child = spawn("npx", words, options);
    let stdout = "";
    let stderr = "";
    function on_stdout(data) {
      stdout += data.toString();
    }
    child.stdout.on("data", on_stdout);
    function on_stderr(data) {
      stderr += data.toString();
    }
    child.stderr.on("data", on_stderr);
    function on_error(err) {
      reject(err);
    }
    child.on("error", on_error);
    function on_close(exit_code) {
      resolve({
        code: exit_code,
        stdout,
        stderr,
      });
    }
    child.on("close", on_close);
  });
  let code = property_get(result, "code");
  let out = property_get(result, "stdout");
  if (not_equal(code, 0)) {
    let said = property_get(result, "stderr");
    let listed = words.join(" ");
    let message = text_combine_multiple([
      "npx ",
      listed,
      " exited with code ",
      code,
      "\n\nSTDOUT:\n",
      out,
      "\n\nSTDERR:\n",
      said,
    ]);
    throw new Error(message);
  }
  return out;
}
