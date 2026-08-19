import { arguments_assert } from "./arguments_assert.mjs";
import { permission_rule_tool_name } from "./permission_rule_tool_name.mjs";
import { permission_rule_inner } from "./permission_rule_inner.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function permission_rule_path_allowed_is(rule, tool, path) {
  "Whether one allow rule grants this tool the file at this path, read narrowly enough that a hook can act on the answer without a human.";
  "Read narrowly on purpose. Claude Code's own permission engine understands more rule shapes than this does, and the two do not have to agree: a shape this cannot be sure of answers no, the hook then says nothing at all, and the engine decides exactly as it did before. So a gap here costs one prompt. A wrong yes would cost a write nobody granted, which is why the only shapes accepted are the two that can be checked with plain text - a whole path written out, and a folder followed by a deep glob and nothing else.";
  "A star anywhere but that one trailing place answers no. A prefix built from text holding a star would match paths the rule never named, and no reading of the star here is better than the engine's own.";
  "Both sides must be spelled from the root of the disk. A relative rule or a relative path would have to be read against some folder, and a hook is handed no folder it can trust - it runs wherever the caller happened to be standing.";
  arguments_assert(arguments, 3);
  let named = permission_rule_tool_name(rule);
  let same_tool = equal(named, tool);
  if (not(same_tool)) {
    return false;
  }
  let inner = permission_rule_inner(rule);
  if (text_empty_is(inner)) {
    return false;
  }
  let root = "/";
  let rule_absolute = text_starts_with(inner, root);
  if (not(rule_absolute)) {
    return false;
  }
  let path_absolute = text_starts_with(path, root);
  if (not(path_absolute)) {
    return false;
  }
  let star = "*";
  let deep = "/**";
  if (text_ends_with(inner, deep)) {
    let difference = subtract(inner.length, deep.length);
    let folder = inner.slice(0, difference);
    if (text_includes(folder, star)) {
      return false;
    }
    let prefix = text_combine(folder, root);
    let inside = text_starts_with(path, prefix);
    return inside;
  }
  if (text_includes(inner, star)) {
    return false;
  }
  let same_path = equal(inner, path);
  return same_path;
}
