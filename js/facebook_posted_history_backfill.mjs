import { object_property_names } from "./object_property_names.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_posted_history_path } from "./facebook_posted_history_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read } from "./file_read.mjs";
import { facebook_post_log_runs } from "./facebook_post_log_runs.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { facebook_psalm_posted_path } from "./facebook_psalm_posted_path.mjs";
import { facebook_bible_chapter_posted_path } from "./facebook_bible_chapter_posted_path.mjs";
import { facebook_bible_sermon_posted_path } from "./facebook_bible_sermon_posted_path.mjs";
import { file_append } from "./file_append.mjs";
export async function facebook_posted_history_backfill() {
  arguments_assert(arguments, 0);
  ("Adds to the history of facebook posts the posts made before the history existed, read back from the records and the scheduled runs' log, one line each, oldest first, every one marked backfilled. Answers how many lines it added and which have no link.");
  ("★ IT RUNS ONCE: a history that already holds a backfilled line is refused, so a second run cannot double every past post.");
  ("★ THE PSALM LEDGER DECIDES WHICH VIDEOS WERE POSTED; THE LOG ONLY LENDS THE LINK. The ledger holds every one with its exact time, the log only the runs since 2026-10-19. A chapter, by contrast, is known only from the log, because its record keeps the last one alone - so a chapter's time is its run's start, named run_started_at, except where the record has the exact time.");
  ("★ A LINK THE LOG GIVES TO TWO DIFFERENT POSTS IS LEFT OUT, because at least one of the two is wrong and nothing says which; it is kept beside the line as url_doubtful instead of as url.");
  let path = facebook_posted_history_path();
  if (await file_exists(path)) {
    let held = await file_read(path);
    if (held.includes('"backfilled":true')) {
      throw new Error("the history already holds backfilled lines: " + path);
    }
  }
  let runs = await facebook_post_log_runs();
  let titles_by_url = {};
  for (let run of runs) {
    if (equal(run.url, null)) {
      continue;
    }
    let set = titles_by_url[run.url] ?? new Set();
    set.add(run.posted);
    titles_by_url[run.url] = set;
  }
  function link(run) {
    if (equal(run, undefined) || equal(run.url, null)) {
      let r = {
        url: null,
      };
      return r;
    }
    if (greater_than(titles_by_url[run.url].size, 1)) {
      let r2 = {
        url: null,
        url_doubtful: run.url,
      };
      return r2;
    }
    let r3 = {
      url: run.url,
    };
    return r3;
  }
  let run_by_posted = {};
  for (let run of runs) {
    run_by_posted[run.posted] = run;
  }
  let lines = [];
  let file_path2 = facebook_psalm_posted_path();
  let ledger = await file_read_json_exists_ensure(file_path2);
  for (let title of object_property_names(ledger)) {
    let held = ledger[title];
    lines.push({
      backfilled: true,
      posted_at: held.posted_at,
      kind: "psalm",
      title,
      video_id: held.video_id,
      file_path: held.file_path,
      ...link(run_by_posted[title]),
    });
  }
  let file_path3 = facebook_bible_chapter_posted_path();
  let chapter_record = await file_read_json_exists_ensure(file_path3);
  for (let run of runs) {
    let b2 = /^[A-Z0-9]{3}\d{2}$/.test(run.posted);
    if (not(b2)) {
      continue;
    }
    let exact = equal(chapter_record.chapter_code, run.posted);
    let when = exact
      ? {
          posted_at: chapter_record.posted_at,
        }
      : {
          run_started_at: run.run_started_at,
        };
    lines.push({
      backfilled: true,
      ...when,
      kind: "chapter",
      chapter_code: run.posted,
      ...link(run),
    });
  }
  let file_path4 = facebook_bible_sermon_posted_path();
  let sermon_record = await file_read_json_exists_ensure(file_path4);
  if (not_equal(sermon_record.chapter_code, undefined)) {
    let trying = sermon_record.chapter_code + " " + sermon_record.verses_key;
    lines.push({
      backfilled: true,
      posted_at: sermon_record.posted_at,
      kind: "sermon",
      chapter_code: sermon_record.chapter_code,
      verses_key: sermon_record.verses_key,
      ...link(run_by_posted[trying]),
    });
  }
  function moment(line) {
    let r4 = line.posted_at ?? line.run_started_at;
    return r4;
  }
  function lambda(a, b) {
    let a2 = moment(a);
    let b3 = moment(b);
    let a3 = moment(a);
    let b4 = moment(b);
    let r5 = less_than(a2, b3) ? -1 : greater_than(a3, b4) ? 1 : 0;
    return r5;
  }
  lines.sort(lambda);
  let written_at = new Date().toISOString();
  function lambda2(line) {
    let r6 =
      json_to({
        written_at,
        ...line,
      }) + "\n";
    return r6;
  }
  let text = lines.map(lambda2).join("");
  await file_append(path, text);
  function lambda3(line) {
    let eq = equal(line.url, null);
    return eq;
  }
  function lambda4(line) {
    let r7 = line.title ?? line.chapter_code + " " + (line.verses_key ?? "");
    return r7;
  }
  let no_link = lines.filter(lambda3).map(lambda4);
  let r8 = {
    path,
    added: lines.length,
    no_link,
  };
  return r8;
}
