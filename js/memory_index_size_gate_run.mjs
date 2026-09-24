import { memory_index_name } from "./memory_index_name.mjs";
import { list_add } from "./list_add.mjs";
import { assert_json } from "./assert_json.mjs";
import { memory_index_text } from "./memory_index_text.mjs";
import { text_bytes_size } from "./text_bytes_size.mjs";
import { memory_index_size_ceiling } from "./memory_index_size_ceiling.mjs";
import { memory_index_lines_longest } from "./memory_index_lines_longest.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function memory_index_size_gate_run() {
  "Fails when the memory index has grown past the size it can be loaded whole at, and names the longest lines so the next reader knows where the weight is.";
  "This guards a failure that is silent by construction. Every other memory check answers a question about content and can be seen to be wrong; this one is about a budget, and going over it costs nothing at the moment it happens - the price is paid later, by a session that never learns the note it needed was cut off.";
  "The way out is to shorten the lines that carry a second hook about a note they only link to, which is a mechanical change; the lines that carry no link at all are the ones a reader has to judge.";
  let text = await memory_index_text();
  let size = text_bytes_size(text);
  let ceiling = memory_index_size_ceiling();
  let over = greater_than(size, ceiling);
  if (not(over)) {
    let fine = {
      size,
      ceiling,
      over: false,
    };
    return fine;
  }
  let waiting = await memory_index_lines_longest();
  ("The heaviest lines are written down as a record, each marked with the note it sits in, rather than read out in a sentence. A sentence quoting them had function names scraped out of it by the sorting that decides a deployment, which held out every app shipping those functions over a fault in a file no app ships.");
  let at_fault = memory_index_name();
  let list = [];
  for (let line of waiting) {
    list_add(list, {
      line,
      at_fault,
    });
  }
  let hint = text_combine_multiple([
    "memory index size gate: the index is ",
    size,
    " bytes and may be ",
    ceiling,
    " - shorten these, the entries carrying the most weight, whose hooks the notes they link to already carry",
  ]);
  assert_json(false, {
    list,
    json: {
      hint,
    },
  });
}
