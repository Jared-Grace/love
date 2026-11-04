import { arguments_assert } from "./arguments_assert.mjs";
import { property_null_is } from "./property_null_is.mjs";
import { qa_gate_said_log_entry } from "./qa_gate_said_log_entry.mjs";
import { qa_gate_said_log_path } from "./qa_gate_said_log_path.mjs";
import { dev_log_add } from "./dev_log_add.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function qa_gate_said_log_add(commit, kept) {
  "$plain commit";
  "$plain kept";
  "Adds one filed judgement's short form to the log of what red gates said";
  "A judgement that carries no sayings adds nothing, because the plain record of verdicts files through the same door as the one with names";
  "A failure here is swallowed, because this is a record about judgements and must never cost one: a judging takes half an hour, and losing its filing to a full disk on a side note is the wrong way round. A log that stopped growing is how such a failure shows";
  arguments_assert(arguments, 2);
  let unspoken = property_null_is(kept, "said");
  if (unspoken) {
    return;
  }
  async function lambda() {
    let entry = qa_gate_said_log_entry(commit, kept);
    let f_path = qa_gate_said_log_path();
    await dev_log_add(f_path, entry);
  }
  await catch_null_async(lambda);
}
