import { lyric_video_subtitles_text } from "../../../js/lyric_video_subtitles_text.mjs";
import { lyric_video_subtitles_text_cases } from "../../../js/lyric_video_subtitles_text_cases.mjs";

("Nine wrong ways of writing the sung lines of a subtitle file, kept so the corpus can be asked again whether it still tells them apart.");

("They write the sung lines only, not the whole file, because the sung lines are the whole of what that corpus pins - the head of the file is sizes and colours somebody is meant to be able to disagree with, and a wrong version of a decision nobody has settled is not a wrong version of anything.");

("The moments are written out here rather than borrowed from the repo's own time writer, because one of these versions is wrong about exactly that writing and a version that fetched it could not be.");

("★ EVERYTHING THESE VERSIONS AGREE WITH THE WRITER ABOUT IS SPELLED OUT AGAIN HERE, AND KEEPING IT LEVEL IS THE WHOLE OF WHAT MAKES THEM PROVE ANYTHING. How far ahead of the singing a card is put up, and where on the frame it stands, are two of those. Both were once left behind when the writer moved: the card was raised out of the middle of the frame and these still said the middle, so every one of the nine was refused by every case for that alone, and the corpus was passing while telling none of them apart. A version refused for somebody else's reason is not a version anything was learned from - so when the writer changes something all nine share, it is copied across here in the same commit or the proof quietly stops being one.");

function padded(value, width) {
  let text = String(value);
  while (text.length < width) {
    text = "0" + text;
  }
  return text;
}

function time_of(seconds, options) {
  let safe =
    typeof seconds === "number" && isFinite(seconds) ? Math.max(seconds, 0) : 0;
  let hundredths = Math.round(safe * 100);
  let whole = Math.floor(hundredths / 100);
  let rest = options.time_seconds_whole ? 0 : hundredths - whole * 100;
  let hours = Math.floor(whole / 3600);
  let minutes = Math.floor((whole - hours * 3600) / 60);
  let left = whole - hours * 3600 - minutes * 60;
  let written =
    hours +
    ":" +
    padded(minutes, 2) +
    ":" +
    padded(left, 2) +
    "." +
    padded(rest, 2);
  return written;
}

function place_of(options) {
  if (options.no_placement) {
    return "";
  }
  if (options.alignment_not_placed) {
    return "{\\an5\\fad(260,320)}";
  }
  if (options.no_fade) {
    return "{\\pos(540,829)}";
  }
  let placed = "{\\pos(540,829)\\fad(260,320)}";
  return placed;
}

function number_is_local(value) {
  let is = typeof value === "number" && isFinite(value);
  return is;
}

function kept_is(line, options) {
  if (options.keep_all_zero_timed) {
    return true;
  }
  if (options.end_only) {
    let ended = number_is_local(line.end);
    return ended;
  }
  if (options.start_only) {
    let started = number_is_local(line.start);
    return started;
  }
  if (options.worth_anything) {
    let worth = Boolean(line.start) && Boolean(line.end);
    return worth;
  }
  let both = number_is_local(line.start) && number_is_local(line.end);
  return both;
}

function reader_of(options) {
  function answer(one) {
    let place = place_of(options);
    let events = [];
    for (let line of one.document.lines) {
      if (!kept_is(line, options)) {
        continue;
      }
      let lead = 0.4;
      let first = (options.ends_crossed ? line.end : line.start) - lead;
      let second = (options.ends_crossed ? line.start : line.end) - lead;
      let event =
        "Dialogue: 0," +
        time_of(first, options) +
        "," +
        time_of(second, options) +
        ",Lyric,,0,0,0,," +
        place +
        line.text;
      events.push(event);
    }
    return events;
  }
  return answer;
}

export const red_proof = {
  fn: lyric_video_subtitles_text.name,
  cases: lyric_video_subtitles_text_cases,
  expected: "events",
  described: "why",
  wrong: {
    end_only: reader_of({ end_only: true }),
    start_only: reader_of({ start_only: true }),
    keep_all_zero_timed: reader_of({ keep_all_zero_timed: true }),
    worth_anything: reader_of({ worth_anything: true }),
    no_placement: reader_of({ no_placement: true }),
    alignment_not_placed: reader_of({ alignment_not_placed: true }),
    no_fade: reader_of({ no_fade: true }),
    time_seconds_whole: reader_of({ time_seconds_whole: true }),
    ends_crossed: reader_of({ ends_crossed: true }),
  },
  allowed: {},
};
