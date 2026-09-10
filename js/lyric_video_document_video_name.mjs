import { arguments_assert } from "./arguments_assert.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
import { text_replace } from "./text_replace.mjs";
export function lyric_video_document_video_name(document, version) {
  arguments_assert(arguments, 2);
  ("$plain document");
  ("$plain version");
  ("What the video made from a timing document is called: the passage it sings, the shelf mark of the translation it sings it in, and what kind of video it is.");
  ("★ IT IS SPELLED IN ONE PLACE BECAUSE TWO THINGS NOW MAKE THESE VIDEOS AND THEY HAVE TO ARRIVE AT THE SAME FILE. One is somebody asking for a single psalm now; the other is the walk that goes over the whole download folder and skips a video that is already there and still current. Spelled twice, the two would agree until either was touched, and the way that failure shows is the walk making a second copy of every video under a slightly different name beside the first - nothing red, twice the folder.");
  ("★ THE COLON A PART OF A CHAPTER IS SAID WITH IS NOT PUT IN A FILE NAME. A whole chapter is called by a number and a part by a chapter and two verses with a colon between them, and a colon in a name is read as the front of an address by more than one thing that will be handed this file - the render tool among them - as well as being a character two of the three common disks cannot store at all. An underscore says the same thing to a reader and says nothing to anybody else.");
  ("The passage is taken from the document rather than worked out again from a chapter and two verses, because the document is what was drafted from the passage in the first place and is therefore the one place the two cannot disagree.");
  let shelf_mark = text_upper_to(version);
  let passage = text_replace(document.passage, ":", "_");
  let name = passage + " (" + shelf_mark + ") lyric video.mp4";
  return name;
}
