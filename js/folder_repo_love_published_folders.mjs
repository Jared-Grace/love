import { folder_public } from "./folder_public.mjs";
export function folder_repo_love_published_folders() {
  "The folders of this repo whose contents reach the public, each spelled from the repo's own root: the code and data written here, the notes beside them, the dispatchers, and the two web folders that are committed.";
  "This repo is public, so every file in these is published the moment it is committed, whoever reads it and whenever. That is what makes them the right places to ask a question about what may lawfully be carried - the question is not what the code does with a file, it is whether the file is out there.";
  "The two web folders are named one by one rather than the whole of the web folder, because the other two under it are built copies that are never committed. Including them would multiply the reading for an answer that is already covered: what is in them was generated out of these.";
  "The rest of the root is left out, and each for a reason of its own. The ignored working folder is not committed at all. The installed packages and the virtual environment are somebody else's code, published by them under their own terms. The android folder is a build tree.";
  let folders = [
    "js",
    "data",
    "notes",
    "scripts",
    folder_public(),
    "web/assets",
  ];
  return folders;
}
