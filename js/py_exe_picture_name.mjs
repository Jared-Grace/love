export function py_exe_picture_name() {
  "The python that finishes pictures, ending in a space so a script name follows straight on the end of it.";
  "It is its own python for the same reason the speaking one is: the picture stack is heavy, and keeping it apart from the repo's shared python means an install for one cannot break the other. It sits outside the repo so no peer's commit of the whole tree can sweep it into the public repository.";
  "Worked out from the machine store rather than written out, since the pythons sit beside that store: the one place the machine is spelled stays the one place.";
  let root = folder_user_root();
  let beside = path_directory(root);
  let python = path_join([beside, "venv", "picture", "bin", "python"]);
  let p = text_combine(python, " ");
  return p;
}
