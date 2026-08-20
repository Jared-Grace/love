import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { function_source_to_repoint } from "./function_source_to_repoint.mjs";
import { text_split_last } from "./text_split_last.mjs";
import { text_includes_not } from "./text_includes_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { function_run } from "./function_run.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists_assert_json } from "./file_exists_assert_json.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_replace } from "./text_replace.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
import { file_move } from "./file_move.mjs";
import { file_to_commit_add_try } from "./file_to_commit_add_try.mjs";
export async function data_file_room_move(path_fn_name, room) {
  "Move one file the data folder holds loose into a named room of the given half, and repoint the one function that says where it lives.";
  "Where the file is now is asked of the function rather than handed in, because the function is the one place the address is decided and anything else is a second copy of it. A caller that had to spell the old path could spell one the function does not agree with, and the file would then be moved out from under every reader while the function went on naming where it used to be.";
  "The proof runs on what the one asking already established. The function is asked once, before anything is touched, so the address in hand is the one it truly hands out; that address is then required to appear in the source as one whole word, which is what makes the address it returns a literal sitting in the file rather than something assembled. Replacing every occurrence of that literal therefore changes what it returns, and the checks afterwards are that the old word is gone from the source and the new one is in it.";
  "Asking it a second time would prove nothing here and was tried. A function is read off disk once per run and kept, so a second ask after the rewrite hands back the copy held from before it - the reply says the old address no matter how well the rewrite went, and the move fails on a file that was repointed correctly.";
  "The file is moved last either way, so a repointing that did not take leaves the file exactly where every reader still expects to find it.";
  "Only a whole path written out as one word is handled. A function that builds its address out of parts stops here rather than being guessed at, because a shape this does not recognise is a shape it would move the file out from under.";
  arguments_assert(arguments, 2);
  let repo = folder_repo_love();
  let from_spelled = await function_run(path_fn_name, []);
  let leaf = text_split_last(from_spelled, "/");
  let given = data_given_folder();
  let to_spelled = path_join([given, room, leaf]);
  let from = path_join([repo, from_spelled]);
  let to = path_join([repo, to_spelled]);
  await file_exists_assert_json(from, {
    hint: "there is no file at the address this function names, so there is nothing here to move",
    path_fn_name,
    from_spelled,
  });
  await file_exists_not_assert_json(to, {
    hint: "the room already holds a file of this name",
    to_spelled,
  });
  let text = await function_source_to_repoint(path_fn_name);
  let whole = text_includes(text, from_spelled);
  assert_json(whole, {
    hint: "this function does not spell its address as one whole word, so it builds it out of parts - repoint it by hand rather than letting a guess move the file",
    path_fn_name,
    from_spelled,
  });
  let written = text_replace(text, from_spelled, to_spelled);
  let to_folder = path_join([repo, given, room]);
  await folder_exists_ensure(to_folder);
  let fn_path = function_name_to_path_absolute(path_fn_name);
  await file_overwrite_uncached(fn_path, written);
  await function_auto_checked(path_fn_name);
  let after = await file_read_try(fn_path);
  let old_gone = text_includes_not(after, from_spelled);
  assert_json(old_gone, {
    hint: "the old address is still spelled in this function after the repointing, so it would go on naming where the file used to be",
    path_fn_name,
    from_spelled,
  });
  let arrived = text_includes(after, to_spelled);
  assert_json(arrived, {
    hint: "the new address is not spelled in this function after the repointing, so the file has been left where it was",
    path_fn_name,
    to_spelled,
  });
  await file_move(from, to);
  await file_to_commit_add_try(from);
  await file_to_commit_add_try(to);
  let r = {
    path_fn_name,
    from: from_spelled,
    to: to_spelled,
  };
  return r;
}
