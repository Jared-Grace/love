import { reply_response_nothing_to_give } from "./reply_response_nothing_to_give.mjs";
import { reply_choices_lead_provider_fragment } from "./reply_choices_lead_provider_fragment.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function reply_choices_give() {
  let sorry = reply_response_nothing_to_give();
  let lead = reply_choices_lead_provider_fragment();
  let t = text_combine_multiple([
    sorry,
    " According to the desire of the LORD: May the LORD provide and may the LORD ",
    lead,
    ".",
  ]);
  return t;
}
