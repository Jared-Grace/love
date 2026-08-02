export function processes_runaway_share() {
  "How much of its life one of this repo's long-lived processes has to have spent using a processor before it counts as stuck.";
  "Half. This is the number that tells the two kinds of long life apart, and they are nowhere near each other: the things that live for hours here are waiting - a watcher on a folder spent a sixteenth of its life working, the server a twenty-fifth, the sender of commits so little it rounds to nothing over thirteen days. The one that was stuck spent about seven tenths, and had been doing so since the folder it was reading was deleted underneath it.";
  "Time alone would not do. A patient program accumulates hours of a processor simply by being left running, and a gate shard uses more than a whole processor while it works - it is only the two together that mean anything.";
  let r = 0.5;
  return r;
}
