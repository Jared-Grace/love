import { fn_name } from "./fn_name.mjs";
import { app_shared_g_dev_index_hash_name } from "./app_shared_g_dev_index_hash_name.mjs";
import { hash_pairs_text } from "./hash_pairs_text.mjs";
export function app_index_dev_links() {
  "The short list of places worth going straight to while something is being worked on - the one place to add a link so it can be reached from a phone without typing an address.";
  "Typing an address on a phone is the slowest thing in the whole loop: a long one takes longer to peck out than the change it was meant to check took to make, and a single wrong character sends you to a blank page that looks exactly like a broken app. A card is one tap and cannot be mistyped.";
  "These show only on a machine on this same network, so nothing here is ever seen by a reader of the deployed site. That is what makes the list safe to leave half-finished - a link to a chapter nobody has authored yet is a dead card on one phone rather than a dead card on the internet.";
  "Add a line when you want the human to look at something, and take it away once they have. It is meant to be short: a list long enough to need reading has stopped saving the taps it exists to save.";
  "The sandbox is the one line that never comes off, because it is not a thing to look at but the door to all of them. It is opened with no name after the mark on purpose: named, it would have to be edited here every time somebody previewed something else, and unnamed it answers with the list of every preview there is, so a preview added in another file is reachable from this page without this file being touched at all.";
  "The praying game is opened at its own DIRECTORY, for the same reason and by the same trick as the sandbox. It used to land on the street, which was one tap to the thing being worked on and no taps at all to anything else - and that game now has several ways in, each of them a world set up differently, so a card naming one of them would have to be re-edited here every time the work moved to another. The directory names them all, and it lists them by asking the game rather than by being told, so an opening added in another file is one tap from this page without this file being touched.";
  "Nothing is lost by the extra tap. The directory is a page of cards exactly like this one, and the street is the first card on it - so the way in is still two taps and it is now two taps to every other way in as well.";
  "Each hash is written as the TEXT after the mark rather than as an object of values, because those two shapes are both hashes and only one of them can be built from an object. A chapter is a run of pairs, and the pairs are still built by name here so no comma or equals sign is spelled by hand; a dev route is a bare word, and the word is asked for from the file that owns it. A card taking only the pairs could not reach a route at all.";
  let r = [
    {
      app_fn: fn_name("app_sandbox"),
      hash_name: "",
      label: "Sandbox",
      text: "Every preview anybody is working on, listed to pick from - a screen tried out on its own before it is wired into an app",
    },
    {
      app_fn: fn_name("app_g_bless"),
      hash_name: app_shared_g_dev_index_hash_name(),
      label: "Praying game",
      text: "Every way into the praying game, listed to pick from. The street opens past the prayer at the door so it is not said carelessly; the other openings hand you a world already part way along, to save praying your way back to the thing you came to look at. Nothing is saved, so every visit is a street nobody has prayed for yet",
    },
    {
      app_fn: fn_name("app_en_learn_bible"),
      hash_name: "",
      label: "English from the Bible, in Urdu",
      text: "The Bible in English with every English word explained in Urdu. The page turns to read right to left when the reader's language does, and the buttons say their piece in Urdu rather than in the language being learned",
    },
    {
      app_fn: fn_name("app_ceb_bible"),
      hash_name: hash_pairs_text({
        c: "PRO31",
      }),
      label: "Cebuano Proverbs 31",
      text: "The first Cebuano chapter with word explanations written by hand rather than generated",
    },
    {
      app_fn: fn_name("app_bible"),
      hash_name: hash_pairs_text({
        c: "1JN03",
        v: "17",
        l: "ur+swh+lug+en",
        mode: "chapter",
      }),
      label: "Saving the Bible on the phone",
      text: "Four languages open at once. Press Settings, then the offline downloads, to see whether each language reads as its own group now and whether one press really does fetch all of them side by side",
    },
  ];
  return r;
}
