import { execSync } from "child_process";
export function command_line(command) {
  const output = execSync(command, {
    encoding: "utf8",
    stdio: "pipe",
  });
  return output;
}
