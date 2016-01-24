# Loud Links
The library creates HTML5 audio element and uses it to play mp3/ogg audio files which is currently [supported](http://caniuse.com/#feat=audio) in all browsers.

# [Demo](http://loudlinks.rocks)
# [Download](https://loudlinks.rocks/js/loudlinks-1.0.min.js)


## Usage

It’s super simple, attach the library to your project and follow these 3 steps:

### Step 1

At the root of your website directory create a folder named **“sounds”** with 2 more folders inside it with the names **“mp3”** & **“ogg”**.

![sound folders](http://loudlinks.rocks/images/sound-folders.png)

------------------------

### Step 2

Add the class **“loud-link-hover”** to any link/element that you want to give a sound on hover.

```html
<div class=“loud-link-hover”></div>
```

Or add the class **“loud-link-click”** to any link/element that you want to give a sound on click.

```html
<div class=“loud-link-click”></div>
```
* * *

### Step 3

Add the attribute **“src-data”** to the element & write in it the name of your sound without the extension.

```html
<div class=“loud-link-hover” src-data=“sound”></div>
```

------------------------


## Done & Done
# [Demo](http://loudlinks.rocks)
# [Download](https://loudlinks.rocks/js/loudlinks-1.0.min.js)
