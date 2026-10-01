import { arguments_assert } from "./arguments_assert.mjs";
import { processes_sleep_loop_deliberate } from "./processes_sleep_loop_deliberate.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
export function process_line_sleep_loop_deliberate_why_or_null(line) {
  "$plain line";
  "Why the command a process was given is a sleeping loop somebody meant to leave running, or null where nothing on the register claims it. Read-only, pure.";
  "The register beside this one holds the claims; this only asks it. Keeping the asking apart from the claiming is what lets the whole of what has been let through be read in one place while every caller still gets one word back.";
  "★ IT HANDS BACK THE REASON AND NOT A YES, BECAUSE A SUBTRACTION THAT CANNOT SAY WHY IT SUBTRACTED IS INDISTINGUISHABLE FROM A BUG. A caller holding the reason can print it, so a reader sees the line that was taken out and the sentence that took it out together and can disagree with either. A caller holding only true has nothing to show, and the loop simply vanishes from an answer that claims to be complete.";
  "Null and not an empty word for the ordinary case, so that a caller reading the answer as a yes or a no cannot be fooled by a reason somebody left blank.";
  arguments_assert(arguments, 1);
  let loops = processes_sleep_loop_deliberate();
  for (let loop of loops) {
    let holds = property_get(loop, "holds");
    let claimed = text_includes(line, holds);
    if (claimed) {
      let why = property_get(loop, "why");
      return why;
    }
  }
  return null;
}
