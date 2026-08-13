import { permission_prompt_shaped_events } from "./permission_prompt_shaped_events.mjs";
import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
import { permission_prompt_rows_verdicts } from "./permission_prompt_rows_verdicts.mjs";
export async function permission_prompt_shape_rows(days, seconds_minimum) {
  "which shell shapes actually made the human stop and approve, commonest first, each carrying what the guard decides about it today - the demand a verb rule could answer";
  "the sibling of the run-name ranking, over the interruptions that one leaves out. proved waits only, by the same join, so a shape appears here because somebody paid for it and not because it looked ungranted.";
  "the verdict column is what makes the list readable rather than merely long. a shape the guard already allows was slow rather than blocking, and a shape it denies is refused on purpose; what is left - the ones it abstains on - is the real list, and a granted verb sitting in it is a narrow rule with a common spelling falling just outside.";
  let shaped = await permission_prompt_shaped_events(days, seconds_minimum);
  let rows = permission_prompt_events_grouped_by(shaped, "shape");
  let checked = await permission_prompt_rows_verdicts(rows);
  return checked;
}
