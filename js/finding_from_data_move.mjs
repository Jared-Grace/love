export async function finding_from_data_move(name, path_fn_name) {
  "Move one file out of the data folder into the findings folder, and repoint the single function that says where it lives.";
  "A file in the data folder is read as a record of the present. The two commands that ask whether a name is still spoken for - one before a delete, one during a rename - read every file in there, so a function named anywhere in the data folder is answered still in use and a rename rewrites what a past run actually said. A file that is a record of what a check found out belongs on the other side of that line, and this is how one gets there.";
  "The function that spells the path is named rather than searched for. A search would have to guess which of the files spelling that word is the one holding the address, and guessing wrong here edits a function nobody asked about. Being told the name costs the caller a word they already know, and what it buys is that the function edited is the function meant.";
  "Two shapes of address are handled and no others: a whole path written out as one word, and the data folder asked for and joined with a file name. Anything else stops rather than being guessed at, because a path this does not recognise is a path it would move the file out from under.";
  "The proof is that the function is called afterwards and made to say where the file now is. Editing the letters of a path is not evidence the path came out right - only asking the function is - and the file is moved last, so a repointing that did not work leaves the file where every reader still expects it.";
  arguments_assert(arguments, 2);
  let repo = folder_repo_love();
  let data = data_folder();
  let records = findings_folder();
  let leaf = text_combine(name, ".json");
  let from_spelled = path_join([data, leaf]);
  let to_spelled = path_join([records, leaf]);
  let from = path_join([repo, from_spelled]);
  let to = path_join([repo, to_spelled]);
  await file_exists_assert_json(from, {
    hint: "there is no file of this name in the data folder to move",
    from_spelled,
  });
  await file_exists_not_assert_json(to, {
    hint: "the findings folder already holds a file of this name",
    to_spelled,
  });
  let code = folder_js();
  let leaf2 = text_combine(path_fn_name, ".mjs");
  let fn_path = path_join([repo, code, leaf2]);
  let text = await file_read_try(fn_path);
  assert_json(text, {
    hint: "no function of this name to repoint",
    path_fn_name,
  });
  let spells = text_includes(text, leaf);
  assert_json(spells, {
    hint: "this function does not spell that file at all, so it is not the one holding its address",
    path_fn_name,
    leaf,
  });
  let whole = text_includes(text, from_spelled);
  let asked = text_includes(text, fn_name("data_folder"));
  let written = text;
  if (whole) {
    written = text_replace(text, from_spelled, to_spelled);
  }
  if (asked) {
    written = text_replace(written, fn_name("data_folder"), fn_name("findings_folder"));
  }
  let moved_spelling = not(equal(written, text));
  assert_json(moved_spelling, {
    hint: "the address in this function is written in a shape this does not recognise - repoint it by hand rather than letting a guess move the file",
    path_fn_name,
  });
  await file_overwrite_uncached(fn_path, written);
  await function_auto_checked(path_fn_name);
  let said = await function_run(path_fn_name, []);
  equal_assert_json(said, to_spelled, {
    hint: "the repointed function does not say the file is in the findings folder, so the file has been left where it was",
    path_fn_name,
  });
  await file_move(from, to);
  await file_to_commit_add_try(from);
  await file_to_commit_add_try(to);
  let r = {
    name,
    path_fn_name,
    from: from_spelled,
    to: to_spelled,
  };
  return r;
}
