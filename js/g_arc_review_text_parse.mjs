import { text_braces_split } from "./text_braces_split.mjs";
import { property_get } from "./property_get.mjs";
import { text_trim_right } from "./text_trim_right.mjs";
import { text_ends_with_space } from "./text_ends_with_space.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { g_arc_review_line_apply } from "./g_arc_review_line_apply.mjs";
export function g_arc_review_text_parse(review_text) {
  "The arc a review page holds, read back out of the page - the inverse of laying an arc out to be read.";
  "WHY THERE IS AN INVERSE. An answer that comes back as readable text rather than in the JSON shape has lost nothing but its format, and a format is mechanical: if a person handed this over written out plainly, nobody would throw the work away and ask for it again, they would ask for the shape to change and keep the content. So the readable layout is a form an arc may be WRITTEN in as well as read in.";
  "It is also what makes a review page EDITABLE. A reviewer reads the page, fixes a line on it, and the page they fixed is the arc - rather than the fix having to be copied by hand into a second file that is the real one.";
  "A REVIEWER'S NOTES COME BACK BESIDE THE ARC, never inside it. Anything written in braces is what the reviewer thinks about the line rather than anything the person in the game says, so it is taken out of the words and handed over separately, carrying the number of the turn it was written against. Left in, it would be spoken aloud in the game; dropped quietly, the reviewer's whole reading would be thrown away by the step that was meant to collect it.";
  "The notes are NOT stored on the arc either, because an arc is what the game plays and a note is work still to do on it. So the page a reviewer wrote on is the only place their notes live, and reading it back is the moment they have to be taken seriously.";
  "Reading back CANNOT INVENT, which is why this is safe where retyping would not be. A reference is carried across as the writer wrote it, and a passage is resolved from it against the passages that were offered, so a reference that names nothing offered still has nowhere to land.";
  let arc = {
    occupation: "",
    trouble: "",
    summary: "",
    conversations: [],
  };
  let state = {
    conversation: null,
    turn: null,
    opener: "",
    number: "",
  };
  let notes = [];
  let lines = text_split_newline(review_text);
  for (let line of lines) {
    let split = text_braces_split(line);
    let text = property_get(split, "text");
    let bare = text_trim_right(text_ends_with_space, text);
    let blank = text_empty_is(bare);
    if (not(blank)) {
      g_arc_review_line_apply(arc, state, bare);
    }
    let braced = property_get(split, "braced");
    for (let note of braced) {
      let turn = property_get(state, "number");
      list_add(notes, {
        turn,
        note,
      });
    }
  }
  let r = {
    arc,
    notes,
  };
  return r;
}
