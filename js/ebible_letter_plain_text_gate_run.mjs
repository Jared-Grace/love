import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_letter_markdown_path } from "./ebible_letter_markdown_path.mjs";
import { ebible_letter_plain_text_path } from "./ebible_letter_plain_text_path.mjs";
import { ebible_letter_plain_text_generated } from "./ebible_letter_plain_text_generated.mjs";
import { file_read } from "./file_read.mjs";
import { text_lines_first_difference } from "./text_lines_first_difference.mjs";
import { null_is_assert_json } from "./null_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_letter_plain_text_gate_run() {
  "QA gate: the plain text of the letter to eBible says exactly what generating it from the markdown would say, so the file a person pastes into an email cannot fall behind the letter it came from.";
  ("The two are one letter under two endings, and only the markdown is edited. Nothing in an edit of it touches the other, so the pair drifts silently - and the way that is discovered without this is by sending an old letter, which is the one moment it cannot be undone. Re-run ",
    fn_name("ebible_letter_plain_text_write"),
    " to put them back together.");
  ("It generates rather than compares dates, because a file can be newer than its source and still be wrong - an edit of the plain text by hand is exactly that, and a date would call it fresh.");
  ("What it generates is asked for from the very function the writer uses, so the comparison cannot be against a second making of the text that has quietly come to differ from the one that would land on disk.");
  ("The first line where they part is named, so a red gate says where to look instead of only that something moved.");
  ("Throws so the dispatcher seam exits nonzero.");
  arguments_assert(arguments, 0);
  let from_path = ebible_letter_markdown_path();
  let to_path = ebible_letter_plain_text_path();
  let generated = await ebible_letter_plain_text_generated();
  let committed = await file_read(to_path);
  let difference = text_lines_first_difference(committed, generated);
  null_is_assert_json(difference, {
    hint: text_combine_multiple([
      "the pasteable plain text of the letter to eBible is not what the markdown it came from would generate - run ",
      fn_name("ebible_letter_plain_text_write"),
      ", and if the difference is one somebody typed into the plain text by hand, put it in the markdown instead",
    ]),
    from_path,
    to_path,
    difference,
  });
  let lines = text_split_newline(committed);
  let count = list_size(lines);
  let r = {
    lines: count,
  };
  return r;
}
