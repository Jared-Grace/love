import { folder_home } from "./folder_home.mjs";
import { text_combine } from "./text_combine.mjs";
export function folder_user_path() {
  "The human's own home folder, written so that a name can simply be added onto the end of it.";
  "It used to be written down as one machine's answer. Asking the machine gives the same words on that machine and the right ones on anybody else's, so nobody has to edit this to work somewhere new.";
  "The separator on the end is what every caller here is relying on, and one of them adds its name on with no separator of its own, so taking it off would quietly run the name into the folder.";
  let home = folder_home();
  let p = text_combine(home, "/");
  return p;
}
