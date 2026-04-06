import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function command_line_generic(command, extra) {
  text_is_assert(command);
  const r3 = await import("child_process");
  let spawn = property_get(r3, "spawn");
  text_is_assert(command);
  const match = command.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
  let r5 = parseCommand(command);
  let args = property_get(r5, "args");
  let cmd = property_get(r5, "cmd");
  let result = new Promise(function lambda5(resolve, reject) {
    const child = spawn(command, {
      shell: true,
      env: {
        ...process.env,
        ...(extra?.env || {}),
      },
    });
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
      if (code !== 0) {
        reject(new Error(`Command exited with code ${code}\n${stderr}`));
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
    const parts = command.match(/(?:[^\s"]+|"[^"]*")+/g) || [];
    if (parts.length === 0) {
      throw new Error("Empty command string");
    }
    const cmd = parts.shift();
    function lambda6(arg) {
      let r2 = arg.replace(/^"(.*)"$/, "$1");
      return r2;
    }
    const args = parts.map(lambda6);
    let r4 = {
      cmd,
      args,
    };
    return r4;
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
  object_merge(options, extra);
  const stdout = await execAsync(command, options);
  return stdout;
}
