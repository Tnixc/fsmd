<script scoped>
import "@/css/markdown.css";
import "@/css/code.css";

import copy from "copy-to-clipboard";
import hljs from "highlight.js";
import { markedHighlight } from "marked-highlight";
import markedFootnote from "marked-footnote";
import markedAlert from "marked-alert";
import { Marked } from "marked";
export default {
  data() {
    return {
      content: "",
      raw: " ",
      plain: " ",
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
        this.raw = res;
        this.content = marked
          .use(markedAlert(), markedFootnote())
          .parse(res, ["gfm", "breaks"]);
        this.plain = this.content.replace(/<[^>]+>/g, "");
      });
  },
  methods: {
    copyContent() {
      console.log(this.raw);
      copy(this.raw);
    },
    copyPlain() {
      console.log(this.plain);
      copy(this.plain);
    },
  },
};
</script>

<template>
  <div class="fixed left-0 top-0 z-50 flex items-center gap-4 p-4 lg:p-6">
    <nuxt-link
      to="/"
      class="aspect-square rounded-lg border border-gray-400/30 bg-gray-500/10 bg-slate-200 shadow-md dark:bg-neutral-900"
      ><Icon
        class="h-10 w-10 p-2"
        name="material-symbols:arrow-back-rounded"
        color="currentColor"
    /></nuxt-link>
  </div>
  <div class="fixed right-0 top-0 z-50 flex items-center p-4 lg:p-6">
    <div
      class="flex flex-col gap-0.5 rounded-[9px] border border-gray-400/30 bg-gray-500/10 bg-slate-200 shadow-lg dark:bg-neutral-900"
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
          class="absolute left-0 top-0 h-1/2 w-full rounded-lg bg-teal-500/40 mix-blend-multiply shadow-lg dark:translate-y-full dark:bg-teal-400/30 dark:mix-blend-lighten"
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
    <div>
      <div
        class="mb-8 mt-20 flex h-10 w-fit max-w-4xl gap-2 rounded-xl bg-neutral-100 px-2 shadow-xl ring-2 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700 lg:mt-40"
      >
        <button
          class="flex items-center rounded-lg p-2 text-gray-700 hover:shadow-lg dark:text-gray-200"
          v-on:mousedown="copyContent"
        >
          COPY AS MAKRDOWN
        </button>
        <button
          class="flex items-center rounded-lg p-2 text-gray-700 hover:shadow-lg dark:text-gray-200"
          v-on:mousedown="copyPlain"
        >
          COPY AS PLAINTEXT
        </button>
      </div>
      <article
        class="mb-20 min-h-screen w-full max-w-4xl rounded-xl bg-neutral-100 p-4 shadow-xl ring-2 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-700 lg:p-10"
      >
        <div v-html="content"></div>
      </article>
    </div>
  </div>
</template>
