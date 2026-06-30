# Derleen Saini — Portfolio

A single-page portfolio website. Editorial style in burgundy + cream, with bold
serif headers (Playfair Display) and a script accent (Dancing Script).

## 📂 What's in here

| File | What it's for |
|------|----------------|
| **`content.js`** | ✏️ **Edit this to change any wording.** All text lives here. |
| `index.html` | Page structure (you rarely need to touch this). |
| `styles.css` | Colors, fonts, spacing. Edit the `:root` block at the top to change colors. |
| `main.js` | Renders your content into the page. No need to edit. |
| `assets/` | Your photo, résumé PDF, and any leadership photos. |

## ▶️ How to view it

Double-click **`index.html`** to open it in your browser.

> The résumé viewer and photos load best when served. If the résumé preview
> looks blank when opening the file directly, run this once in Terminal from
> this folder, then visit http://localhost:8000 :
>
> ```bash
> python3 -m http.server 8000
> ```

## ✏️ How to change the wording

1. Open **`content.js`** in any text editor (TextEdit, VS Code, etc.).
2. Change the text between the `"quotation marks"`.
3. Keep the quotation marks and the commas at the end of each line.
4. Save the file and refresh your browser.

Lines starting with `//` are notes to you — they don't appear on the site.

## 🖼️ How to add your leadership photos

1. Put your photo files in the **`assets`** folder
   (e.g. `assets/leadership1.jpg`).
2. Open `content.js` and find the `leadership` → `photos` section.
3. Replace the empty `""` with your file path and add a caption:

   ```js
   photos: [
     { src: "assets/leadership1.jpg", caption: "Diwali culture show, 2023" },
     { src: "assets/leadership2.jpg", caption: "Bhangra team performance" },
     { src: "", caption: "Add a caption for this photo" },
   ],
   ```

Empty slots show a dashed placeholder box until you add a photo.

## 📄 Updating your résumé

Replace **`assets/Derleen_Saini_Resume.pdf`** with a new PDF of the same name,
or change the `resume.file` path in `content.js`.

## 🎨 Changing colors

Open `styles.css` and edit the color values in the `:root { ... }` block at the
very top (e.g. `--burgundy-800`, `--gold`, `--cream`).

## 🌐 Publishing it online (free options)

- **Netlify Drop** — drag this whole folder onto https://app.netlify.com/drop
- **GitHub Pages** — push the folder to a repo and enable Pages
- **Vercel** — import the folder at https://vercel.com
