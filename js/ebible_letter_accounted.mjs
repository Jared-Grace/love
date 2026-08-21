import { ebible_letter_accounted_path } from "./ebible_letter_accounted_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_letter_accounted() {
  "Every disagreeing chapter that has already been dealt with, named as the bible and the chapter joined by a space, each saying what was done about it.";
  "Two different endings are kept in the one record because they mean the same thing to whoever writes the next letter: nothing more to say. One is that it went in a letter. The other is that somebody read the page and it turned out to be no fault at all - a translation marking two verses together as a range, or a read-aloud edition merging some. Splitting them into two files would make a chapter absent from one of them look unexamined.";
  "What was done is written out in words rather than kept as a flag, because the reason is the part that stops the work being done twice. A chapter marked only as handled tells the next reader nothing about whether looking again would find something.";
  let path = ebible_letter_accounted_path();
  let parsed = await file_read_json(path);
  let accounted = property_get(parsed, "accounted");
  return accounted;
}
