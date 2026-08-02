import { list_join_space } from "./list_join_space.mjs";
import { text_combine } from "./text_combine.mjs";
import { subtract } from "./subtract.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
export function permission_rule_command_probe(rule) {
  "a realistic shell command a Bash allow rule claims to auto-approve, for asking the guard whether the rule actually applies — or empty text when the rule grants some other tool";
  "Bash(<command>) grants exactly that command; Bash(<prefix>:*) grants that prefix plus any arguments, so the prefix alone is the shortest command it claims";
  "when the prefix ends in a directory separator it names a folder, not a command — nobody runs the bare folder, so probe with a leaf inside it instead, or the probe reports a prompt the real command never sees";
  let opening = "Bash(";
  let closing = ")";
  let inner = text_wrapped_inner(rule, opening, closing);
  let arguments_any = ":*";
  if (text_ends_with(inner, arguments_any)) {
    let difference2 = subtract(inner.length, arguments_any.length);
    let prefix = inner.slice(0, difference2);
    let separator = "/";
    if (text_ends_with(prefix, separator)) {
      ("two leaves, not one — a path verb that moves rather than acts in place needs a source and a destination, and probing it with a single path reports a prompt the real two-argument command never sees");
      ("the folder is only the LAST word of the prefix — the words before it are the verb and its flags, so the second leaf must be built from the folder alone or the verb lands in the middle of the command");
      let words = prefix.split(" ");
      let folder = words[subtract(words.length, 1)];
      let leaf = text_combine(prefix, "probe_leaf");
      let leaf_second = text_combine(folder, "probe_leaf_second");
      let both = list_join_space([leaf, leaf_second]);
      return both;
    }
    ("a trailing star means the prefix plus any arguments, so the command this rule really claims has some — and a probe with none is not the shortest such command, it is a different one. Probing bare said 273 rules could never take effect on the day a bare call to a function that declares parameters became a refusal of its own: every one of those grants was fine, and only the question was wrong");
    let supplied = list_join_space([prefix, "probe_argument"]);
    return supplied;
  }
  return inner;
}
