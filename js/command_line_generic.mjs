import { file_temp_json_open } from "./file_temp_json_open.mjs";
import { not } from "./not.mjs";
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
  let r5 = parseCommand(command);
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
      if (code_ignore !== true && code !== 0) {
        reject(
          new Error(
            text_combine_multiple([
              "Command exited with code ",
              code,
              "\n\nSTDOUT:\n",
              printed,
              "\n\nSTDERR:\n",
              stderr,
            ]),
          ),
        );
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
  function parseCommand(command_text) {
    if (typeof command_text !== "string") {
      throw new TypeError("command must be a string");
    }
    if (/[|&;`$()]/.test(command_text)) {
      throw new Error(
        "Shell operators are not allowed in command_line_generic",
      );
    }
    let args_parsed = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < command_text.length; i++) {
      let c2 = command_text[i];
      if (c2 === '"') {
        inQuotes = not(inQuotes);
        continue;
      }
      if (c2 === " " && not(inQuotes)) {
        if (current.length) {
          args_parsed.push(current);
          current = "";
        }
        continue;
      }
      current += c2;
    }
    if (current.length) {
      args_parsed.push(current);
    }
    let r2 = {
      cmd: args_parsed.shift(),
      args: args_parsed,
    };
    return r2;
  }
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
