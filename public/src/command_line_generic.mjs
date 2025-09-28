import { log } from "./log.mjs";
import { object_merge } from "./object_merge.mjs";
export async function command_line_generic(command, extra) {
  const { exec } = await import("child_process");
  const { promisify } = await import("util");
  const execAsync = promisify(exec);
  const options = {
    encoding: "utf8",
  };
  object_merge(options, extra);
  log(command);
  const stdout = await execAsync(command, options);
  return stdout;
}
