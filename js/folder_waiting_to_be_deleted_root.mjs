import { folder_user } from "./folder_user.mjs";
export function folder_waiting_to_be_deleted_root() {
  "The folder outside this repo where something nobody is sure about waits until somebody who knows decides.";
  "There is a third answer between keeping a folder and deleting it, and until this existed there was nowhere to put it. Whoever finds stored data under a name nothing answers to can usually tell it is dead and almost never tell it is safe to destroy, because the one thing a folder cannot say is who else was reading it. Deleting on a guess is the only mistake here that cannot be taken back, so the guess gets somewhere to stand instead.";
  "It sits beside the folders it takes from rather than inside one of them, because a bin inside a watched root would be walked as though its contents were live and reported as the very thing that put them there.";
  "Each thing waiting keeps the date it arrived in its own path, so how long it has been waiting is read off the address rather than believed from a note. That is what lets a bin be a queue: a pile nobody is counting is where questions go to die, and a date somebody wrote down separately is a date that stops being true.";
  let folder = folder_user("storage/waiting_to_be_deleted");
  return folder;
}
