<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "./core/entities.ent">
    %entities;
]>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:import href="./core/pretext-html.xsl"/>
    <xsl:template match="interactive[@doenet]" mode="iframe-interactive">
        <div class="doenetml-applet">
            <script type="text/doenetml">
                <xsl:value-of disable-output-escaping="yes" select="text()"/>
            </script>
        </div>
        <script onload="onLoad()" type="module" src="https://dev.doenet.org/cdn/doenet-standalone.js"> </script>
        <link rel="stylesheet" href="https://dev.doenet.org/cdn/style.css"> </link>
        <script>
            <xsl:text>function onLoad() {window.renderDoenetToContainer(document.querySelector(".doenetml-applet"))}</xsl:text>
        </script>
    </xsl:template>
</xsl:stylesheet>
