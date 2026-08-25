import { fn_name } from "./fn_name.mjs";
export function app_index_dev_links() {
  "The short list of places worth going straight to while something is being worked on - the one place to add a link so it can be reached from a phone without typing an address.";
  "Typing an address on a phone is the slowest thing in the whole loop: a long one takes longer to peck out than the change it was meant to check took to make, and a single wrong character sends you to a blank page that looks exactly like a broken app. A card is one tap and cannot be mistyped.";
  "These show only on a machine on this same network, so nothing here is ever seen by a reader of the deployed site. That is what makes the list safe to leave half-finished - a link to a chapter nobody has authored yet is a dead card on one phone rather than a dead card on the internet.";
  "Add a line when you want the human to look at something, and take it away once they have. It is meant to be short: a list long enough to need reading has stopped saving the taps it exists to save.";
  "The sandbox is the one line that never comes off, because it is not a thing to look at but the door to all of them. It is opened with no name after the mark on purpose: named, it would have to be edited here every time somebody previewed something else, and unnamed it answers with the list of every preview there is, so a preview added in another file is reachable from this page without this file being touched at all.";
  let r = [
    {
      app_fn: fn_name("app_sandbox"),
      hash: {},
      label: "Sandbox",
      text: "Every preview anybody is working on, listed to pick from - a screen tried out on its own before it is wired into an app",
    },
    {
      app_fn: fn_name("app_g_bless"),
      hash: {},
      label: "Praying game",
      text: "Two streets of people standing at their doors. Pray for anybody you can see, or tap the ground to walk down to the other street. Nothing is saved, so every visit is a street nobody has prayed for yet",
    },
    {
      app_fn: fn_name("app_en_learn_bible"),
      hash: {},
      label: "English from the Bible, in Urdu",
      text: "The Bible in English with every English word explained in Urdu. The page turns to read right to left when the reader's language does, and the buttons say their piece in Urdu rather than in the language being learned",
    },
    {
      app_fn: fn_name("app_ceb_bible"),
      hash: {
        c: "PRO31",
      },
      label: "Cebuano Proverbs 31",
      text: "The first Cebuano chapter with word explanations written by hand rather than generated",
    },
    {
      app_fn: fn_name("app_bible"),
      hash: {
        c: "1JN03",
        v: "17",
        l: "ur+swh+lug+en",
        mode: "chapter",
      },
      label: "Saving the Bible on the phone",
      text: "Four languages open at once. Press Settings, then the offline downloads, to see whether each language reads as its own group now and whether one press really does fetch all of them side by side",
    },
  ];
  return r;
}
