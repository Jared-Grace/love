import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function reply_proposal_changed_approval(title, f_name, lines) {
  arguments_assert(arguments, 3);
  ("The altered file of one change in the shape a verdict is kept in: a name belonging to this change alone, and only the lines this change adds or removes.");
  ("★ A VERDICT ON AN ALTERED FILE COVERS THE LINES THE CHANGE ALTERS AND NOT THE WHOLE FILE. Ten changes were waiting on one file at once, measured 2026-11-05. With one verdict per file, approving any of them erased the one before, and each change that landed altered what the rest were drawn over, so an approval was asked for twice with nothing different to read. The rejected reading was keeping several whole-file verdicts per file, which stops the erasing and still asks again after every landing.");
  ("★ WHAT THIS GIVES UP IS A YES ON THE LINES AROUND THE CHANGE. They are still drawn, but they can move without asking again. A change is refused only when a line it names is gone, which ",
    fn_name("reply_proposal_drawn"),
    " reports as unplaced.");
  ("It is named after the change's title, the same way a test is named after its message, so rewording the lines of a change withdraws its verdict and says so, and a change never reads a verdict left by another.");
  function changed_is(line) {
    let added = text_starts_with(line, "+");
    let removed = text_starts_with(line, "-");
    let r = added || removed;
    return r;
  }
  let changed = list_filter(lines, changed_is);
  let key = reply_case_key(title);
  let name = text_combine_multiple([f_name, "_", key]);
  let approval = {
    name,
    lines: changed,
  };
  return approval;
}
