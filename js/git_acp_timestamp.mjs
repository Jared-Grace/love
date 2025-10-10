import { date_now_iso } from "../../../love/public/src/date_now_iso.mjs";
import { git_acp } from "../../../love/public/src/git_acp.mjs";
export async function git_acp_timestamp() {
  const message = date_now_iso();
  await git_acp(message);
}
