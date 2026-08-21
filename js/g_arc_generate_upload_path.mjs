import { g_arc_generate_upload_namespace } from "./g_arc_generate_upload_namespace.mjs";
import { firebase_chapter_upload_path } from "./firebase_chapter_upload_path.mjs";
export function g_arc_generate_upload_path(person_name) {
  "Where one person's arc lengths sit in storage.";
  "$plain person_name";
  "the name is one pool record's, like g_arc_generate_0 - the writer's own name and the number that person was dealt, and not a path and not anything that runs. It is joined into an address and handed back as text; nothing here reads or writes a file.";
  "IT IS A PERSON AND NOT A CHAPTER, and the parameter said chapter for a while. One file is written to a person, because a person's turn count is drawn for them alone; the address builder underneath takes whatever word names the file and knows nothing about which of the two it is. So a chapter code and a person's name both went in and both came out as addresses that worked, and only the word here said which was meant.";
  let f_name = g_arc_generate_upload_namespace();
  let destination = firebase_chapter_upload_path(f_name, person_name);
  return destination;
}
