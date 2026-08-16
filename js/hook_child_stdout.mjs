import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { property_get } from "./property_get.mjs";
export async function hook_child_stdout(child, payload) {
  "Hands one payload to a hook already running and reads back everything it printed.";
  "The talking is the same for every hook; only the reading of the answer differs, because the shape a hook prints its verdict in is the hook's own business. A permission hook wraps its decision in hookSpecificOutput and a stop hook prints a bare decision, so a helper that parsed one of those could only ever serve one of them.";
  "It receives the started child rather than the words that start it, and that is the point rather than an accident of the split. A helper handed a command to run would be a way to run any command, which is the one shape this repo keeps off the seam Claude calls; handed a child, it can only ever talk to a hook somebody else chose.";
  arguments_assert(arguments, 2);
  let written = json_to(payload);
  let result = await new Promise(function lambda(resolve, reject) {
    let printed = "";
    function on_stdout(data) {
      printed += data.toString();
    }
    child.stdout.on("data", on_stdout);
    function on_error(err) {
      reject(err);
    }
    child.on("error", on_error);
    function on_close(code) {
      resolve({
        code,
        stdout: printed,
      });
    }
    child.on("close", on_close);
    child.stdin.write(written);
    child.stdin.end();
  });
  let stdout = property_get(result, "stdout");
  return stdout;
}
