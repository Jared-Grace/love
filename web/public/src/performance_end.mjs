import { log } from "../../../love/public/src/log.mjs";
import { list_to_lookup } from "../../../love/public/src/list_to_lookup.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
export function performance_end(p) {
  performance_next(p, "end");
  let lookup = list_to_lookup(p, "category");
  log({
    lookup,
  });
  return;
}
