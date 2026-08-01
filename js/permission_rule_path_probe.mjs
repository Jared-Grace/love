import { permission_rule_inner } from "./permission_rule_inner.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes } from "./text_includes.mjs";
import { subtract } from "./subtract.mjs";
export function permission_rule_path_probe(rule) {
  "a concrete file path a file-tool allow rule claims to grant, for asking the real hook whether the rule can ever apply, or empty text when the rule names no path a probe can build";
  "the rule holds a glob and a hook resolves a real path, so a trailing star segment becomes a leaf inside the folder it names; a star anywhere else is left unprobed, because a path with a star in it resolves nowhere and the hook would abstain for a reason that has nothing to do with the rule";
  "taking the brackets off is asked for next door rather than done here, because it is the same two questions - are there brackets, do they close - for every reader of a rule, and a third reader was about to write its own answers to them";
  let inner = permission_rule_inner(rule);
  let leaf = "probe_leaf.md";
  let folder_deep = "/**";
  if (text_ends_with(inner, folder_deep)) {
    let difference = subtract(inner.length, folder_deep.length);
    let folder = inner.slice(0, difference);
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
    let v = text_empty();
    return v;
  }
  return inner;
}
