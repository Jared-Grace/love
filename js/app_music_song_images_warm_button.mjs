import { arguments_assert } from "./arguments_assert.mjs";
import { song_images_kept_urls } from "./song_images_kept_urls.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_div } from "./html_div.mjs";
import { list_size } from "./list_size.mjs";
import { app_music_song_images_warm_text } from "./app_music_song_images_warm_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { html_clear } from "./html_clear.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { image_url_warm } from "./image_url_warm.mjs";
import { add } from "./add.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export function app_music_song_images_warm_button(parent) {
  "One press that fetches every picture in the song, so the rest of the page scrolls without stopping at each one.";
  "THE PICTURES ARRIVE ONLY AS A READER REACHES THEM, which is right for somebody reading a line or two and wrong for somebody reading the song through: on a slow connection every picture is then a pause, and a reader who wanted the whole hymn pays that pause thirty-six times, one at a time, in the middle of reading.";
  "SO IT IS OFFERED RATHER THAN DONE. Loading the lot costs a couple of megabytes, which is nothing on a desk and real on a phone somebody is paying for by the megabyte, and only the reader knows which of those they are.";
  "THEY ARE FETCHED ALL AT ONCE RATHER THAN ONE AFTER THE NEXT. None of them waits on any other, so thirty-six waits laid end to end become one, and the connection is busy for the whole of it instead of a thirty-sixth of it.";
  "THE COUNT MOVES WHILE IT RUNS, because a long fetch with a silent button reads as a button that did nothing, and the reader's next move is to press it again.";
  "NOTHING IS UNPACKED AND NOTHING IS BUNDLED. A zip of these pictures was measured against the pictures themselves and came to 1.5 percent less - pictures are already compressed, so the only thing a bundle would buy is asking once instead of thirty-six times, and it would cost an unpacker in every reader's download and the loss of loading them only when reached. Asking thirty-six times over one connection is what this does instead, and the answers land in the reader's own store for a year.";
  arguments_assert(arguments, 1);
  let urls = song_images_kept_urls();
  let none = list_empty_is(urls);
  if (none) {
    ("a song nobody has drawn for has nothing to offer to load");
    return;
  }
  let row = html_div(parent);
  let size = list_size(urls);
  let said = app_music_song_images_warm_text(size);
  let button = app_shared_button(row, said, on_press);
  app_shared_button_gap_above(button);
  async function on_press() {
    "the button goes when it is pressed, because loading them twice is the one thing pressing it again could do";
    html_clear(row);
    let starting = text_combine_multiple(["Loading 0 of ", size, " pictures"]);
    let status = app_shared_text_quiet(row, starting);
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
}
