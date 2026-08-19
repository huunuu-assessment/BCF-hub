# BCF Facilitator Hub — Setup Instructions

This is a working shell. It has the lock and login built in, and six pages
with placeholder documents so you can see how everything behaves. No real
content is in here yet, that gets added afterwards.

## 1. Get it onto Netlify

Same process as the BCF assessment site.

1. Create a new GitHub repository (e.g. `BCF--huunuu-hub`).
2. Upload all the files in this folder to that repository.
3. In Netlify, click "Add new site" then "Import an existing project" and
   connect it to that repository.
4. Netlify will deploy it and give you a web address ending in
   `.netlify.app`. You can rename this later if you want a nicer address.

## 2. Turn on the login system

1. In your new Netlify site, go to **Site configuration > Identity**.
2. Click **Enable Identity**.
3. Under **Registration preferences**, set it to **Invite only**. This is
   the important step, it stops anyone signing themselves up.

## 3. Invite your facilitators

1. Still in the Identity section, click **Invite users**.
2. Type in a facilitator's email address and send the invite.
3. They will get an email asking them to set a password. Once they do,
   they can log into the hub.
4. Repeat for each facilitator. To remove someone later, delete them from
   this same list.

## 4. Adding real content later

Each page (Facilitator Guide, Forms and Documents, Marketing Materials,
Blogs) currently shows placeholder rows like this:

    Document name .......... [Download]

To add a real file:
1. Upload the actual PDF, Word file, spreadsheet or image into the
   GitHub repository, in a folder called `files`.
2. In the page's HTML, find the matching placeholder row and change the
   `href="#"` to point to the file, e.g. `href="files/facilitator-guide.pdf"`.
3. Save and Netlify will redeploy automatically within a minute or two.

I'm happy to do this part for you whenever you have real files ready,
just send them over and tell me which section they belong in.

## What's already decided

- Sections: Welcome, Facilitator Guide, Forms and Documents, Marketing
  Materials, How to Become Accredited, Blogs, plus a tile linking out to
  the huunuu.com shop.
- The accreditation page explains the process and links out to the
  existing assessment site (bigconversationframeworkassessment.netlify.app)
  rather than trying to merge logins, since that's a much bigger job for
  little benefit.
- Colours and layout use the huunuu brand palette (raspberry, soft pink,
  charcoal, mauve).
