import { object_merge } from "./object_merge.mjs";
import { exec } from "child_process";
import { promisify } from "util";
const execAsync = promisify(exec);
export async function command_line(command) {
  let extra = {};
  const options = {
    encoding: "utf8",
  };
  object_merge(options, extra);
  const { stdout } = await execAsync(command, options);
  return stdout;
}
