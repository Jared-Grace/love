export function giveaway_file_kinds() {
  "The kinds of thing a given-away file is allowed to say it is, spelled once.";
  "★ IT IS A FIXED LIST BECAUSE THE WORD LANDS IN A NAME NOTHING CAN CHANGE AFTERWARDS. A kind taken as free text would be spelled `lyric_video` by one upload and `video` by the next, and the two would sit side by side in the same box with nothing red anywhere - and the only repair for a published name is to upload the file again under the other spelling and leave the first one where it is, because the first spelling is already in somebody's download folder and in the address they bookmarked.";
  "A kind word is needed at all because one passage has several kinds of file and an ending does not separate them. A sung recording and a spoken reading are both a wav; a lyric video and a screen capture are both an mp4. The ending says how to open a file and the kind says what it is, and a reader of a bare listing needs the second one.";
  "Three kinds rather than every kind imaginable, because these are the three that have files waiting. A fourth is one line here on the day something is actually made for it, and a word added before then would be a name argued about with no file to settle it.";
  let kinds = ["song", "lyric_video", "picture"];
  return kinds;
}
