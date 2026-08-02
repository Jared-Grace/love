import { json_to } from "./json_to.mjs";
import { g_verify_loop_check } from "./g_verify_loop_check.mjs";
("The single line the sermon-loop Monitor polls: compact one-line JSON of the");
('multi-book loop state, so a grep for "action":"write: / "action":"done" fires');
("the loop. Run via: node scripts/rl.mjs g_verify_loop_check_line");
export async function g_verify_loop_check_line() {
  return json_to(await g_verify_loop_check());
}
