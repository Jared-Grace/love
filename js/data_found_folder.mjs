export function data_found_folder() {
  "The half of the data folder that is a record of what was found out - what a check answered, how long a run took, what a folder held before it was changed.";
  "Nothing here is read to decide what happens next, and that is the whole reason it is kept apart. The two commands that ask whether a function name is still spoken for read the given folder beside this one and never this one, because a name written down in a record of the past is not a name in use: answering that it is holds a dead function undeletable, and rewriting it during a rename changes what a past run actually said into something it never said.";
  "It was a folder of its own at the top of the repo before it was a room in here. Moving it in cost nothing that mattered, because what keeps it out of the sweeps was never where it sat - it is that the sweeps name the folder they read.";
  let path = "data/found";
  return path;
}
