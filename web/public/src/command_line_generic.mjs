import { not } from "../../../love/public/src/not.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { property_delete_if_exists_fn } from "../../../love/public/src/property_delete_if_exists_fn.mjs";
import { command_line_generic_code_ignore } from "../../../love/public/src/command_line_generic_code_ignore.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
export async function command_line_generic(command, extra) {
  arguments_assert(arguments, 2);
  text_is_assert(command);
  const r3 = await import("child_process");
  let ci = property_delete_if_exists_fn(
    extra,
    command_line_generic_code_ignore,
  );
  let code_ignore = property_get(ci, "value");
  let spawn = property_get(r3, "spawn");
  const match = command.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
  let r5 = parseCommand(command);
  let args = property_get(r5, "args");
  let cmd = property_get(r5, "cmd");
  let result = new Promise(function lambda5(resolve, reject) {
    const options = {
      ...extra,
      shell: false,
    };
    log(command_line_generic.name, {
      cmd,
      args,
    });
    const child = spawn(cmd, args, options);
    let stdout = "";
    let stderr = "";
    function lambda(data) {
      stdout += data.toString();
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
    function lambda4(code) {
      if (code_ignore !== true && code !== 0) {
        reject(
          new Error(
            `Command exited with code ${code}\n\nSTDOUT:\n${stdout}\n\nSTDERR:\n${stderr}`,
          ),
        );
      } else {
        resolve({
          stdout,
        });
      }
    }
    child.on("close", lambda4);
  });
  return result;
  function parseCommand(command) {
    if (typeof command !== "string") {
      throw new TypeError("command must be a string");
    }
    if (/[|&;`$()]/.test(command)) {
      throw new Error(
        "Shell operators are not allowed in command_line_generic",
      );
    }
    const parts = command.trim().split(/\s+/);
    if (not(parts.length)) {
      throw new Error("Empty command");
    }
    const cmd = parts[0];
    const args = parts.slice(1);
    let r2 = {
      cmd,
      args,
    };
    return r2;
  }
  return;
  const c = await import("child_process");
  let exec = property_get(c, "exec");
  const u = await import("util");
  let promisify = property_get(u, "promisify");
  const execAsync = promisify(exec);
  const options = {
    encoding: "utf8",
  };
  object_merge_set(options, extra);
  const stdout = await execAsync(command, options);
  return stdout;
}
