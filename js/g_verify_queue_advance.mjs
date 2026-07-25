import { readFileSync, writeFileSync } from "fs";
import { file_exists } from "./file_exists.mjs";
import { g_verify_book_active_chapter } from "./g_verify_book_active_chapter.mjs";
import { g_sermon_generate_chapter_exists } from "./g_sermon_generate_chapter_exists.mjs";
const ACTIVE_PATH = "/media/j/JPM/user/storage/sermon_loop/chapters.txt";
const QUEUE_PATH = "/media/j/JPM/user/storage/sermon_loop/next_books.txt";
async function sermon_loop_lines_read(path) {
  ("Read a newline-list file into trimmed non-empty codes; [] when the file is absent.");
  let there = await file_exists(path);
  if (!there) return [];
  let text = readFileSync(path, "utf8");
  let rows = text.trim().split("\n");
  let trimmed = rows.map(function (s) {
    return s.trim();
  });
  let kept = trimmed.filter(Boolean);
  return kept;
}
export async function g_verify_queue_advance() {
  ("When an active book is fully done (last chapter written AND approved), promote the next book from next_books.txt into its slot in chapters.txt — so a completed book hands off to the next queued one with no manual swap. next_books.txt is the user's curated order (author variety); book SELECTION stays their choice, only the hand-off is automated. No-op if nothing is done or the queue is empty. A queued book whose source is missing blocks its own promotion (so the error surfaces) rather than being silently dropped.");
  let active = await sermon_loop_lines_read(ACTIVE_PATH);
  let queue = await sermon_loop_lines_read(QUEUE_PATH);
  let promoted = [];
  let next_active = [];
  for (let anchor of active) {
    let state = await g_verify_book_active_chapter(anchor);
    let done = state.action === "done";
    let has_next = queue.length > 0;
    let source_ready = has_next ? await g_sermon_generate_chapter_exists(queue[0]) : false;
    if (done && has_next && source_ready) {
      let promotion = queue.shift();
      promoted.push({ from: anchor, to: promotion });
      next_active.push(promotion);
    } else {
      next_active.push(anchor);
    }
  }
  if (promoted.length > 0) {
    writeFileSync(ACTIVE_PATH, next_active.join("\n") + "\n", "utf8");
    let queue_text = queue.length > 0 ? queue.join("\n") + "\n" : "";
    writeFileSync(QUEUE_PATH, queue_text, "utf8");
  }
  let r = {
    promoted,
    active: next_active,
    queue_remaining: queue,
  };
  return r;
}
