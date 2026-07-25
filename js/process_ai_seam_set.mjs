export function process_ai_seam_set() {
  "Marks this process as the Claude seam, ai.mjs, so functions that would launch an editor print to the terminal instead";
  process.env.love_ai_seam = "1";
}
