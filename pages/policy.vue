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
    fetch(
      "https://gist.githubusercontent.com/rt2zz/e0a1d6ab2682d2c47746950b84c0b6ee/raw/83b8b4814c3417111b9b9bef86a552608506603e/markdown-sample.md",
    )
      .then((res) => res.text())
      .then((res) => {
        this.content = marked.use().parse(
          `
# Markdown Sample

this is a paragraph

## this is a heading 2
### this is a heading 3
#### this is a heading 4
##### this is a heading 5
###### this is a heading 6

This is a paragraph with **bold** and *italic* text and an \`inline code block \`.

the following is a seperator:

---

this is a paragraph with a [link](link)

This is a list:
- item 1
- item 2
    - subitem 2.1
       - sub 2.1.1
- item 3

This is an ordered list:
1. item 1
2. item 2
3. item 3

this is a GFC note
> [!NOTE]
>
> this is a note



This is a blockquote:
> this is a blockquote
> this is line 2

This is a code block:
\`\`\`js
console.log("hello world");
const x = "hello world";
console.log(x);
\`\`\`

heres some more lorem ipsum:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl. Donec euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae nisl.



        `,
          ["gfm", "breaks"],
        );
      });
  },
};
</script>

<template>
  <div class="fixed right-0 top-0 z-50 flex items-center gap-4 p-4 lg:p-6">
    <div class="flex flex-col gap-4 rounded-xl backdrop-blur-lg">
      <div
        class="flex flex-col gap-2 rounded-[9px] border border-gray-400/30 bg-gray-500/10 shadow-lg"
      >
        <button
          class="aspect-square rounded-lg border-r border-gray-400/30 bg-gray-500/10 shadow-md"
          @click="$colorMode.preference = 'system'"
        >
          <svg
            class="aspect-square h-full fill-current py-3"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path
              d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"
            ></path>
          </svg>
        </button>
        <div class="relative flex flex-col">
          <div
            id="sel"
            class="absolute left-0 top-0 -z-10 h-1/2 w-full rounded-lg bg-teal-500/40 shadow-lg dark:translate-y-full dark:bg-teal-400/30"
          ></div>
          <button
            class="aspect-square"
            @click="$colorMode.preference = 'light'"
          >
            <svg
              class="aspect-square h-full fill-current py-3"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path
                d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
              ></path>
            </svg>
          </button>
          <button class="aspect-square" @click="$colorMode.preference = 'dark'">
            <svg
              class="aspect-square h-full fill-current py-3"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path
                d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center bg-neutral-300 p-4 dark:bg-neutral-900">
    <article
      class="mt-20 min-h-screen w-full max-w-4xl rounded-xl bg-neutral-100 p-4 pb-10 shadow-xl ring-2 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700 lg:mt-40 lg:p-10"
    >
      <div v-html="content"></div>
    </article>
  </div>
</template>
