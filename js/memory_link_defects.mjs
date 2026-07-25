import { memory_links_unresolved } from "./memory_links_unresolved.mjs";
import { memory_note_stems } from "./memory_note_stems.mjs";
import { memory_type_prefixes } from "./memory_type_prefixes.mjs";
import { memory_todo_prefix } from "./memory_todo_prefix.mjs";
import { memory_dangling_links } from "./memory_dangling_links.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function memory_link_defects() {
  "Every double-bracket link in memory that is wrong rather than merely unwritten. Two faults: a link naming a note that does not exist and was not marked as one to write, and a marker still sitting on a link whose note has since been written. Read-only.";
  "The marker is what makes this gateable at all. An unresolved link is allowed on purpose by the instructions, and nothing in its shape says whether it was meant, so the writer says so - and once they can, a link that says nothing is a slip.";
  "Only a link named like a note is judged. A peer writing about code puts a function or field name in brackets, and a note about how links are written quotes a bare example; neither is named for one of the kinds, and neither will ever resolve.";
  "The prefix-typo half is judged next door and left out here, so one wrong link is reported once, in the wording that carries a suggested fix.";
  let unresolved = await memory_links_unresolved();
  let stems = await memory_note_stems();
  let prefixes = memory_type_prefixes();
  let todo_prefix = memory_todo_prefix();
  let typo = await memory_dangling_links();
  let defects = [];
  for (let link of unresolved) {
    let marked = text_starts_with(link, todo_prefix);
    if (marked) {
      let promised = text_prefix_without(link, todo_prefix);
      let written = list_includes(stems, promised);
      if (written) {
        list_add(defects, {
          link,
          kind: "stale",
          suggestion: promised,
        });
      }
      continue;
    }
    let named_like_note = false;
    for (let prefix of prefixes) {
      let has_prefix = text_starts_with(link, prefix);
      if (has_prefix) {
        named_like_note = true;
      }
    }
    if (not(named_like_note)) {
      continue;
    }
    function is_this_link(result) {
      let other = property_get(result, "link");
      let b = equal(other, link);
      return b;
    }
    let same = list_filter(typo, is_this_link);
    let b2 = list_empty_is(same);
    let reported_as_typo = not(b2);
    if (reported_as_typo) {
      continue;
    }
    let marked_link = text_combine(todo_prefix, link);
    list_add(defects, {
      link,
      kind: "unwritten",
      suggestion: marked_link,
    });
  }
  return defects;
}
