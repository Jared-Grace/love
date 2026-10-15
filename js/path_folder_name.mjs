import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
export function path_folder_name(path) {
  "$plain path";
  "The name of the folder a file sits in, with the file's own name dropped and everything above that folder dropped too.";
  "★ A FILE WITH NO FOLDER ABOVE IT ANSWERS WITH EMPTY TEXT RATHER THAN WITH NOTHING, BECAUSE EVERY CALLER HERE HANDS THE ANSWER STRAIGHT TO SOMETHING THAT READS A NAME. A reader of a name already says nothing when the name does not say what it is looking for, so an empty name travels to the same refusal by the road already built; a null would have to be tested for separately at every call site, and a missed test throws rather than reporting. Empty text keeps one road.";
  "It splits on the forward slash only, the same as the rest of the path reading here, so it answers for the paths this repo writes and reads rather than for every shape a path can take on every machine.";
  let parts = path.split("/");
  let depth = parts.length;
  if (less_than(depth, 2)) {
    let none = "";
    return none;
  }
  let name = parts[subtract(depth, 2)];
  return name;
}
