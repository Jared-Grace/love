import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { g_verify_active_chapters_path } from "./g_verify_active_chapters_path.mjs";
import { g_verify_queue_path } from "./g_verify_queue_path.mjs";
import { readFileSync, writeFileSync } from "fs";
import { file_exists } from "./file_exists.mjs";
import { g_verify_book_active_chapter } from "./g_verify_book_active_chapter.mjs";
import { g_sermon_generate_chapter_exists } from "./g_sermon_generate_chapter_exists.mjs";
let ACTIVE_PATH = g_verify_active_chapters_path();
let QUEUE_PATH = g_verify_queue_path();
export async function g_verify_queue_advance() {
  "When an active book is fully done (its last chapter written AND approved), promote the next book from next_books.txt into that book's slot in chapters.txt — so a completed book hands off to the next queued one with no manual swap. next_books.txt is the user's curated order (author variety); book SELECTION stays their choice, only the hand-off is automated. No-op if nothing is done or the queue is empty. A queued book whose source is missing blocks its own promotion so the error surfaces, rather than being silently dropped.";
  let active = [];
  let active_there = await file_exists(ACTIVE_PATH);
  if (active_there) {
    function lambda(s) {
      let r2 = s.trim();
      return r2;
    }
    active = readFileSync(ACTIVE_PATH, "utf8")
      .trim()
      .split("\n")
      .map(lambda)
      .filter(Boolean);
  }
  let queue = [];
  let queue_there = await file_exists(QUEUE_PATH);
  if (queue_there) {
    function lambda2(s) {
      let r3 = s.trim();
      return r3;
    }
    queue = readFileSync(QUEUE_PATH, "utf8")
      .trim()
      .split("\n")
      .map(lambda2)
      .filter(Boolean);
  }
  let promoted = [];
  let next_active = [];
  for (let anchor of active) {
    let state = await g_verify_book_active_chapter(anchor);
    let done = equal(state.action, "done");
    let promote = false;
    if (done && greater_than(queue.length, 0)) {
      promote = await g_sermon_generate_chapter_exists(queue[0]);
    }
    if (promote) {
      let promotion = queue.shift();
      promoted.push({
        from: anchor,
        to: promotion,
      });
      next_active.push(promotion);
    } else {
      next_active.push(anchor);
    }
  }
  if (greater_than(promoted.length, 0)) {
    writeFileSync(ACTIVE_PATH, next_active.join("\n") + "\n", "utf8");
    let queue_text = "";
    if (greater_than(queue.length, 0)) {
      queue_text = queue.join("\n") + "\n";
    }
    writeFileSync(QUEUE_PATH, queue_text, "utf8");
  }
  let r = {
    promoted,
    active: next_active,
    queue_remaining: queue,
  };
  return r;
}
