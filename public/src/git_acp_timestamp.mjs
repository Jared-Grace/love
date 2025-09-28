import { date_now_iso } from "./date_now_iso.mjs";
import { git_acp } from "./git_acp.mjs";
export async function git_acp_timestamp() {
  const message = date_now_iso();
  await git_acp(message);
}
