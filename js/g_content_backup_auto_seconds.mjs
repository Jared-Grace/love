export function g_content_backup_auto_seconds() {
  "How long the backup waits between passes.";
  "An hour. The content changes when somebody sits down and reviews a chapter, which is minutes of work at a time, so an hour loses at most one sitting - and a pass reads every file in the bucket, which is not something to do every minute for a folder that is usually unchanged.";
  let seconds = 3600;
  return seconds;
}
