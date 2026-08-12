import { bible_folders_sentence_end_measure } from "./bible_folders_sentence_end_measure.mjs";
import { bible_sentence_end_marks_path } from "./bible_sentence_end_marks_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";

export async function bible_sentence_end_marks_write() {
  "Reads every bible this repo ships and writes down which of them mark where a sentence ends.";
  "The one command to run after a bible is added, and the only thing here that touches the network. Everything downstream reads the file it writes, so a gate can ask the question on a machine with nothing to reach.";
  "It is safe to run at any time and says the same thing twice, because the bibles it reads do not change under it - what changes is the list of them.";
  let measured = await bible_folders_sentence_end_measure();
  let path = bible_sentence_end_marks_path();
  await file_overwrite_json(path, measured);
  return measured;
}
