import { arguments_assert } from "./arguments_assert.mjs";
export function app_music_song_emblem_border_width() {
  "How thick the black edge round a hymn's drawing is drawn, as a width a stylesheet understands.";
  "IT IS THICK ON PURPOSE. A hairline is enough to say where a picture stops and not enough to be seen as part of it; these drawings are pale line work held small beside the words of a hymn, and a heavy edge gives each one a frame that a reader finds at a glance while scrolling past thirty-six of them.";
  "IT IS A NUMBER SOMEBODY CHOSE BY LOOKING. Nothing measurable settles how much black a picture should be framed in - it is a judgement about how much the drawing should stand off the page - so it is here under a name, to be moved by whoever next looks at the page.";
  arguments_assert(arguments, 0);
  let r = "8px";
  return r;
}
