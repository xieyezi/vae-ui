// const fs = require('fs')
// const path = require('path')
// const slugify = require('transliteration').slugify
// const md = require('markdown-it')()

// md.use(require('markdown-it-anchor'), {
//   level: 1,
//   slugify,
//   permalink: true,
//   permalinkBefore: true
// })

// fs.readFile(path.resolve(process.cwd(), './examples/components/alert.md'), 'utf8', (err, data) => {
//   if (err) {
//     throw err
//   }
//   console.log(md.render(data))
// })

var md = require('markdown-it')()

md.use(require('markdown-it-container'), 'spoiler', {
  validate: function (params) {
    return params.trim().match(/^spoiler\s+(.*)$/)
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/)

    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n'
    } else {
      // closing tag
      return '</details>\n'
    }
  },
})

console.log(md.render('::: spoiler click me\n*content*\n:::\n'))