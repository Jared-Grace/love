import { arguments_assert } from "./arguments_assert.mjs";
import { probes_at_once } from "./probes_at_once.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function probes_offenders(items, offence_or_null) {
  arguments_assert(arguments, 2);
  ("Put every item to a probe that answers an offence or null, several at a time,");
  ("and hand back only the offences.");
  ("A probe here starts a whole program and then waits for it to answer, so one");
  ("item after another was the slowest single question in the repo-wide gate while");
  ("this machine sat idle through nearly all of it. No item's answer depends on any");
  ("other's, and the answers are gathered in the order the items were written, so");
  ("an audit reads exactly as its list did.");
  ("The two permission audits had each written this ending out, along with the");
  ("paragraph explaining it. How many at once is one number for all of them, and a");
  ("second audit learning the concurrency by being copied from the first is how one");
  ("of them ends up still asking one at a time.");
  let limit = probes_at_once();
  let judged = await list_map_limited_async(items, offence_or_null, limit);
  let offenders = list_filter_null_not_is(judged);
  return offenders;
}
