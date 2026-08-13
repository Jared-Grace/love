import { permission_rules } from "./permission_rules.mjs";
import { greater_than } from "./greater_than.mjs";
import { set_add } from "./set_add.mjs";
import { set_new } from "./set_new.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
export async function permission_allow_verbs() {
  "every verb the settings file already approves outright, as a set of the words a rule names";
  "reading the files rather than the source that generates them, because what decides is what is on disk. the two are held together by a gate, and if they ever part this should say what is actually in force rather than what was meant to be.";
  "a rule names its verb before the colon, and a rule with no colon names an exact command whose leading words are the verb just the same - so both shapes contribute the same way, and a two-word verb like a git subcommand arrives already spelled as the pair.";
  let rules = await permission_rules();
  let verbs = set_new();
  for (let rule of rules) {
    let bash_is = text_starts_with(rule, "Bash(");
    if (not(bash_is)) {
      continue;
    }
    let inner = rule.slice(5, -1);
    let verb = inner.split(":")[0];
    let words = verb.trim().split(/\s+/);
    set_add(verbs, words[0]);
    let pair_is = greater_than(words.length, 1);
    if (pair_is) {
      let pair = words[0] + " " + words[1];
      set_add(verbs, pair);
    }
  }
  return verbs;
}
