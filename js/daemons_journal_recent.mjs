import { daemon_journal_recent } from "./daemon_journal_recent.mjs";
import { daemons_names } from "./daemons_names.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_set } from "./property_set.mjs";
export async function daemons_journal_recent() {
  "what every daemon has said lately, filed under the daemon that said it";
  "the same list the daemons are created from, so a daemon can never be running unread; and no argument, so nothing a caller writes can reach the journal command underneath — which is what lets this one be approved once and asked freely, where the single-daemon question cannot be";
  let names = daemons_names();
  let said = {};
  async function each_name(f_name) {
    let text = await daemon_journal_recent(f_name);
    property_set(said, f_name, text);
  }
  await list_map_async(names, each_name);
  return said;
}
