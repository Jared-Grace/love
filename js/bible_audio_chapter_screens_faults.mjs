import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_chapter_screens_timed } from "./bible_audio_chapter_screens_timed.mjs";
import { lyric_video_frame_sizes } from "./lyric_video_frame_sizes.mjs";
import { lyric_video_screen_room } from "./lyric_video_screen_room.mjs";
import { lyric_video_screens_faults } from "./lyric_video_screens_faults.mjs";
export async function bible_audio_chapter_screens_faults(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Every screen of a recorded chapter that would be drawn wrong - clipped at the top, standing over the passage line at the foot, or running off the side - answered without anybody watching the video.";
  "★ THE ONLY WAY TO KNOW A CHAPTER LOOKS RIGHT WAS TO WATCH IT, AND THERE ARE MORE THAN A THOUSAND OF THEM. A person watched the third of Luke and reported the second screen cut off at the top and overlapping the footer. That is the right report and the wrong price: at a chapter apiece, the whole bible cannot be looked at, so the faults that are found are the ones somebody happened to sit through, and the rest ship unseen. The checker for a screen already existed and nothing had ever called it, because nothing knew how to hand it a chapter.";
  "★ THE ROOM IS ASKED FOR IN EXACTLY THE WAY THE RENDERER ASKS FOR IT, WHICH IS WHAT MAKES THE ANSWER WORTH ANYTHING. A checker with its own idea of how big the frame is would report faults that are not there and miss the ones that are, and both would be believed. So the sizes come from the one function that holds them and the room is worked out by the one function that works it out - the same pair the cutting itself uses - and a checker that cannot disagree with the renderer is the only kind worth building.";
  arguments_assert(arguments, 2);
  let screens = await bible_audio_chapter_screens_timed(
    bible_folder,
    chapter_code,
  );
  let sizes = lyric_video_frame_sizes();
  let room = lyric_video_screen_room(sizes);
  let faults = lyric_video_screens_faults(screens, room);
  return faults;
}
