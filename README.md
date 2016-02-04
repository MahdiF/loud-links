# Loud Links
The library creates HTML5 audio element and uses it to play mp3/ogg audio files which is currently [supported](http://caniuse.com/#feat=audio) in all browsers.

## [Demo](http://loudlinks.rocks)
## [Download](https://loudlinks.rocks/js/loudlinks-1.0.min.js)

------------------------

## Usage

### Step 1

Include the minified Javascript right before the `</body>` tag of your page.

```html
...
<script src="js/loudlinks-1.0.min.js"></script>
</body>
</html>
```

### Step 2

Add the class **“loud-link-hover”** to any link/element that you want to give a sound on hover, or add the class **“loud-link-click”** to any link/element that you want to give a sound on click.

```html
<div class=“loud-link-hover”> ... </div> <!-- sound on hover -->
<div class=“loud-link-click”> ... </div> <!-- sound on click -->
```

### Step 3

Add the attribute **data-sound”** to the element with absolute URL of your sound file, substituting `{{type}}` for where `mp3` or `ogg` would be (e.g. `http://example.com/audio/noise.{{type}}` ), or just the name of your sound file without the extension if your files are located at the root of your website under `sounds/` folder with `mp3/` and `ogg/` subdirectories.

```html
<div class=“loud-link-hover” data-sound="http://example.com/audio/noise.{{type}}"> ... </div> <!-- For absolute URLs, {{type}} will be replaced with '.mp3' and '.ogg' -->
<div class=“loud-link-hover” data-sound="noise"> ... </div> <!-- Look for /sounds/mp3/noise.mp3 and /sounds/ogg/noise.ogg at the root of your website directory. -->
```
