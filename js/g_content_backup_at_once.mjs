export function g_content_backup_at_once() {
  "How many files the backup fetches from storage at the same time.";
  "The waiting is on somebody else's machine, so one at a time would spend the whole run idle over a thousand files. All at once asks a bucket for a thousand things in one breath and is answered with refusals rather than files, which reads as missing content.";
  let count = 16;
  return count;
}
