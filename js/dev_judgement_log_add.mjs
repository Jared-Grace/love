import { arguments_assert } from "./arguments_assert.mjs";
import { dev_judgement_log_path } from "./dev_judgement_log_path.mjs";
import { dev_log_add } from "./dev_log_add.mjs";
export async function dev_judgement_log_add(subject, question, answer, where) {
  arguments_assert(arguments, 4);
  ("Writes down one judgement a person made while testing on a /dev/ page - which of several things they heard as better, which one was wrong, which they could not tell apart.");
  ("It exists because asking a person to judge something by ear and asking them to TYPE the answer somewhere else are two separate costs, and the second is the larger. A page can offer the question beside the thing being judged and take the answer as a press, and whoever asked the question then reads it here instead of asking again.");
  ("subject is what was being judged, question is what was asked about it, and answer is what they pressed. Three words rather than one sentence, because a sentence can only be read while these can be counted: every answer to the same question about the same subject lines up.");
  ("where is the whole address of the page, so a judgement can be traced back to the page that offered it after that page is gone - and these pages are built to be deleted.");
  ("Nothing is parsed and nothing is trusted: a page decides what these four words say, so they are written down as given, and whoever reads them later is reading a report rather than a fact.");
  let entry = {
    subject,
    question,
    answer,
    where,
  };
  let f_path = dev_judgement_log_path();
  let r = await dev_log_add(f_path, entry);
  return r;
}
