export function app_sandbox_previews() {
  "registry of sandbox previews keyed by URL-hash name: add your own file plus one entry here, then open the sandbox app with #<name> — several people can each preview a different thing on the one sandbox app at once";
  "WHAT IS KEPT HERE IS A WAY TO FETCH EACH PREVIEW RATHER THAN THE PREVIEW ITSELF, so a visit downloads the one preview the address names instead of all of them. The page has only ever shown one at a time, and until now every registration was paid for by everybody: seven previews had grown it to a hundred and forty five KiB, of which two thirds could be reached by exactly one of the seven.";
  "That also stops the ratchet the byte ceiling was climbing. An eighth preview now costs a visitor who does not open it nothing at all, so the ceiling stops being raised once per registration and goes back to meaning what it says.";
  "Each entry is its own small function naming its file outright, and neither half of that is decoration. The builder has to be able to READ which file is wanted before it can set that file aside as a piece of its own to fetch; a path put together while running is a path it cannot read, and what it does with one of those is pack the whole folder in, which is the opposite of what this is for.";
  async function spinner_load() {
    let m = await import("./app_sandbox_spinner_preview.mjs");
    return m.app_sandbox_spinner_preview;
  }
  async function week_calendar_load() {
    let m = await import("./week_calendar_preview.mjs");
    return m.week_calendar_preview;
  }
  async function availability_editor_load() {
    let m = await import("./availability_editor_preview.mjs");
    return m.availability_editor_preview;
  }
  async function song_image_choose_load() {
    let m = await import("./song_image_choose_preview.mjs");
    return m.song_image_choose_preview;
  }
  async function song_image_audit_load() {
    let m = await import("./song_image_audit_preview.mjs");
    return m.song_image_audit_preview;
  }
  async function second_takes_load() {
    let m = await import("./psalms_second_takes_preview.mjs");
    return m.psalms_second_takes_preview;
  }
  async function dream_trace_load() {
    let m = await import("./bible_dream_trace_preview.mjs");
    return m.bible_dream_trace_preview;
  }
  let previews = {
    spinner_preview: spinner_load,
    week_calendar: week_calendar_load,
    availability_editor: availability_editor_load,
    song_image_choose: song_image_choose_load,
    song_image_audit: song_image_audit_load,
    second_takes: second_takes_load,
    dream_trace: dream_trace_load,
  };
  return previews;
}
