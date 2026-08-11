import { command_line_generic_parse_command } from "./command_line_generic_parse_command.mjs";
import { not_equal } from "./not_equal.mjs";
import { file_temp_json_open } from "./file_temp_json_open.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_delete_if_exists_fn } from "./property_delete_if_exists_fn.mjs";
import { command_line_generic_code_ignore } from "./command_line_generic_code_ignore.mjs";
import { property_get } from "./property_get.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function command_line_generic(command, extra) {
  arguments_assert(arguments, 2);
  text_is_assert_json(command, {
    hint: "command should be text so it can be run — did an empty or missing value arrive?",
    command,
  });
  let r3 = await import("child_process");
  let ci = property_delete_if_exists_fn(
    extra,
    command_line_generic_code_ignore,
  );
  let code_ignore = property_get(ci, "value");
  let spawn = property_get(r3, "spawn");
  let match = command.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
  let r5 = command_line_generic_parse_command(command, TypeError, Error);
  let args = property_get(r5, "args");
  let cmd = property_get(r5, "cmd");
  let result = new Promise(function lambda5(resolve, reject) {
    let spawn_options = {
      ...extra,
      shell: false,
    };
    let child = spawn(cmd, args, spawn_options);
    let printed = "";
    let stderr = "";
    function lambda(data) {
      printed += data.toString();
    }
    child.stdout.on("data", lambda);
    function lambda2(data) {
      stderr += data.toString();
    }
    child.stderr.on("data", lambda2);
    function lambda3(err) {
      let r = reject(err);
      return r;
    }
    child.on("error", lambda3);
    async function lambda4(code) {
      if (not_equal(code_ignore, true) && not_equal(code, 0)) {
        let combined = text_combine_multiple([
          "Command exited with code ",
          code,
          "\n\nSTDOUT:\n",
          printed,
          "\n\nSTDERR:\n",
          stderr,
        ]);
        reject(new Error(combined));
        if (false) {
          await file_temp_json_open({
            code,
            stdout: printed,
            stderr,
          });
        }
      } else {
        resolve({
          stdout: printed,
        });
      }
    }
    child.on("close", lambda4);
  });
  return result;
  return;
  let c = await import("child_process");
  let exec = property_get(c, "exec");
  let u = await import("util");
  let promisify = property_get(u, "promisify");
  let execAsync = promisify(exec);
  let options = {
    encoding: "utf8",
  };
  object_merge_set(options, extra);
  let stdout = await execAsync(command, options);
  return stdout;
}
