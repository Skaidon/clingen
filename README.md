# Purpose

- Play with newer React concepts like Context.
  - Hooks doesn't make sense for this experiment.
- Play with various UI React components that Ihaven't had a chance to utilize during my full-time job.
  - `react-aria-tabpanel` for the tabs.
    - Chosen for it's accessibility features.
      - Select a tab, use you left/right arrow keys to switch tabs.
  - `react-awesome-popover` for the popover hover copy.
    - Chosen because it allowed me to style everythign quickly.
  - `react-css-grid` for the multi column layouts.
    - Chosen because I haven't had an opportunity to use CSS Grid yet.
  - `rfs` for responsive font sizes.
    - Wanted to try this out. It only really effects large fonts, so I bumped up the font of the main `h1` on the page to show this working.
    - The font starts off as `2.5rem` and as you shrink the browser window horizontally, the font-size gets altered by media queries.

## Inspiration:

![Screenshot taken from tool](media/clingen_base_page.png)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
The React Devtools will open.

### `npm run start`

Same as above, but without the React Devtools opening.

## Known Issues

- Not all tabs have real content.
  - I stopped when I ran out of new UI patterns to recreate.
- No modals
