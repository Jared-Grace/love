import { songs_bible_drive_folder } from "./songs_bible_drive_folder.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_user_downloads_path } from "./folder_user_downloads_path.mjs";
import { songs_bible_copy } from "./songs_bible_copy.mjs";
export async function songs_bible_copy_drive() {
  arguments_assert(arguments, 0);
  ("Copies the bible passages sung so far out of the downloads folder onto the drive that keeps them, and says what it did.");
  ("THIS IS THE ONE TO RUN, and it takes nothing, because both ends of the copy are facts about this machine rather than decisions anybody makes at the moment of running it. A command that asked for two folders every time would be a command somebody could point at the wrong one on the run that mattered.");
  ("THE SONGS HAVE NO SECOND COPY ANYWHERE, which is what makes this worth a command at all. They arrive in the downloads folder, they are what the timing documents measure against, and nothing that made them can make the same one twice - so until this has run, every one of them is one disk away from being gone.");
  let folder_from = folder_user_downloads_path("");
  let folder_to = songs_bible_drive_folder();
  let r = await songs_bible_copy(folder_from, folder_to);
  return r;
}
