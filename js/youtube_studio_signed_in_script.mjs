export function youtube_studio_signed_in_script() {
  "The small piece of javascript that, pasted into the youtube studio page somebody is already signed in on, gives that page three things: proof of who is asking, a way to put a question to studio, and a way to write words under one video.";
  "It is a second script rather than more lines in the first one because studio is a different place. The words a playlist carries are set from the ordinary youtube page and the words a video carries are set from studio, and each proof of who is asking names the place it was made for - a proof made for one is refused by the other. Two scripts say that; one script with a place hidden inside it would not.";
  "THE SHAPE OF THE QUESTION HAS NOT BEEN WATCHED GOING PAST. It is written from what studio's own page is understood to send, and understood is not the same as seen. So the batch stops at the first refusal and hands back what studio said, rather than asking the same wrong question thirteen hundred times.";
  "Nothing here takes a video down, and nothing here reads. It writes words under a video that has none, and the reading back is done from outside by anybody with the address, which is the only check worth having: studio saying yes is studio's word, and the page a listener lands on is the fact.";
  "It is kept as words rather than as a file to be loaded because the page refuses to fetch anything from elsewhere, so the only way in is to be pasted.";
  let lines = [
    "window.studio_hash = async function () {",
    "  const cookie = document.cookie.split('; ').find(c => c.startsWith('SAPISID=') || c.startsWith('__Secure-3PAPISID='));",
    "  const value = cookie.split('=').slice(1).join('=');",
    "  const origin = 'https://studio.youtube.com';",
    "  const ts = Math.floor(Date.now() / 1000);",
    "  const bytes = new TextEncoder().encode(ts + ' ' + value + ' ' + origin);",
    "  const digest = await crypto.subtle.digest('SHA-1', bytes);",
    "  const hex = [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');",
    "  return 'SAPISIDHASH ' + ts + '_' + hex;",
    "};",
    "window.studio_ask = async function (name, ask) {",
    "  const cfg = window.ytcfg.data_;",
    "  const body = Object.assign({}, ask, { context: cfg.INNERTUBE_CONTEXT });",
    "  const res = await fetch('/youtubei/v1/' + name + '?key=' + cfg.INNERTUBE_API_KEY + '&alt=json', {",
    "    method: 'POST', credentials: 'include',",
    "    headers: {",
    "      'Content-Type': 'application/json',",
    "      'Authorization': await window.studio_hash(),",
    "      'X-Origin': 'https://studio.youtube.com',",
    "      'X-Goog-AuthUser': String(cfg.SESSION_INDEX || 0),",
    "      'X-Goog-PageId': cfg.DELEGATED_SESSION_ID || '',",
    "    },",
    "    body: JSON.stringify(body),",
    "  });",
    "  const json = await res.json();",
    "  return json;",
    "};",
    "window.video_description_set = async function (video_id, description) {",
    "  const json = await window.studio_ask('video_manager/metadata_update', {",
    "    externalVideoId: video_id,",
    "    description: { newDescription: description, newDescriptionMetadata: { categoryId: 0 } },",
    "  });",
    "  if (json.error) { return 'refused: ' + json.error.message; }",
    "  if (json.overallResult && json.overallResult.status !== 'STATUS_SUCCEEDED') { return 'refused: ' + JSON.stringify(json.overallResult); }",
    "  return 'written';",
    "};",
    "window.psalm_video_descriptions_apply = async function () {",
    "  const written = [];",
    "  for (const item of window.psalm_videos) {",
    "    const said = await window.video_description_set(item.video_id, item.description);",
    "    if (said !== 'written') { return JSON.stringify({ written: written.length, stopped_at: item.video_id, said: said }); }",
    "    written.push(item.video_id);",
    "  }",
    "  return JSON.stringify({ written: written.length, stopped_at: null, said: 'all of this piece' });",
    "};",
  ];
  let script = lines.join("\n");
  return script;
}
