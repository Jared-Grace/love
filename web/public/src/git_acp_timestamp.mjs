import { execSync } from "child_process";

export function git_acp_timestamp() {
  // Get current timestamp
  const message = new Date().toISOString(); // e.g., 2025-08-06T12:34:56.789Z
  git_acp(message);
}
