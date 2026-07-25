import { app_sandbox_spinner_preview } from "./app_sandbox_spinner_preview.mjs";
import { week_calendar_preview } from "./week_calendar_preview.mjs";
import { availability_editor_preview } from "./availability_editor_preview.mjs";
export function app_sandbox_previews() {
  "registry of sandbox previews keyed by URL-hash name: add your own file plus one entry here, then open the sandbox app with #<name> — several people can each preview a different thing on the one sandbox app at once";
  let previews = {
    spinner_preview: app_sandbox_spinner_preview,
    week_calendar: week_calendar_preview,
    availability_editor: availability_editor_preview,
  };
  return previews;
}
