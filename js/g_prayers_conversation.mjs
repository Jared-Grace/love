export function g_prayers_conversation() {
  "GENERIC fallback PETITION strings for the conversation-closing prayer turn — used only when a conversation has no turn `prayer_text`s to assemble from. person-neutral intercessions for the person + the mission; each becomes 'God, please <petition>, Amen' via g_prayer_petition. PLACEHOLDER: the real prayer choices come from the turns' own `prayer_text`";
  let petitions = [
    "soften their heart to receive Your love",
    "open their eyes to see who You are",
    "let Your Spirit draw them to You",
    "let Your word take root in them",
    "bring them to trust in what Jesus did for them",
    "give me boldness and love to keep sharing",
  ];
  return petitions;
}
