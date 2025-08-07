import { execSync } from "child_process";

export function command_line(command) {
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(output); // Optional: or return output
  } catch (error) {
    console.error("Command failed:", error.message);
    console.error("stderr:", error.stderr?.toString());
    throw error;
  }
}