import { exec } from "child_process";
import { promisify } from "util";
const execAsync = promisify(exec);
export async function command_line(command) {
  const options = {
    encoding: "utf8",
  };
  const { stdout } = await execAsync(command, options);
  return stdout;
}
