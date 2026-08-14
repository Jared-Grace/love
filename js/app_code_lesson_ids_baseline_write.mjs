import { baseline_known_write } from "./baseline_known_write.mjs";
import { app_code_lesson_ids_baseline_path } from "./app_code_lesson_ids_baseline_path.mjs";
import { app_code_lesson_ids } from "./app_code_lesson_ids.mjs";
export async function app_code_lesson_ids_baseline_write() {
  "Rewrite the record of lesson ids from the lessons the app teaches right now. For seeding it once, for a lesson deliberately added, and for an id deliberately given up.";
  "This one is allowed to grow as well as shrink, which is unlike most of its family, and the reason is what it holds. A new lesson is a new id and there is nothing wrong with a new id; what the record is for is that the old ones go on being answered to. So the writer says yes to both directions and the gate is what makes somebody run the writer on purpose.";
  let ids = app_code_lesson_ids();
  let path = app_code_lesson_ids_baseline_path();
  let r = await baseline_known_write(ids, path);
  return r;
}
