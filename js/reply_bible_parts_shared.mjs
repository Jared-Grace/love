import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
export function reply_bible_parts_shared(verses_parts) {
  "What more than one verse says the same way: choices of two or more words, and runs of two or more words. Each is returned as its words joined by spaces.";
  let choices_seen = new Map();
  let runs_seen = new Map();
  function seen_add(seen, key, verse_index) {
    let b = seen.has(key);
    if (not(b)) {
      seen.set(key, new Set());
    }
    seen.get(key).add(verse_index);
  }
  function verse_read(parts, verse_index) {
    for (let part of parts) {
      if (part.choice && greater_than(part.choice.length, 1)) {
        let v = part.choice.join(" ");
        seen_add(choices_seen, v, verse_index);
      }
      if (part.run) {
        for (let size = 2; less_than_equal(size, part.run.length); size++) {
          for (let at = 0; less_than_equal(at + size, part.run.length); at++) {
            let key = part.run.slice(at, at + size).join(" ");
            seen_add(runs_seen, key, verse_index);
          }
        }
      }
    }
  }
  verses_parts.forEach(verse_read);
  function keys_shared(seen) {
    let entries = [...seen.entries()];
    function shared_is(entry) {
      let is = greater_than(entry[1].size, 1);
      return is;
    }
    let kept = entries.filter(shared_is);
    function key_get(entry) {
      let key = entry[0];
      return key;
    }
    let keys = kept.map(key_get);
    return keys;
  }
  let shared = {
    choices: keys_shared(choices_seen),
    runs: keys_shared(runs_seen),
  };
  return shared;
}
