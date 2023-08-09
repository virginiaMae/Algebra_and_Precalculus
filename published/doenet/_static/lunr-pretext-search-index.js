var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-doenet-iframe",
  "level": "1",
  "url": "section-doenet-iframe.html",
  "type": "Section",
  "number": "1.1",
  "title": "Hosted Doenet iframe",
  "body": " Hosted Doenet iframe   Hosted doenet embedded as an iframe    "
},
{
  "id": "figure-doenet-iframe",
  "level": "2",
  "url": "section-doenet-iframe.html#figure-doenet-iframe",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Hosted doenet embedded as an iframe   "
},
{
  "id": "section-doenet-interactive",
  "level": "1",
  "url": "section-doenet-interactive.html",
  "type": "Section",
  "number": "1.2",
  "title": "DoenetML in PreTeXt source",
  "body": " DoenetML in PreTeXt source   DoenetML rendered from source    "
},
{
  "id": "figure-doenet-interactive",
  "level": "2",
  "url": "section-doenet-interactive.html#figure-doenet-interactive",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " DoenetML rendered from source   "
},
{
  "id": "section-doenet-interactive2",
  "level": "1",
  "url": "section-doenet-interactive2.html",
  "type": "Section",
  "number": "1.3",
  "title": "DoenetML in PreTeXt source 2",
  "body": " DoenetML in PreTeXt source 2   DoenetML rendered from source    "
},
{
  "id": "figure-doenet-interactive2",
  "level": "2",
  "url": "section-doenet-interactive2.html#figure-doenet-interactive2",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " DoenetML rendered from source   "
},
{
  "id": "section-doenet-interactive3",
  "level": "1",
  "url": "section-doenet-interactive3.html",
  "type": "Section",
  "number": "1.4",
  "title": "DoenetML in PreTeXt source 3",
  "body": " DoenetML in PreTeXt source 3   DoenetML rendered from source    "
},
{
  "id": "figure-doenet-interactive3",
  "level": "2",
  "url": "section-doenet-interactive3.html#figure-doenet-interactive3",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " DoenetML rendered from source   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
