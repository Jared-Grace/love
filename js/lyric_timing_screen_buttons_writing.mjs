import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_screen_passage_read } from "./lyric_timing_screen_passage_read.mjs";
import { html_media_duration } from "./html_media_duration.mjs";
import { lyric_timing_saved } from "./lyric_timing_saved.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { lyric_timing_rendered } from "./lyric_timing_rendered.mjs";
import { html_button } from "./html_button.mjs";
export function lyric_timing_screen_buttons_writing(parent, desk) {
  arguments_assert(arguments, 2);
  ("$plain parent");
  ("$plain desk");
  ("The two buttons that leave something behind: write the times to the disk, and render the video from them.");
  ("THEY ARE TWO BUTTONS AND NOT ONE. Saving is instant and rendering takes minutes, so a single button would charge the whole of a render for the cheap and ordinary act of writing down what was just heard. Somebody halfway through a song saves and walks away; somebody finished renders.");
  ("Rendering says it has started before it starts. It runs long enough that a page which sat silent would be indistinguishable from a page that had not heard the press, and the first thing an unsure person does is press again - which is how one render becomes two.");
  ("Both presses hand over the name of the song that is loaded, because both are about one particular recording: the save records which one the times were measured against, and the render reads that same file back. The name is taken at the moment of the press rather than held from earlier, so somebody who changes their mind and loads a different take is saving against the take they can hear.");
  async function on_save() {
    let asked = lyric_timing_screen_passage_read(desk.inputs);
    let duration = html_media_duration(desk.song.audio);
    let path_document = await lyric_timing_saved(
      asked,
      desk.held,
      duration,
      desk.song.file_name,
    );
    html_text_content_set(desk.told, "Saved " + path_document);
  }
  async function on_render() {
    let asked = lyric_timing_screen_passage_read(desk.inputs);
    html_text_content_set(desk.told, "Rendering. This takes a few minutes.");
    let said = await lyric_timing_rendered(asked, desk.song.file_name);
    html_text_content_set(desk.told, said);
  }
  html_button(parent, "Save the times", on_save);
  html_button(parent, "Render the video", on_render);
}
