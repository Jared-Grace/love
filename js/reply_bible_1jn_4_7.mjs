export function reply_bible_1jn_4_7() {
  "1 John 4:7 said whole, in the words of the English Bibles nobody owns, lined up. Made by reply_bible_verse_function_new.";
  let read = reply_sequence([
    reply_optional(reply_choice(["dearly", "my"])),
    reply_choice([reply_word_u_v("beloved"), reply_word_u_v("loved")]),
    reply_optional("ones"),
    reply_optional(reply_choice(["let", "lets"])),
    reply_optional(reply_choice([reply_word_us_u_v(), "may"])),
    reply_optional(reply_choice(["have", "we"])),
    reply_phrase_love_for_one_another(),
    reply_word_because_for(),
    reply_optional("the"),
    reply_word_charity_love(),
    reply_choice(["comes", "commeth", "is"]),
    reply_choice(["from", "of"]),
    reply_words("god"),
    reply_optional("and"),
    reply_optional(reply_word_u_v("every")),
    reply_choice(["everyone", "one"]),
    reply_optional("who"),
    reply_optional(reply_choice(["has", "that"])),
    reply_optional(reply_word_love_loves_loveth()),
    reply_word_has_is(),
    reply_optional(reply_choice(["a", "been"])),
    reply_choice([reply_word_begotten_born(), "borne", "child", "loving"]),
    reply_words("of god"),
    reply_optional("he"),
    reply_optional("hath"),
    reply_optional("been"),
    reply_optional("begotten"),
    reply_words("and"),
    reply_optional("has"),
    reply_optional(reply_choice(["doth", "knowledge"])),
    reply_choice(["know", "knoweth", "knows", "of"]),
    reply_words("god"),
  ]);
  let r = reply_bible_verse_whole("1JN04", "7", read);
  return r;
}
