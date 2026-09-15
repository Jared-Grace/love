export function py_exe_picture_name() {
  "The python that finishes pictures, ending in a space so a script name follows straight on the end of it.";
  "It is its own python for the same reason the speaking one is: the picture stack is heavy, and keeping it apart from the repo's shared python means an install for one cannot break the other. It sits outside the repo so no peer's commit of the whole tree can sweep it into the public repository.";
  let p = "/home/j/a/venv/picture/bin/python ";
  return p;
}
