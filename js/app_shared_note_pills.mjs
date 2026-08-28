import { app_shared_note_pill } from "./app_shared_note_pill.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
export function app_shared_note_pills(parent, notes) {
  "The notes already standing against the thing above them, each one drawn as a quiet band with the part it was filed against in front of it.";
  "THEY ARE SHOWN ABOVE THE BOX, because the commonest thing a second reader does is file again what the first one already filed. The part is shown with the words so a reader can see whether their own finding is the same one.";
  arguments_assert(arguments, 2);
  function note_line(one) {
    app_shared_note_pill(parent, one);
  }
  each(notes, note_line);
}
