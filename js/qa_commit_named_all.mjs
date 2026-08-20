import { arguments_assert } from "./arguments_assert.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
export async function qa_commit_named_all() {
  "Every judging the record file holds, exactly as it is written there, the ones that no longer stand along with the ones that do";
  "An empty record is written the first time rather than treated as a fault, because having judged nothing yet is the ordinary state of a thing that has just begun";
  "Almost nobody wants this. A judging that no longer stands is not an answer about the commit it is filed under, so anybody asking what is red, or what may be deployed, or whether this commit has been looked at already, wants the neighbouring reading that leaves those out - and that reading is the plain name, so asking without thinking about it gives the safe answer";
  "Two askers want the file itself, and both of them write it back. One forgets the entries a question says yes to; the other reads the names out of every saying again. Handed the tidied reading, each would rewrite the file without whatever the tidying left out - so a repair would quietly delete every entry it was not even asking about, and a forgetting would prove nothing by finding no survivors it could see";
  arguments_assert(arguments, 0);
  let path = qa_commit_named_path();
  let named = await file_read_json_initialize(path, {});
  return named;
}
