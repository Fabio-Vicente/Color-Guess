<div align=center>
  <h1>Color Guess</h1>
  <p>Can you guess the color just with its code?</p>

  ![HMTL](assets/images/HTML-logo.svg)
  ![CSS](assets/images/CSS-logo.svg)
  ![Javascript](assets/images/javascript-badge.svg)

  [Project Web Page](https://fabio-vicente.github.io/Color-Guess/)

  <details>
    <summary>
      <strong>See a screenshot</strong>
    </summary>
    <br />
    <img src=assets/gifs/app-screenshot.gif alt="Project Screenshot" width=80% />
  </details>
</div>
  
</div>
<br />

## About

Color Guess is a game where you need to guess, between some given colors, which one is referring to the showed specific code (RGB). Can you get it right?

This project development is part of [Trybe](https://www.betrybe.com/) course program.

### Development Skills

- HTML;
- CSS;
- Javascript;
- DOM;
- Events;
- Local storage.

<br />

## Getting Started

### Prerequisites

  - Web Browser compatible with HTML5, CSS3 and EcmaScript 6.

### Instalation

  Use one of these three ways to install the project locally.

#### 1. Download ZIP:
>
>  - Click on the `Code` green button at repository top;
>
>      ![Code Button](assets/images/GitHub-code-button.png)
>
>  - Click on `Download ZIP` button;
>
>      ![Code Button](assets/images/GitHub-downloadZIP-button.png)
>  
>  - Unzip files in a choosen directory;

#### 2. Clone repository via HTTPS:
>
>  - Use `https://github.com/Fabio-Vicente/Color-Guess.git` endpoint for clonning via HTTPS (credencials may be needed);


#### 3. Clone repository via SSH:
>
>  - Use `git@github.com:Fabio-Vicente/Color-Guess.git` endpoint for clonning via SSH (it must be need set a SSH Key);

### Initialization

Once you have procedure on the [installation process](#instalation), open the [index.html](index.html) downloaded file on your browser to start use the program.

**Don't want to install the project locally?** No worries! You can acess the web project by this link:

> https://fabio-vicente.github.io/Color-Guess/

<br />

## Usage

On the screen, it is possible to see a code, regarding a color RGB representation, and a sum of six colors. Click on the one that match the specific code, but beware: clicking in a wrong color will make you lose the game.

### Score

The score will be calculated based on the numbers of hits in a row. If you choose the right color, it will be added by 3. Otherwise, the score will be seted to 0.

### Play again

Whatever has been your answer on this turn of game, you can always play again. For doing so, click on the <span><img src=assets/images/restart-button.png alt="Restart button" width=64 /></span> button. The game restart don't erase current score.

### High Score

It will be storaged for historical reasons. Whenever the currently score overtake the `High Score`, it will be replaced with it. It will be availble between diferent sessons, if you close the browser or even if you turn off computer. Compare your current score with the global highest!

<br />

## Lint

The project was staticly tested using [ESLint](https://eslint.org/) and [StyleLint](https://stylelint.io/), whose appoints no error on code analyses. These tools enforces code readbility and standart development style such on CSS (StyleLint) as on Javascript coding (ESLint).

#### Check ESLint

You can verify [ESLint](https://eslint.org/) rules attendance running following command:

```sh
  npm run lint
```

#### Check StyleLint

You can verify [StyleLint](https://stylelint.io/) rules attendance running following command:

```sh
  npm run lint:styles
```

<br />

For both analyzis, you must have `NPM >= 8.1.0` previously installed, and have been installed project dependencies by running command:

```sh
  npm install
```

###### Obs: you'll probably have no response on your analyzis. It occurs whenever is found no errors on the code styling. Try to make some mess 💩 on formatting and run this command again. Now you must see some errors pointed in your terminal.

<br />

## Authors & contributors

The development of this project, as well all documentation, was made by [Fábio Vicente(Me)](https://github.com/Fabio-Vicente).

<br />

## Acknowledgements

- [Trybe](https://www.betrybe.com/) by porpose this project, specify requirements and provide a initial configuration;
- [Amazing Github Template](https://github.com/dec0dOS/amazing-github-template) which provides a Readme Template for inspiration.

<br />
<br />
<br />
<br />

<div align=right>

[![Code with love by Fábio Vicente](assets/images/made-with-love.svg)](https://github.com/Fabio-Vicente)

</div>

