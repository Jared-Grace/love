import { arguments_assert } from "./arguments_assert.mjs";
import { reply_choices_lead_provider_fragment } from "./reply_choices_lead_provider_fragment.mjs";
import { text_may_the_lord_exclamation } from "./text_may_the_lord_exclamation.mjs";
export function reply_prayer_lead_provider() {
  arguments_assert(arguments, 0);
  ("The line of the closing prayer that asks God to lead somebody to whoever can give them what they asked for.");
  let lead = reply_choices_lead_provider_fragment();
  let line = text_may_the_lord_exclamation(lead);
  return line;
}
