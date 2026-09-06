import { lyric_video_screens_faults_cases } from "./lyric_video_screens_faults_cases.mjs";
import { lyric_video_frame_sizes } from "./lyric_video_frame_sizes.mjs";
import { lyric_video_screen_room } from "./lyric_video_screen_room.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_screens_faults } from "./lyric_video_screens_faults.mjs";
import { list_map } from "./list_map.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_video_screens_faults_cases_gate_run() {
  "QA gate: every run of screens the corpus writes down is answered with exactly the faults it says, on the frame these videos are really drawn on.";
  "★ NOTHING ELSE WOULD EVER NOTICE THIS READER GOING QUIET. Its answer is written beside each video as the video is made and gathered afterwards into one verdict over the whole bible, and a reader that had stopped finding anything would turn that verdict green - a bible reported sound because nothing looked at it. The sweep beneath cannot tell a right answer from no answer, which is the whole reason this stands here.";
  "★ THE ROOM IS BUILT THE WAY THE RENDERER BUILDS IT rather than written down as numbers, so the cases and the videos move together. A lettering size changed in one place would otherwise leave the cases passing against a frame that no longer exists.";
  "★ ONLY THE NAMES OF THE FAULTS ARE COMPARED, NOT THE SENTENCES THEY CARRY. What must not change is which faults are found and in what order; the wording that explains one to a person is meant to be improved, and a gate that froze it would make every improvement look like a break.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = lyric_video_screens_faults_cases();
  let sizes = lyric_video_frame_sizes();
  let room = lyric_video_screen_room(sizes);
  function fault_name(f) {
    let name = property_get(f, "fault");
    return name;
  }
  function answer(c) {
    let screens = property_get(c, "screens");
    let faults = lyric_video_screens_faults(screens, room);
    let names = list_map(faults, fault_name);
    return names;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "faults",
    "why",
    "lyric video screens faults",
  );
  return r;
}
