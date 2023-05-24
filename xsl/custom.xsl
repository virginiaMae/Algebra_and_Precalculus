<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "./core/entities.ent">
    %entities;
]>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:import href="./core/pretext-html.xsl"/>
    <xsl:template match="interactive[@doenet]" mode="iframe-interactive">
        <div id="root"></div>
        <script onload="onLoad()" type="module" crossorigin="crossorigin" src="./external/assets/cypressTest-64d42354.js"></script>
        <link rel="modulepreload" crossorigin="crossorigin" href="./external/assets/PageViewer-d914b069.js"/>
        <link rel="modulepreload" crossorigin="crossorigin" href="./external/assets/activityUtils-7af1fc96.js"/>
        <link rel="modulepreload" crossorigin="crossorigin" href="./external/assets/visibility-sensor-57589aaf.js"/>
        <link rel="modulepreload" crossorigin="crossorigin" href="./external/assets/ActionButton-1e9c5f7a.js"/>
        <link rel="modulepreload" crossorigin="crossorigin" href="./external/assets/ButtonGroup-b585a5ef.js"/>
        <link rel="modulepreload" crossorigin="crossorigin" href="./external/assets/ActivityViewer-b51a59ab.js"/>
        <script>
            <xsl:text>function onLoad() {window.setDoenetML(`</xsl:text>
            <xsl:value-of select="text()"/>
            <xsl:text>`);}</xsl:text>
        </script>
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/npm/jsxgraph@1.5.0/distrib/jsxgraph.css"
        />
    <style>
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        src:
      /* url(OpenSansRegularWoffTwo) format('woff2'),
      url(OpenSansRegularWoff) format('woff'); */ url('/fonts/files/open-sans-v18-latin-regular.woff2')
            format('woff2'),
          url('/fonts/files/open-sans-v18-latin-regular.woff') format('woff');
      }

      @font-face {
        font-family: 'Open Sans';
        font-style: italic;
        font-weight: normal;
        src: url('/fonts/files/open-sans-v18-latin-italic.woff2')
            format('woff2'),
          url('/fonts/files/open-sans-v18-latin-italic.woff') format('woff');
      }

      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/files/open-sans-v18-latin-700.woff2') format('woff2'),
          url('/fonts/files/open-sans-v18-latin-700.woff') format('woff');
      }

      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        src: url('/fonts/files/open-sans-v18-latin-light.woff2') format('woff2'),
          url('/fonts/files/open-sans-v18-latin-light.woff') format('woff');
      }

      @font-face {
        font-family: 'Open Sans';
        font-style: italic;
        font-weight: 300;
        src: url('/fonts/files/open-sans-v18-latin-light-italic.woff2')
            format('woff2'),
          url('/fonts/files/open-sans-v18-latin-light-italic.woff')
            format('woff');
      }

      @font-face {
        font-family: 'Open Sans';
        font-style: italic;
        font-weight: 700;
        src: url('/fonts/files/open-sans-v18-latin-700italic.woff2')
            format('woff2'),
          url('/fonts/files/open-sans-v18-latin-700italic.woff') format('woff');
      }
      html {
        font-family: 'Open Sans' !important;
        --menuWidth: 220px;
        --mainBlue: #1a5a99;
        --lightBlue: hsl(209, 54%, 82%);
        --solidLightBlue: #8fb8de;
        --mainGray: #e3e3e3;
        --donutBody: #eea177;
        --donutTopping: #6d4445;
        --mainBorder: 2px solid black;
        --mainBorderRadius: 5px;
        --mainRed: #c1292e;
        --lightRed: hsl(0, 54%, 82%);
        --mainGreen: #459152;
        --canvas: white;
        --canvastext: black;
        --lightGreen: #a6f19f;
        --lightYellow: #f5ed85;
        --whiteBlankLink: #6d4445;
        --mainYellow: #94610a;
        --mainPurple: #4a03d9;
      }

      [data-theme='dark'] {
        font-family: 'Open Sans' !important;
        --menuWidth: 220px;
        --mainBlue: #1a5a99;
        --lightBlue: hsl(209, 54%, 82%);
        --solidLightBlue: #1a5a99;
        --mainGray: #a9a9a9;
        --donutBody: #eea177;
        --donutTopping: #6d4445;
        --mainBorder: 2px solid white;
        --mainBorderRadius: 5px;
        --mainRed: #c1292e;
        --lightRed: hsl(0, 54%, 82%);
        --mainGreen: #459152;
        --canvas: #121212;
        --canvastext: white;
        --lightGreen: #a6f19f;
        --lightYellow: #f5ed85;
        --whiteBlankLink: #a9abe5;
        --mainYellow: #efab34;
        --mainPurple: #4a03d9;
      }
      .doenet-viewer {
        font-family: 'Open Sans' !important;
        color: var(--canvastext);
      }
      .doenet-viewer h1 {
        font-size: 2em;
        font-weight: bold;
      }
      .doenet-viewer h2 {
        font-size: 1.5em;
        font-weight: bold;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
      }
      .doenet-viewer h3 {
        font-size: 1.17em;
        font-weight: bold;
        margin-block-start: 1em;
        margin-block-end: 1em;
      }
      .doenet-viewer h4 {
        font-weight: bold;
        margin-block-start: 1.33em;
        margin-block-end: 1.33em;
      }
      .doenet-viewer h5 {
        font-size: 0.83em;
        font-weight: bold;
        margin-block-start: 1.67em;
        margin-block-end: 1.67em;
      }
      .doenet-viewer p {
        margin-block-start: 1em;
        margin-block-end: 1em;
      }
      .doenet-viewer input {
        box-sizing: content-box;
        padding: 2px 1px;
      }
      div.jxgbox input {
        border-width: 2px;
      }
      div.jxgbox button {
        margin: 0;
        border-radius: var(--mainBorderRadius);
        border-width: 2px;
        border-color: var(--mainBlue);
        border-style: solid;
        padding: 1px 6px;
        background-color: var(--mainBlue);
        color: white;
      }
      div.jxgbox button:hover {
        background-color: var(--lightBlue);
        color: black;
        border-color: var(--lightBlue);
      }
      div.jxgbox input[type='checkbox'] {
        margin: 3px 3px 3px 4px;
        height: 18px;
        width: 18px;
      }
    </style>
    </xsl:template>
</xsl:stylesheet>