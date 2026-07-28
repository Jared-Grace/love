export function permission_grant_names_note() {
  "the sentence written at the top of the generated list of names Claude may run without asking";
  "the file holding that list is written by more than one command, so the sentence lives here rather than inside either of them: a generated file whose header depends on which command last wrote it reports itself changed when nothing about it changed";
  "the same sentence stands at the top of the list function itself, as its own prose. That is not a copy waiting to be routed through here - one is a value written into a generated file and the other is a comment explaining a function, and turning the comment into a call would make a live line out of something that is only meant to be read";
  let note =
    "every function Claude may run on its own seam without asking first - the one list both rule families are generated from, so a second entry point costs no second list";
  return note;
}
