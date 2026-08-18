import { permission_settings_allow_every } from "./permission_settings_allow_every.mjs";
import { list_includes } from "./list_includes.mjs";
export async function permission_label_allowed_is(label) {
  "Whether a rule spelled exactly this way is already in force.";
  "A label is built to be the shape of the rule that would cover its call, so a rule spelled the same way covers it and nothing has to be worked out. That is only ever a proof of yes: a label with no matching rule may still be permitted by a rule written wider, or by a folder pattern reaching over it, and this says nothing about those.";
  "It is the file tools and the fetch that need this at all. The shell has a guard to ask, and a guard answers about the command that ran rather than about a shape somebody wrote down.";
  let rules = await permission_settings_allow_every();
  let held = list_includes(rules, label);
  return held;
}
