import { memory_todo_prefix } from "./memory_todo_prefix.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { list_includes } from "./list_includes.mjs";
import { memory_type_prefixes } from "./memory_type_prefixes.mjs";
import { text_combine } from "./text_combine.mjs";
import { not } from "./not.mjs";
export function memory_link_verdict(link, stems, typo_links) {
  "What is wrong with one unresolved double-bracket name, or nothing when it is innocent. Given the notes that exist and the links already reported as misspelled prefixes elsewhere.";
  "Kept apart from the sweep that finds these, because the sweep cannot be wrong - it is a set difference - while this is a judgment, and a judgment that only ever runs over links that are all innocent today would answer the same whether it worked or not.";
  "A marker says its writer meant a note they have not written. Left on after the note arrives it stops meaning anything, so that is the second fault, and it is the one that keeps the marker from silting up.";
  let todo_prefix = memory_todo_prefix();
  let marked = text_starts_with(link, todo_prefix);
  if (marked) {
    let promised = text_prefix_without(link, todo_prefix);
    let written = list_includes(stems, promised);
    if (written) {
      let stale = {
        link,
        kind: "stale",
        suggestion: promised,
      };
      return stale;
    }
    return null;
  }
  let prefixes = memory_type_prefixes();
  let named_like_note = false;
  for (let prefix of prefixes) {
    let has_prefix = text_starts_with(link, prefix);
    if (has_prefix) {
      named_like_note = true;
    }
  }
  if (not(named_like_note)) {
    ("a name that is not a kind followed by the rest is a function name or a piece of quoted syntax, and no note was ever meant by it");
    return null;
  }
  let reported_as_typo = list_includes(typo_links, link);
  if (reported_as_typo) {
    ("the check next door already names this one and offers the note it was probably meant to be, so saying it again here would report one slip twice");
    return null;
  }
  let marked_link = text_combine(todo_prefix, link);
  let unwritten = {
    link,
    kind: "unwritten",
    suggestion: marked_link,
  };
  return unwritten;
}
