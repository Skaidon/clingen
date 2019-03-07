# Purpose

- Play with newer React concepts like Context.
  - Hooks doesn't make sense for this experiment.
  - Context is used throughout, regardless. For a production app, this would be handled differently through props or using something like Redux coupled with Context where appropriate.
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

## Known Issues

- Not all tabs have real content.
  - I stopped when I ran out of new UI patterns to recreate.
- Popover doesn't handle hover events too well.
  - If I was working on this for a real app, I would either resolve this issue or replace the package being used with another or one of my own creation.
- No modals
- No real functionality beyond displaying data.
  - In the console log, I logged one API call and also added that to State. But it is never referenced due to me not knowing where the UI data actually resides.

## Things I would Change/Iterate On

- State management for the UI.
  - Didn't put any in for this, would look at storing state of tabs selected, UIs expanded, etc...
- More reusable components for repeated UI patterns.
  - I just took a section by section approach. There are a few repeated patterns that could be extracted to reusable components rather than hardcoding the HTML for each instance.
- UI Framework
  - I didn't use a popular React UI framework for this as my intent was to get comfortable with latest React and not rely on one package to solve all the problems.
  - For a production project, I would take more time looking at various frameworks to see if any would suit the needs of the app rather than pick packages for each individual feature like I've done here.

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
