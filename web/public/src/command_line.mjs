import { exec } from "child_process";
import { promisify } from "util";
const execAsync = promisify(exec);
export async function command_line(command) {
  const { stdout } = await execAsync(command, {
    encoding: "utf8",
  });
  return stdout;
}
