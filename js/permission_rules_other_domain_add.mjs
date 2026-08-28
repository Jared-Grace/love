import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { permission_rules_other } from "./permission_rules_other.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_last } from "./list_last.mjs";
import { js_find_declaration_named } from "./js_find_declaration_named.mjs";
import { js_array_text_add_after } from "./js_array_text_add_after.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
export async function permission_rules_other_domain_add(domain) {
  "do NOT grant this - it writes allow rules, and a command that writes them is the one command the human has to see every time.";
  arguments_assert(arguments, 1);
  ("Moves one fetched site into the watched list, so an approval already given on this machine goes on standing where a check can see it.");
  ("An approval for a site lives in one of two places and the two are not equal. The per-machine file is read by the guard exactly as the shared one is, so a rule written there is genuinely in force - and nothing generates it, nothing watches it, and the gate over it can only ever say that the rule is unseen. A rule in the shared list is in force and readable at once, because that file is built from committed source.");
  ("Until now there was no way across. Naming a function had a command and naming a site had none, so the only two answers anybody could be offered were to leave the approval invisible or to take it away - and taking it away is the one thing nobody wanted, because the whole reason the rule exists is that the site kept interrupting them.");
  ("Where the new rule goes is worked out rather than typed. It is put after the last site already granted, so the sites stay together instead of arriving underneath the shell verbs at the end of the list, and nobody has to name a neighbour that some later edit may have moved.");
  ("It does not regenerate the settings file itself, and that is not a step left out. The list it has just rewritten is a loaded module, and the loader keeps the copy it already holds however many times the file underneath it is rewritten - so a regeneration in this same run would render the list as it was before the edit, and write a file one rule short while reporting that it had succeeded. The name of the command to run next is handed back instead.");
  ("A site already in the list is answered rather than refused, so running this twice is safe and says so.");
  let rule = text_combine_multiple(["WebFetch(domain:", domain, ")"]);
  let texts = permission_rules_other();
  let already = list_includes(texts, rule);
  if (already) {
    let held = {
      rule,
      added: false,
      held_already: true,
    };
    return held;
  }
  function fetched_is(text) {
    let starts = text_starts_with(text, "WebFetch(domain:");
    return starts;
  }
  let fetched = list_filter(texts, fetched_is);
  let last = list_last(fetched);
  function lambda(ast) {
    let node = js_find_declaration_named(ast, "texts");
    let selects = [node];
    js_array_text_add_after(ast, selects, rule, last);
  }
  let f_name = fn_name("permission_rules_other");
  await function_transform_auto(f_name, lambda);
  let f_name2 = fn_name("permission_settings_allow_write");
  let r = {
    rule,
    added: true,
    after: last,
    write_with: f_name2,
  };
  return r;
}
