import { list_map_filter } from "./list_map_filter.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { lyric_video_document_draft_lines } from "./lyric_video_document_draft_lines.mjs";
export async function lyric_video_song_document_draft(
  title,
  credit,
  path_lyrics,
  path_audio,
  path_document,
) {
  arguments_assert(arguments, 5);
  ("$plain title");
  ("$plain credit");
  ("$plain path_lyrics");
  ("$plain path_audio");
  ("$plain path_document");
  ("Writes a first timing document for a song that is not a passage of Scripture, from a plain text file holding one sung line per line, spread evenly over the recording.");
  ("★ THE WORDS COME FROM A FILE AND NOT FROM AN ARGUMENT, BECAUSE A SUNG LINE CARRIES COMMAS. Every list handed across the command line is one comma-joined word, so a lyric passed that way would be cut at every comma into lines nobody wrote. A file keeps each line whole, and a blank line between verses is dropped rather than shown as an empty screen.");
  ("It is the Psalms' drafting step with the passage lookup taken off the front: the spread, the sizes and the document's shape are the same function, so a song document is timed, pictured and rendered by exactly the commands a psalm is.");
  let text = await file_read(path_lyrics);
  let rows = text_split_newline(text);
  let texts = list_map_filter(rows, text_trim, text_empty_not_is);
  let document = await lyric_video_document_draft_lines(
    title,
    credit,
    texts,
    path_audio,
    path_document,
  );
  return document;
}
