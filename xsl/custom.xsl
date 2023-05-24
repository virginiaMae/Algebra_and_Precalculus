<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "./core/entities.ent">
    %entities;
]>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:import href="./core/pretext-html.xsl"/>
    <xsl:template match="interactive[@doenet]" mode="iframe-interactive">
        <iframe>
            <xsl:attribute name="src">./external/doenet-iframe.html#<xsl:value-of select="text()"/></xsl:attribute>
            <xsl:apply-templates select="." mode="iframe-id"/>
            <xsl:apply-templates select="." mode="size-pixels-attributes" />
        </iframe>
    </xsl:template>
</xsl:stylesheet>