import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_lines_dropped } from "./bible_usfm_version_lines_dropped.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_markers_dropped_lines_allowed } from "./bible_usfm_markers_dropped_lines_allowed.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { add } from "./add.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { json_to } from "./json_to.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export async function bible_usfm_version_lines_dropped_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: prove that every line of the Berean shelf the reading throws away wears a mark somebody has opened and written down as carrying no words of scripture. Throws so the dispatcher seam exits nonzero.");
  ("★ IT WATCHES THE ONLY DIRECTION THE OTHER CHECKS CANNOT SEE, WHICH IS WORDS GOING MISSING. A wrong word handed over is loud and every check catches it. A line thrown away is silent: the passage that arrives is shorter and reads perfectly, and a reader who never saw the line cannot miss it. The last words of Habakkuk were gone that way, and they were found by accident rather than by anything that would have found the next one.");
  ("A NEW MARK IS THE WHOLE SIGNAL, and that is why this ratchets on names and not on numbers. The lines under a mark change every time the publisher tidies a heading, so a count would go red for nothing; a mark that was never being thrown away before and now is means a printing reached for something new, and no one has read a word of it.");
  ("IT FAILS BOTH WAYS ON PURPOSE. A named mark that has stopped appearing is also red, because either the shelf moved under it or somebody mended those lines into scripture - and in both cases the sentence written beside that name is now describing nothing, which is how an allowance quietly turns into a shrug.");
  ("HOW MANY LINES WERE THROWN AWAY AT ALL IS ASSERTED FIRST. A shelf that moved leaves this reading no books, naming no marks and passing, and no marks named is exactly what a perfectly kept bible looks like.");
  let found = await bible_usfm_version_lines_dropped("bsb");
  let counts = property_get(found, "counts");
  let markers = property_get(found, "markers");
  let allowed = bible_usfm_markers_dropped_lines_allowed();
  let marker_texts = object_property_names(counts);
  let dropped = 0;
  let unnamed = [];
  for (let marker_text of marker_texts) {
    let count = property_get(counts, marker_text);
    dropped = add(dropped, count);
    console.log("dropped    " + marker_text + "   lines: " + count);
    let named = property_exists(allowed, marker_text);
    if (not(named)) {
      list_add(unnamed, marker_text);
      let lines = property_get(markers, marker_text);
      for (let line of lines) {
        console.log("unread     " + marker_text + "   " + json_to(line));
      }
    }
  }
  let too_few = less_than(dropped, 6000);
  if (too_few) {
    throw new Error(
      "bible usfm version lines dropped gate: only " +
        dropped +
        " lines were thrown away, and there are over six thousand - did the shelf move?",
    );
  }
  let unnamed_size = list_size(unnamed);
  let unread = greater_than(unnamed_size, 0);
  if (unread) {
    throw new Error(
      "bible usfm version lines dropped gate: the reading now throws away lines marked " +
        list_join_comma_space(unnamed) +
        text_combine_multiple([
          " and nobody has read them - the lines are printed above, so open them, decide whether they are words anybody said, and either mend the mark or write down beside it in ",
          fn_name("bible_usfm_markers_dropped_lines_allowed"),
          " what they are",
        ]),
    );
  }
  let allowed_names = object_property_names(allowed);
  let gone = [];
  for (let allowed_name of allowed_names) {
    let still = property_exists(counts, allowed_name);
    if (not(still)) {
      list_add(gone, allowed_name);
    }
  }
  let gone_size = list_size(gone);
  let stale = greater_than(gone_size, 0);
  if (stale) {
    throw new Error(
      "bible usfm version lines dropped gate: nothing on the shelf wears the mark " +
        list_join_comma_space(gone) +
        text_combine_multiple([
          " any more, so the sentence written beside it is describing nothing - either the shelf moved or those lines are now being read as scripture, and the line should be taken out of ",
          fn_name("bible_usfm_markers_dropped_lines_allowed"),
          " by whoever checked which",
        ]),
    );
  }
  let marks = list_size(marker_texts);
  console.log("marks thrown away: " + marks + "   lines: " + dropped);
  let r = {
    marks,
    dropped,
    unread: 0,
  };
  return r;
}
