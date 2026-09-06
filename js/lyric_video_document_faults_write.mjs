import { lyric_video_faults_path } from "./lyric_video_faults_path.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_screen_room } from "./lyric_video_screen_room.mjs";
import { lyric_video_screens_faults } from "./lyric_video_screens_faults.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_faults_write(document, path_output) {
  "$plain document";
  "$plain path_output";
  "Everything a document's cards would be drawn wrong for - a card the frame cannot hold, one that shows for no time, one with nothing on it - written down beside the video as it is made, and handed back.";
  "★ IT IS ASKED HERE BECAUSE HERE IS WHERE THE ANSWER IS ALREADY PAID FOR. Working out where a spoken chapter's cards fall means listening to the long pieces of it, which costs about half a second for every second of sound and is not remembered afterwards - the third of Luke costs a minute and a half, and asking a second time costs the same again. A separate sweep over the whole bible would therefore spend those hours twice to learn something the render already had in its hands. The cards are here, the frame's sizes are here, and the check itself takes no measurable time, so it rides along for nothing.";
  "★ THE SIZES COME OUT OF THE DOCUMENT RATHER THAN OUT OF THE FUNCTION THAT HOLDS THE DEFAULTS, BECAUSE THE DOCUMENT IS WHAT GETS DRAWN. A person changing a lettering size is the commonest next thing to want, and the document is where they change it; a checker reading the defaults instead would keep answering about a video nobody is making. The document holds exactly the five numbers the room is worked out from, so it is handed over as the sizes it is.";
  "★ THE ANSWER IS WRITTEN DOWN EVEN WHEN IT IS EMPTY. A render of the whole bible runs for hours with nobody watching, so the verdict has to outlive the run; and a file left behind from an earlier render, kept because there was nothing new to say, would report faults that have since been mended. A file written every time says what this render found, which is the only thing anybody can act on.";
  "★ IT REPORTS AND STOPS NOTHING. A card the frame cannot hold may be a passage with no better cut anywhere in it, and refusing to make the video would leave a chapter with no video at all rather than one worth looking at. What to do about a fault belongs to whoever reads the list.";
  arguments_assert(arguments, 2);
  let room = lyric_video_screen_room(document);
  let lines = document.lines;
  let faults = lyric_video_screens_faults(lines, room);
  let path_faults = lyric_video_faults_path(path_output);
  await file_overwrite_json(path_faults, faults);
  return faults;
}
