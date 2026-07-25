import { text_empty } from "./text_empty.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes } from "./text_includes.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
export function permission_rule_path_probe(rule) {
  "a concrete file path a file-tool allow rule claims to grant, for asking the real hook whether the rule can ever apply, or empty text when the rule names no path a probe can build";
  "the rule holds a glob and a hook resolves a real path, so a trailing star segment becomes a leaf inside the folder it names; a star anywhere else is left unprobed, because a path with a star in it resolves nowhere and the hook would abstain for a reason that has nothing to do with the rule";
  let opening = "(";
  let closing = ")";
  let at = rule.indexOf(opening);
  let b = less_than(at, 0);
  if (b) {
    let v = text_empty();
    return v;
  }
  let b2 = text_ends_with(rule, closing);
  if (not(b2)) {
    let v2 = text_empty();
    return v2;
  }
  let difference = subtract(rule.length, closing.length);
  let after_opening = at + 1;
  let inner = rule.slice(after_opening, difference);
  let leaf = "probe_leaf.md";
  let folder_deep = "/**";
  if (text_ends_with(inner, folder_deep)) {
    let difference2 = subtract(inner.length, folder_deep.length);
    let folder = inner.slice(0, difference2);
    let right = text_combine("/", leaf);
    let path = text_combine(folder, right);
    return path;
  }
  let folder_flat = "/*";
  if (text_ends_with(inner, folder_flat)) {
    let difference3 = subtract(inner.length, folder_flat.length);
    let folder2 = inner.slice(0, difference3);
    let right2 = text_combine("/", leaf);
    let path2 = text_combine(folder2, right2);
    return path2;
  }
  let star = "*";
  if (text_includes(inner, star)) {
    let v3 = text_empty();
    return v3;
  }
  return inner;
}
