# AMAC Lifting Services Website

This workspace contains a simple one-page website for **AMAC Lifting Services**. The design uses the provided logos located in the `image/` directory and follows a modern, construction-themed aesthetic with the brand colours (#ff751f, black, white).

## Structure

- `index.html` &ndash; single page with hero, about, services, and contact sections.
- `css/styles.css` &ndash; main stylesheet for typography, layout, and responsive navigation.
- `js/main.js` &ndash; lightweight script to control the mobile navigation toggle.
- `image/amac-text.svg` &ndash; text-only logo used in the navbar.
- `image/amac-full.svg` &ndash; full logo used in hero and footer.

## Development

Open `index.html` in a browser or use a local server:

```bash
# from workspace root
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- Navigation links smoothly scroll to sections.
- The site is responsive, with a hamburger menu on narrow screens.
- Lorem ipsum placeholder text is used; replace with real content as needed.

---

Feel free to extend the site or integrate a build process later.