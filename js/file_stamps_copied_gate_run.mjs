import { file_stamps_copied_written_compare } from "./file_stamps_copied_written_compare.mjs";
import { file_stamps_copied_answer_assert } from "./file_stamps_copied_answer_assert.mjs";
import { property_get } from "./property_get.mjs";
import { folder_temp } from "./folder_temp.mjs";
export async function file_stamps_copied_gate_run() {
  "Gate: a file taken across into a copy of a folder still stands the same way it stood where it came from. What a file says about itself here is when it was written and how long it is, and everything remembered about a file is remembered against exactly that pair.";
  "This is the one thing the whole gate rests on and the one thing that breaks in silence. The gate freezes the working folder into a copy and asks its questions there, and every answer it has ever worked out about a file it keeps against that file's stamp. Where a copy says a file was written a hair away from when the original says it, nothing is wrong and nothing is reported - every file in the copy simply reads as freshly changed, so every question reads and parses the entire repo again, several runs at once, every time it is asked. Measured before it was fixed: six and a half seconds against one, on the first question alone.";
  "Two ways to break it, one of them not obvious. Asking to the fraction the disk keeps breaks it, because taking a folder across keeps the moments only to the whole millisecond. Cutting the fraction away rather than rounding it breaks it too, and looks just as reasonable - taking the folder across rounds, so cutting matched barely half the repo where rounding matched all of it. Only comparing a real copy against what it came from tells those two apart, which is why this makes one.";
  "The files asked about are made here rather than borrowed from the repo, and that is what lets this be asked anywhere. Where it matters most is inside the frozen copy the gate works in, and every file already sitting there arrived by being copied - so its moment is already a whole millisecond, and copying it again matches however finely it is asked. A borrowed file would have proved nothing exactly where the proof was needed.";
  "Fresh files are also why nobody else can shake this. Several of us write in the one working folder at once, so a borrowed file can move between being asked about and being copied, and the gate would have failed over somebody else's ordinary work.";
  "Each file is then told what moment it was written at, rather than being left with the one it got. Left alone, forty files written one after another all come back with the same fraction of a millisecond, because they land inside a single tick of the clock the disk stamps them from - so the whole run is one draw, not forty. Measured: one run drew a fraction just under a whole millisecond and caught cutting the fraction away everywhere, and the next run drew a fraction under a half and let it through completely. A gate that catches the wrong answer every other time is not a gate. Spreading the moments evenly across a millisecond puts exactly half of them in the half that rounds upward, which is the half where cutting and rounding part company, so both wrong answers are caught every run.";
  let wanted = 40;
  async function lambda_folder(folder_path) {
    let r2 = await file_stamps_copied_written_compare(folder_path, wanted);
    return r2;
  }
  let answer = await folder_temp(lambda_folder);
  let checked = property_get(answer, "checked");
  let rounding_up = property_get(answer, "rounding_up");
  let differing = property_get(answer, "differing");
  let r = file_stamps_copied_answer_assert(differing, checked, rounding_up);
  return r;
}
