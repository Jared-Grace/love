import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { app_code_lessons_review_since_lesson_names_of_text } from "./app_code_lessons_review_since_lesson_names_of_text.mjs";
import { app_code_lessons_review_since_changed_path } from "./app_code_lessons_review_since_changed_path.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lessons_review_since_lesson_name } from "./app_code_lessons_review_since_lesson_name.mjs";
export async function app_code_lessons_review_since_names_after(
  commit,
  list_path,
  folder,
) {
  arguments_assert(arguments, 3);
  let lesson_prefix = "app_code_lesson_";
  let shown = text_combine_multiple([commit, ":", list_path]);
  let list_text = await git_folder_run(folder, ["show", shown]);
  let names_before = app_code_lessons_review_since_lesson_names_of_text(
    list_text,
    lesson_prefix,
  );
  let r2 = await app_code_lessons_review_since_changed_path(folder, commit);
  let files_of_lesson = property_get(r2, "files_of_lesson");
  let r3 = app_code_lessons_review_since_lesson_name(
    r2,
    names_before,
    files_of_lesson,
  );
  let helpers_shared_edited = property_get(r3, "helpers_shared_edited");
  let lessons_removed = property_get(r3, "lessons_removed");
  let lessons_hidden = property_get(r3, "lessons_hidden");
  let lessons_moved = property_get(r3, "lessons_moved");
  let lessons_changed = property_get(r3, "lessons_changed");
  let lessons_added = property_get(r3, "lessons_added");
  let cut_place = property_get(r3, "cut_place");
  let cut_fn = property_get(r3, "cut_fn");
  let names_after = property_get(r3, "names_after");
  let r = {
    names_before,
    helpers_shared_edited,
    lessons_removed,
    lessons_hidden,
    lessons_moved,
    lessons_changed,
    lessons_added,
    cut_place,
    cut_fn,
    names_after,
  };
  return r;
}
