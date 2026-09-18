import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_song_document_read } from "./lyric_video_song_document_read.mjs";
import { lyric_video_picture_painting_is } from "./lyric_video_picture_painting_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { lyric_video_pictures_credit_line } from "./lyric_video_pictures_credit_line.mjs";
import { lyric_video_singing_credit_line } from "./lyric_video_singing_credit_line.mjs";
import { youtube_description_letters_most } from "./youtube_description_letters_most.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { assert_message } from "./assert_message.mjs";
export async function lyric_video_song_description(name) {
  "$plain name";
  "The words that go under a published lyric video of one song: its title, where the pictures and the singing came from, the words being sung, and then every painting used, named.";
  "★ THE PAINTERS ARE NAMED AT THE FOOT AND THE SENTENCE ABOUT THEM AT THE HEAD. A description is thrown away whole when it runs long and is folded shut when it runs deep, so the part that must survive both is one line, and that line is the disclosure. The list under it is long by nature - one line a painting - and it is the part a person reads only when they want to go and find one of them.";
  "★ EVERY PAINTING IS NAMED, AND NAMED ONCE. These are public domain paintings, so nothing obliges the naming; it is done because a watcher moved by a picture should be able to go and look at the whole of it, and because the painters did the work. A painting held over two pictures of the same video is still one painting and is said once.";
  "★ THE WORDS BEING SUNG ARE WRITTEN OUT, for the same reason a psalm's verses are: somebody who half remembers a line searches for that line, and only the words themselves can answer that search.";
  "The scene beside a painting already reads as a credit - painter, painting, where it hangs, and that it is public domain - because it was written to be read by a person. So it is copied through rather than taken apart and rebuilt, which would be a second rule about how a credit is spelled, kept in a different place from the first.";
  arguments_assert(arguments, 1);
  let document = await lyric_video_song_document_read(name);
  let paintings = [];
  let drawn = [];
  for (let picture of document.pictures) {
    let painting_is = await lyric_video_picture_painting_is(picture);
    if (painting_is) {
      list_add(paintings, picture.scene);
      continue;
    }
    list_add(drawn, picture.path);
  }
  let named = list_unique(paintings);
  let pictures_line = lyric_video_pictures_credit_line(
    named.length,
    drawn.length,
  );
  let sung = lyric_video_singing_credit_line();
  let heading = document.passage + "\n" + pictures_line + "\n" + sung;
  let words = [];
  for (let line of document.lines) {
    list_add(words, line.text);
  }
  let paintings_heading =
    "The paintings in this video, in the order they come up:";
  let description =
    heading +
    "\n\n" +
    words.join("\n") +
    "\n\n" +
    paintings_heading +
    "\n" +
    named.join("\n");
  let letters_most = youtube_description_letters_most();
  let over = greater_than(description.length, letters_most);
  let fits = not(over);
  assert_message(
    fits,
    "the description of " +
      name +
      " is " +
      description.length +
      " letters and youtube keeps " +
      letters_most,
  );
  return description;
}
