export function app_shared_names() {
  "What each app is called where a person reads it, in plain words - the one place an app's name is written. The front page's cards and the browser tab both read it here, so a name changed here changes in both.";
  "Keyed by the app's short name, the one written into its address and its files. That short name is for the code; a person should never have to read an underscore to find out what they are about to open.";
  "An app absent from here is called by its short name, which is what every app was called before this existed.";
  "The front page gets no card of its own, so its name is the sentence its tab has always carried.";
  let r = {
    index: "Apps for reading the Bible and learning to program",
    bible: "Bible",
    emoji_bible: "Emoji Bible",
    search: "Bible Search",
    original_bible: "Greek and Hebrew Bible",
    ceb_bible: "Cebuano Bible",
    en_learn_bible: "English Bible in Urdu",
    verses: "Verses",
    reply: "Reply",
    next: "Next Passage",
    g: "Gospel Game",
    g_bless: "Prayer Game",
    music: "Music",
    supper: "Lord's Supper",
    autopray: "Auto Pray",
    code: "Code",
    replace: "Replace",
    examples: "Code Examples",
    designs_universal: "Designs",
    privacy_policy: "Privacy Policy",
    sandbox: "Sandbox",
    g_bible: "g Bible",
  };
  return r;
}
