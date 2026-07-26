import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function git_folder_run(folder, command_words) {
  "Runs git in one folder, given the command as a list of words rather than as a line of text, and answers what it printed.";
  "The list is the whole point. A line of text has to be split back into words before it can be run, and that split is what lets a value carried inside the line stop being one word: a quote in a commit message ends the quoted run early, and everything after it arrives as further arguments to git. Handing the words over already separated means nothing a word contains can make it into two.";
  "The program is spelled here and is never a parameter, so this cannot be asked to run anything but git. That is what keeps it off the list of functions whose arguments name what to run - and if a later change makes the program an argument, it belongs on that list.";
  "A command that failed throws, and the error carries what git said on both channels, because a commit that quietly did nothing looks exactly like one that worked.";
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let words = ["-C", folder].concat(command_words);
  let result = await new Promise(function lambda(resolve, reject) {
    let child = spawn("git", words, {
      shell: false,
    });
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
    function on_close(closed) {
      resolve({
        code: closed,
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
    let v = words.join(" ");
    let message = text_combine_multiple([
      "git ",
      v,
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
