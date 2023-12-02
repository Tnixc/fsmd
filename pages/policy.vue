<script scoped>
import "@/css/markdown.css";
import { marked } from "marked";
export default {
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    marked.use(["marked-alert"]);
    fetch(
      "https://gist.githubusercontent.com/rt2zz/e0a1d6ab2682d2c47746950b84c0b6ee/raw/83b8b4814c3417111b9b9bef86a552608506603e/markdown-sample.md"
    )
      .then((res) => res.text())
      .then((res) => {
        this.content = marked.parse(
          `
# Markdown Sample

this is a paragraph

## this is a heading 2
### this is a heading 3
#### this is a heading 4
##### this is a heading 5
###### this is a heading 6

This is a paragraph with **bold** and *italic* text.

the following is a seperator:

---

this is a paragraph with a [link](link)

This is a list:
- item 1
- item 2
- item 3

This is an ordered list:
1. item 1
2. item 2
3. item 3

This is a blockquote:
> this is a blockquote
> this is line 2

This is a code block:
\`\`\`js
console.log("hello world");
\`\`\`

heres some more lorem ipsum:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.



        `,
          ["gfm", "breaks"]
        );
      });
  },
};
</script>

<template>
  <div class="text-white flex justify-center pt-20 bg-gray-100">
    <article
      class="max-w-4xl bg-neutral-800 rounded-xl ring-2 ring-neutral-700 p-10 overflow-hidden mb-40"
    >
      <div v-html="content"></div>
    </article>
  </div>
</template>
