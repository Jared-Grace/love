import { readFileSync } from "fs";
import { g_verify_next_across } from "./g_verify_next_across.mjs";
// Multi-book loop state: read the active-chapter list (one chapter code per line)
// and return { books:[{chapter,approved,latest,next,state}], action } via the shared
// g_verify_next_across. action = "write:CHAPTER:KEY" | "wait" | "done".
const ACTIVE_CHAPTERS_PATH = "/media/j/JPM/user/storage/sermon_loop/chapters.txt";
export async function g_verify_loop_check() {
  let chapters = readFileSync(ACTIVE_CHAPTERS_PATH, "utf8")
    .trim()
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  return await g_verify_next_across(chapters);
}
