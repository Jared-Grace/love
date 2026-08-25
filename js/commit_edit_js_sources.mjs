export async function commit_edit_js_sources(commit) {
  "$plain commit";
  "The one code file a commit changed, as it stood before the commit and as it stood after - or nothing on both sides where the commit did not change exactly one.";
  "IT IS WHAT SETTLES A LINE THE LINE CANNOT SETTLE. A word standing alone on a changed line is an entry of a list, a part of a record, or an argument of a call, and only the file around it says which. A difference does not carry the file, so the file is fetched - once for the whole commit, because every doubted line in it came out of the same one.";
  "BOTH SIDES ARE FETCHED because a line taken out is gone from the file that follows the commit and a line put in was absent from the file before it, so asking one side about the other's lines would answer that the word stands nowhere and hand every removal back undecided.";
  "MORE THAN ONE FILE IS ANSWERED WITH NOTHING RATHER THAN WITH A CHOICE. A difference's lines do not say which file each came from once the headings are dropped, so a commit touching two files cannot have its words looked up without guessing which file to look in - and the readings built on this are about single-file edits in any case.";
  arguments_assert(arguments, 1);
  let touched = await git_commit_files(commit);
  let files = property_get(touched, "files");
  let code_folder = folder_js();
  let prefix = text_combine(code_folder, "/");
  let code_files = list_filter_starts_with(files, prefix);
  let size = list_size(code_files);
  let one_is = equal(size, 1);
  if (not(one_is)) {
    let r = { before: null, after: null };
    return r;
  }
  let path = list_first(code_files);
  let folder = folder_current_absolute();
  let parent = text_combine(commit, "^");
  let after = await git_file_read_at_or_null(folder, commit, path);
  let before = await git_file_read_at_or_null(folder, parent, path);
  let r2 = { before, after };
  return r2;
}
