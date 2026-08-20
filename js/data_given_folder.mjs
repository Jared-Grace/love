export function data_given_folder() {
  "The half of the data folder that was put there to be read - baselines, settings, frozen words, worked examples, the cases a gate is tried against.";
  "It is one folder rather than a list of rooms because the two commands that ask whether a function name is still spoken for need to know what to read, and a single word is a thing that cannot be forgotten. A list of rooms would have to be added to every time somebody made a new one, and the cost of forgetting is silent: a name held alive by a file nothing reads, or a rename that quietly missed a file it should have rewritten.";
  "Its opposite is the found folder beside it, and between them they are the whole of the data folder. That is what a gate checks, so a third room cannot appear without somebody saying which of the two kinds it is.";
  let path = "data/given";
  return path;
}
