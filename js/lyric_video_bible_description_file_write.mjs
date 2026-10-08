import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_title } from "./lyric_video_bible_title.mjs";
import { lyric_video_bible_description } from "./lyric_video_bible_description.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function lyric_video_bible_description_file_write(
  chapter_number,
  song_number,
  path_video,
) {
  arguments_assert(arguments, 3);
  ("$plain chapter_number");
  ("$plain song_number");
  ("$plain path_video");
  ("Writes, beside a rendered lyric video of one Psalm, the file its upload reads: the title on the first line and the description under it.");
  ("★ THE FILE IS MADE BY A COMMAND SO NO TITLE IS EVER TYPED BY HAND. A hundred and fifty Psalms with several songs each are hundreds of titles, and a hand-typed one is where the shape drifts - a dropped verse range, a 'take' where 'song' belongs - with nothing anywhere to say it happened.");
  let title = await lyric_video_bible_title(chapter_number, song_number);
  let description = await lyric_video_bible_description(chapter_number);
  let path_words = path_video + ".description.txt";
  let text = title + "\n" + description;
  await file_overwrite(path_words, text);
  let r = {
    path_words,
    title,
  };
  return r;
}
