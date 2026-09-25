import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { git_folder_path_history_blobs } from "./git_folder_path_history_blobs.mjs";
import { git_folder_blob_text } from "./git_folder_blob_text.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function git_folder_paths_word_blobs(folder, paths, word) {
  "$plain folder";
  "Every version of these files that holds this word anywhere in it, each one named by the file it belongs to and by git's own name for its contents.";
  "★ THIS IS THE LIST A KEEP-LIST HAS TO BE CHECKED AGAINST, AND WITHOUT IT A KEEP-LIST PROVES NOTHING. Naming the versions to hand back untouched only works if the versions nobody named are the rest of these - so the rest of these have to be known. A name on the keep-list that is not in this answer matches nothing during the rewrite and therefore keeps nothing: the version it was written to protect is changed like any other, silently, because a name that matches nothing looks exactly like a name whose version is not present.";
  "★ IT ASKS FOR THE WORD WHEREVER ITS LETTERS STAND, NOT WHERE A WORD BEGINS. The narrower reading is right for deciding what to replace and wrong for deciding what is present, because a copy welded into the middle of something longer is still a copy. A word written into a sentence explaining how the replacement is spelled is the case that taught this, and only the wider question ever sees it.";
  "Case is ignored on both sides. These are names, and a name is written with a capital at the start of a sentence and without one in a list, so the two spellings are the same presence and a reader asking whether the word is there means both.";
  arguments_assert(arguments, 3);
  let any = list_empty_not_is(paths);
  assert_json(any, {
    hint: "no paths were named, and asking which versions of no files hold a word answers nothing rather than answering none - would you like to name the files?",
    word,
  });
  let wanted = text_lower_to(word);
  let found = [];
  async function git_folder_paths_word_blobs_path(path) {
    let blobs = await git_folder_path_history_blobs(folder, path);
    async function git_folder_paths_word_blobs_blob(blob) {
      let text = await git_folder_blob_text(folder, blob);
      let lowered = text_lower_to(text);
      let holds = text_includes(lowered, wanted);
      if (holds) {
        list_add(found, {
          path,
          blob,
        });
      }
    }
    await each_async(blobs, git_folder_paths_word_blobs_blob);
  }
  await each_async(paths, git_folder_paths_word_blobs_path);
  return found;
}
