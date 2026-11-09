export async function facebook_page_main_text_names_hidden(page) {
  "The text of the main part of the open facebook page, with every person's name replaced by * first - so text read off a profile, a post or its comments can leave this machine without anyone's name in it.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ A NAME IS FOUND BY WHERE IT SITS, NOT BY WHAT IT SPELLS: on facebook a person's name is a link to their profile - in a friends list, as a comment's author, as a tag in a post - and the profile's own name is its main heading. Hiding those hides names on parts of the page nobody has looked at yet, which no list of words could do.";
  "★ A PROFILE LINK IS ONE WORD OF PATH: facebook.com/someone, profile.php?id=, people/, or a group member's user/ - while the page's own tabs (someone/about, someone/friends) are two words and stay readable.";
  "★ IT CHANGES THE PAGE ITSELF: the caller closes the browser after reading, so nothing is left altered for anybody.";
  "A name typed as plain words with no link - `with my sister Ana` - is not caught here.";
  let text = await page.evaluate(`(function(){
    var main = document.querySelector('[role=main]') || document.body;
    var system = ['photo','photos','watch','reel','reels','groups','events','pages','hashtag','marketplace','gaming','stories','story.php','permalink.php','sharer','help','policies','privacy','settings','notifications','messages','friends','bookmarks','search','login','recover','ads','business','saved'];
    function is_profile(a){
      var h = a.getAttribute('href') || '';
      var u; try { u = new URL(h, location.href) } catch(e) { return false }
      if (!/(^|\\.)facebook\\.com$/.test(u.hostname)) return false;
      var parts = u.pathname.split('/').filter(function(p){return p.length>0});
      if (parts[0] === 'profile.php') return !u.searchParams.get('sk');
      if (parts[0] === 'people') return true;
      if (parts[0] === 'groups' && parts[2] === 'user') return true;
      return parts.length === 1 && system.indexOf(parts[0].toLowerCase()) < 0;
    }
    main.querySelectorAll('a[href]').forEach(function(a){ if (is_profile(a)) a.textContent = '*' });
    document.querySelectorAll('h1').forEach(function(h){ h.textContent = '*' });
    return main.innerText;
  })()`);
  return text;
}
