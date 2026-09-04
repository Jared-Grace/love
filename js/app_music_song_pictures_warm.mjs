import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { image_url_warm } from "./image_url_warm.mjs";
import { add } from "./add.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function app_music_song_pictures_warm(pictures, urls, status) {
  "Fetch every picture in the song at once, saying how many have landed while it runs.";
  "THE PICTURES ARRIVE ONLY AS A READER REACHES THEM, which is right for somebody reading a line or two and wrong for somebody reading the song through: on a slow connection every picture is then a pause, and a reader who wanted the whole hymn pays that pause thirty-six times, one at a time, in the middle of reading.";
  "THEY ARE FETCHED ALL AT ONCE RATHER THAN ONE AFTER THE NEXT. None of them waits on any other, so thirty-six waits laid end to end become one, and the connection is busy for the whole of it instead of a thirty-sixth of it.";
  "THE COUNT MOVES WHILE IT RUNS, because a long fetch with a silent button reads as a button that did nothing, and the reader's next move is to press it again.";
  "IT ONLY EVER RUNS ONCE. The button that starts it stays on the page, because a reader who hid the pictures must be able to bring them back, and bringing them back must not start the whole fetch over and blank the finished line for a count that will only reach the same number again.";
  "NOTHING IS UNPACKED AND NOTHING IS BUNDLED. A zip of these pictures was measured against the pictures themselves and came to 1.5 percent less - pictures are already compressed, so the only thing a bundle would buy is asking once instead of thirty-six times, and it would cost an unpacker in every reader's download and the loss of loading them only when reached. Asking thirty-six times over one connection is what this does instead, and the answers land in the reader's own store for a year.";
  arguments_assert(arguments, 3);
  if (pictures.warmed) {
    return;
  }
  pictures.warmed = true;
  let size = list_size(urls);
  let starting = text_combine_multiple(["Loading 0 of ", size, " pictures"]);
  html_text_set(status, starting);
  let landed = 0;
  async function warm_one(url) {
    await image_url_warm(url);
    landed = add(landed, 1);
    let counted = text_combine_multiple([
      "Loading ",
      landed,
      " of ",
      size,
      " pictures",
    ]);
    html_text_set(status, counted);
    return true;
  }
  await list_map_unordered_async(urls, warm_one);
  let finished = text_combine_multiple([
    "All ",
    size,
    " pictures are on this device.",
  ]);
  html_text_set(status, finished);
}
