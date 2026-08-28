import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { add } from "./add.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function bible_usfm_versions_book_verses_apart_compared(
  references,
  carried,
  words_by_version,
  book_code,
) {
  arguments_assert(arguments, 4);
  let apart = [];
  let held_by_version = {};
  let measured = 0;
  for (let reference of references) {
    let holders = [];
    for (let read of carried) {
      let version = property_get(read, "version");
      let words_by_reference = property_get(words_by_version, version);
      let content = property_get_or_null(words_by_reference, reference);
      let b = null_is(content);
      let held = not(b);
      if (held) {
        let holder = {
          version,
          content,
        };
        list_add(holders, holder);
      }
    }
    let a = list_size(holders);
    let enough = greater_than(a, 2);
    if (not(enough)) {
      continue;
    }
    measured = add(measured, 1);
    for (let holder of holders) {
      let version = property_get(holder, "version");
      let content = property_get(holder, "content");
      let held_before = property_get_or_null(held_by_version, version);
      let held_first = null_is(held_before);
      let held_now = 1;
      if (not(held_first)) {
        held_now = add(held_before, 1);
      }
      held_by_version[version] = held_now;
      let shares = false;
      for (let against of holders) {
        let itself = property_equals(against, "version", version);
        if (itself) {
          continue;
        }
        let other_content = property_get(against, "content");
        let common = list_intersect(content, other_content);
        let b2 = list_empty_is(common);
        let any = not(b2);
        if (any) {
          shares = true;
          break;
        }
      }
      if (shares) {
        continue;
      }
      let alone = {
        version,
        book_code,
        reference,
        holders: list_size(holders),
      };
      list_add(apart, alone);
    }
  }
  let r = {
    book_code,
    versions: list_size(carried),
    verses: measured,
    held: held_by_version,
    apart,
  };
  return r;
}
