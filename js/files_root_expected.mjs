import { arguments_assert } from "./arguments_assert.mjs";
export function files_root_expected() {
  "The files this repo is allowed to keep at its top level, outside any folder.";
  "A list written by hand, for the same reason as the folders beside it: whether a new file belongs at the top is a judgment, and this makes somebody make it on the day the file appears.";
  "Most of these are where a tool looks for them and nowhere else - git, npm, firebase, and the agents reading their instructions. Anything else belongs in a folder.";
  "Written the day forty-four Psalm lyric video description files were found committed at the top: written by a command given a bare file name from the repo root, when they belong beside their videos in Downloads.";
  arguments_assert(arguments, 0);
  let expected = [
    ".firebaserc",
    ".gitignore",
    "AGENTS.md",
    "CLAUDE.md",
    "LICENSE",
    "README.md",
    "firebase.json",
    "package-lock.json",
    "package.json",
    "storage.rules",
  ];
  return expected;
}
