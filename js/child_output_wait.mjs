import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function child_output_wait(child, program, words) {
  "Reads everything an already-started program printed and answers what it said on the ordinary channel.";
  "The program has already been started by the time this is asked, so nothing here chooses what runs. That is what makes it shareable: a function that picks the program from what it is handed is a launcher and belongs on the list of functions whose arguments name what to run, while one handed a program already running cannot name anything at all.";
  "The name and the words are taken only to word the complaint, so the reader of a failure sees the command as it was actually run rather than having to reconstruct it.";
  "A command that failed throws, and the error carries what was printed on both channels, because a run that quietly did nothing looks exactly like one that worked.";
  let result = await new Promise(function lambda(resolve, reject) {
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
    let listed = words.join(" ");
    let message = text_combine_multiple([
      program,
      " ",
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
