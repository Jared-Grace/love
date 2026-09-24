import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
import { round } from "./round.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_map } from "./list_map.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_song_lines_moved_write(
  name,
  numbers,
  starts,
) {
  arguments_assert(arguments, 3);
  ("$plain name");
  ("$plain numbers");
  ("$plain starts");
  ("Moves chosen lines of a song's timing document to the moments a person saw them begin, carrying each line's words along, and hands back what every moved line spans now.");
  ("★ IT IS FOR THE LINES THE LISTENING GOT WRONG, NOT FOR THE WHOLE SONG. Hearing a song places most lines within a fifth of a second and then loses its place around a passage that is not in the lyrics - a spoken verse, a long instrumental - so a handful of lines land seconds late while the rest are right. Hearing again throws away the good lines with the bad; moving only the named ones keeps them.");
  ("★ THE LINES ARE NUMBERED AS A PERSON COUNTS THEM, FROM ONE, because the numbers come from somebody watching the video and saying which lines are off, and they count the first line as one.");
  ("★ A MOVED LINE'S WORDS KEEP THEIR SHARE OF THE LINE AND ARE SQUEEZED TO FIT BEFORE THE NEXT LINE. The listening that misplaced a line also stretched it - one line swallowed a whole spoken verse and ran twenty seconds - so its length is not trusted either. It is held to the longest length of any line that was not moved, which is how long a line of this song actually takes to sing, and to a sliver short of where the next line begins, whichever is shorter.");
  ("★ BOTH LISTS ARE READ AS NUMBERS BEFORE ANYTHING IS ADDED TO THEM. A command line hands every argument over as text, and adding to text joins rather than adds.");
  ("Every line's start and end are then worked out again the ordinary way, each ending where the next begins, so the line before a moved one gives way to it.");
  let gap = 0.3;
  let folder = lyric_video_songs_folder();
  let path_document = path_join([folder, name + ".json"]);
  let document = await file_read_json(path_document);
  let lines = document.lines;
  let list = text_split_comma(numbers);
  let numbers_list = list_map(list, Number);
  let list2 = text_split_comma(starts);
  let starts_list = list_map(list2, Number);
  let b = equal(numbers_list.length, starts_list.length);
  if (not(b)) {
    error(
      "there are " +
        numbers_list.length +
        " lines and " +
        starts_list.length +
        " starts",
    );
  }
  let moved = {};
  for (let place = 0; less_than(place, numbers_list.length); place++) {
    moved[subtract(numbers_list[place], 1)] = starts_list[place];
  }
  function span(line) {
    let words = line.words;
    let r = subtract(words[subtract(words.length, 1)].end, words[0].start);
    return r;
  }
  let longest = 0;
  for (let index = 0; less_than(index, lines.length); index++) {
    if (equal(moved[index], undefined)) {
      let b2 = span(lines[index]);
      longest = math_max(longest, b2);
    }
  }
  let line_starts = [];
  for (let index = 0; less_than(index, lines.length); index++) {
    let s = moved[index];
    let start_line = equal(s, undefined) ? lines[index].start : s;
    line_starts.push(start_line);
  }
  let report = [];
  for (let index = 0; less_than(index, lines.length); index++) {
    let start = moved[index];
    if (equal(start, undefined)) {
      continue;
    }
    let line = lines[index];
    let words = line.words;
    let first = words[0].start;
    let before = span(line);
    let after = before;
    after = math_min(after, longest);
    if (less_than(index + 1, lines.length)) {
      let left = subtract(line_starts[index + 1], start);
      let b3 = subtract(left, gap);
      after = math_min(after, b3);
    }
    let scale = greater_than(before, 0) ? divide(after, before) : 1;
    function placed(seconds) {
      let left2 = subtract(seconds, first);
      let n = multiply(start + multiply(left2, scale), 1000);
      let top = round(n);
      let r = divide(top, 1000);
      return r;
    }
    for (let word of words) {
      word.start = placed(word.start);
      word.end = placed(word.end);
    }
    report.push({
      line: index + 1,
      start,
      end: words[subtract(words.length, 1)].end,
      text: line.text,
    });
  }
  let texts = list_map_property(lines, "text");
  let timed = lyric_timing_lines_timed(line_starts, texts, document.duration);
  for (let index = 0; less_than(index, lines.length); index++) {
    lines[index].start = timed[index].start;
    lines[index].end = timed[index].end;
  }
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    longest,
    moved: report,
  };
  return r;
}
