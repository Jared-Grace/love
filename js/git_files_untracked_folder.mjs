export async function git_files_untracked_folder(folder) {
  "The files sitting in a folder that git has no record of at all, spelled the way git spells them.";
  "Asked as its own question rather than read off the changed list, because those two are different things and only one of them means work in progress. A tracked file with edits in it has been recorded and is being changed; a file git has never seen is somebody part way through writing it, and nothing about it can be held against the repo yet.";
  "The ignored files are left out, so nothing in a gitignored folder is ever mistaken for work in progress.";
  let stdout = await git_folder_run(folder, [
    "ls-files",
    "--others",
    "--exclude-standard",
  ]);
  let lines = text_split_newline(stdout);
  let filled = list_filter_text_empty_not_is(lines);
  return filled;
}
