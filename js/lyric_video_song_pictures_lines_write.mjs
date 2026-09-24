import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { equal } from "./equal.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_pictures_lines_write(
  name,
  folder,
  seconds_lead,
) {
  arguments_assert(arguments, 3);
  ("$plain name");
  ("$plain folder");
  ("$plain seconds_lead");
  ("Gives a song's timing document one picture for every line, taken from a folder where the picture for line one is called 1.png, the picture for line two 2.png, and so on, each coming up a little before its line is sung and giving way to the next.");
  ("★ IT IS FOR A SONG WHOSE PICTURES WERE MADE LINE BY LINE, NOT CHOSEN PASSAGE BY PASSAGE. A song drawn one picture to a couplet already says which picture goes with which line, by the number in its file name, so there is no judgment left to author and writing thirty-six entries by hand would only be a chance to get one wrong.");
  ("★ ANY PICTURES ALREADY IN THE DOCUMENT ARE REPLACED, because numbered pictures are the whole set by construction. Running it again after the lines are retimed puts every picture back on its line and changes nothing else.");
  ("★ THE TIMES FOLLOW THE SAME RULE AS A PSALM'S PICTURES: the first comes up at the very start, every later one the lead before its line, each gives way where the next comes up, and the last runs to the end of the song. The lead is handed in for the same reason it is there - how early a picture should arrive is a judgment about how the video reads.");
  let lead = Number(seconds_lead);
  let folder_songs = lyric_video_songs_folder();
  let path_document = path_join([folder_songs, name + ".json"]);
  let document = await file_read_json(path_document);
  let lines = document.lines;
  let count = lines.length;
  function start_of(index) {
    if (equal(index, 0)) {
      let r2 = 0;
      return r2;
    }
    let value = subtract(lines[index].start, lead);
    let r = number_round_places(value, 3);
    return r;
  }
  let pictures = [];
  for (let index = 0; less_than(index, count); index++) {
    let after = index + 1;
    let end = document.duration;
    if (less_than(after, count)) {
      end = start_of(after);
    }
    let picture = {
      name: String(after),
      line: index,
      path: path_join([folder, after + ".png"]),
      start: start_of(index),
      end,
    };
    pictures.push(picture);
  }
  document.pictures = pictures;
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    pictures: count,
    seconds_lead: lead,
  };
  return r;
}
