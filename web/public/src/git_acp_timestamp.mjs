import { git_acp } from "./git_acp.mjs";
import { date_now } from "./date_now.mjs";
import { execSync } from "child_process";
export async function git_acp_timestamp() {
  const message = date_now().toISOString();
  await git_acp(message);
}
