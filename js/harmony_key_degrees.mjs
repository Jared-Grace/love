import { equal } from "./equal.mjs";
import { harmony_key_degrees_hymn } from "./harmony_key_degrees_hymn.mjs";
import { harmony_key_degrees_pop } from "./harmony_key_degrees_pop.mjs";
import { error } from "./error.mjs";
export function harmony_key_degrees(mode, style) {
  "lists the chords a key offers as steps above its tonic paired with a quality and with how far outside the plain key each one sits";
  "the plain scale chords sit at zero and a borrowed or a secondary chord sits further out so the scorer prefers the plain one unless the notes insist";
  "which vocabulary is offered is asked for rather than worked out, because the same melody and the same bass line are harmonised differently by a chorale and by a modern worship song and nothing in the notes says which one is being written";
  if (equal(style, "hymn")) {
    let r = harmony_key_degrees_hymn(mode);
    return r;
  }
  if (equal(style, "pop")) {
    let r22 = harmony_key_degrees_pop(mode);
    return r22;
  }
  error(
    "no chord vocabulary is written here under the name " +
      style +
      " - the ones there are are hymn and pop",
  );
}
