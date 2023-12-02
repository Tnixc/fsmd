<script scoped>
import "@/css/markdown.css";
import "@/css/code.css";

import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
import markedFootnote from "marked-footnote";
import markedAlert from "marked-alert";
import { Marked } from "marked";
export default {
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    const marked = new Marked(
      markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : "plaintext";
          return hljs.highlight(code, { language }).value;
        },
      }),
    );
    fetch(
      "https://raw.githubusercontent.com/Tnixc/fsmd/main/assets/contents/policy.md",
    )
      .then((res) => res.text())
      .then((res) => {
        this.content = marked
          .use(markedAlert(), markedFootnote())
          .parse(res, ["gfm", "breaks"]);
      });
  },
};
</script>

<template>
  <div class="fixed left-0 top-0 z-50 flex items-center gap-4 p-4 lg:p-6"></div>
  <div class="fixed right-0 top-0 z-50 flex items-center p-4 lg:p-6">
    <div
      class="flex flex-col gap-0.5 rounded-[9px] border border-gray-400/30 bg-gray-500/10 shadow-lg backdrop-blur-lg"
    >
      <button
        class="aspect-square rounded-lg border-r border-gray-400/30 bg-gray-500/10 shadow-md"
        @click="$colorMode.preference = 'system'"
      >
        <Icon
          name="tabler:device-desktop"
          class="h-10 w-10 p-2"
          color="currentColor"
        />
      </button>
      <div class="relative flex flex-col">
        <div
          id="sel"
          class="absolute left-0 top-0 -z-10 h-1/2 w-full rounded-lg bg-teal-500/40 shadow-lg dark:translate-y-full dark:bg-teal-400/30"
        ></div>
        <button class="aspect-square" @click="$colorMode.preference = 'light'">
          <Icon
            name="material-symbols:light-mode-rounded"
            class="h-10 w-10 p-2"
            color="currentColor"
          />
        </button>
        <button class="aspect-square" @click="$colorMode.preference = 'dark'">
          <Icon
            name="material-symbols:dark-mode-outline-rounded"
            class="h-10 w-10 p-2"
            color="currentColor"
          />
        </button>
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
