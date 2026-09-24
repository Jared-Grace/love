import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_split } from "./text_split.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function git_history_literals_strip_replacements_text(texts) {
  arguments_assert(arguments, 1);
  ("The instructions a history rewrite reads to take a run of characters out of every commit message a repository holds - one line per text, in the form the rewriting tool reads, asking for each exactly as it is spelled and putting nothing at all in its place.");
  ("★ THIS IS THE LITERAL TWIN OF ",
    fn_name("git_history_texts_replacements_text"),
    ", AND THE DIFFERENCE IS FORCED RATHER THAN CHOSEN. That one refuses anything that is not letters, digits and the mark between parts, because everything else - a dot, a slash, a bracket - means something of its own to the thing reading these lines. The thing this was written for is a folder on somebody's disk, which is made of almost nothing but the characters that sibling refuses. So it is asked for as itself instead, which the tool reads without giving a single character a meaning of its own, and neither reading has to carry the other's escaping.");
  ("NOTHING IS PUT IN ITS PLACE, WHICH IS THE OTHER HALF OF THE DIFFERENCE. A word taken out of a file leaves a hole somebody may one day want to see the shape of, so the tool's own word for it is the honest filler. A machine's folder taken off the front of a path leaves the path, and that is exactly the wanted result: the message goes on saying which file a command touched, and stops saying whereabouts on one person's disk it sat.");
  ("A text is refused if it holds a line ending, because the instructions are read one to a line and the far half would be read as an instruction nobody wrote.");
  ("A text is refused if it holds the arrow the tool reads as dividing what to find from what to put in its place, because it would then ask for something other than itself and quietly put something other than nothing there.");
  ("An empty text is refused because the tool would find it at every position in every message.");
  function lambda(spelling) {
    let full = text_empty_not_is(spelling);
    assert_json(full, {
      hint: "an empty text was named for stripping out of commit messages, which the rewriting tool would find at every position in every message - would you like to name the text to take out?",
      texts,
    });
    let line_parts = text_split(spelling, "\n");
    let single = equal(line_parts.length, 1);
    assert_json(single, {
      hint: "a text named for stripping holds a line ending, and these instructions are read one to a line, so the far half of it would be read as an instruction of its own",
      spelling,
    });
    let arrow_parts = text_split(spelling, "==>");
    let whole = equal(arrow_parts.length, 1);
    assert_json(whole, {
      hint: "a text named for stripping holds the arrow the rewriting tool reads as dividing what to find from what to put in its place, so it would ask for something other than itself",
      spelling,
    });
    let line = "literal:" + spelling + "==>";
    return line;
  }
  let lines = list_map(texts, lambda);
  let text = list_join_newline(lines);
  return text;
}
