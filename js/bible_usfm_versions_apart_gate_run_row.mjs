import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function bible_usfm_versions_apart_gate_run_row(
  rows,
  allowed,
  slack,
  unread,
  risen,
) {
  arguments_assert(arguments, 5);
  for (let row of rows) {
    let version = property_get(row, "version");
    let apart = property_get(row, "apart");
    let allowance = property_get_or_null(allowed, version);
    let unwritten = null_is(allowance);
    let stands = greater_than(apart, 0);
    if (not(stands)) {
      let written = not(unwritten);
      if (written) {
        let allowance_apart = property_get(allowance, "apart");
        let spare = {
          version,
          allowed: allowance_apart,
          apart,
        };
        list_add(slack, spare);
      }
      continue;
    }
    let first = property_get(row, "first");
    if (unwritten) {
      let never_read = {
        version,
        apart,
        first,
      };
      list_add(unread, never_read);
      continue;
    }
    let ceiling = property_get(allowance, "apart");
    let over = greater_than(apart, ceiling);
    if (over) {
      let why = property_get(allowance, "why");
      let moved = {
        version,
        apart,
        ceiling,
        first,
        why,
      };
      list_add(risen, moved);
      continue;
    }
    let under = greater_than(ceiling, apart);
    if (under) {
      let spare = {
        version,
        allowed: ceiling,
        apart,
      };
      list_add(slack, spare);
    }
  }
}
