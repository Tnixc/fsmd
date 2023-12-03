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
      content: `<style>@font-face {font-family: 'Flow Circular';font-style: normal;font-weight: 400;src: url(https://fonts.gstatic.com/s/flowcircular/v11/lJwB-pc4j2F-H8YKuyvfxdZ41iDjWA.woff2) format('woff2');unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style></p></p><h1>The Importance of S</h1> <p>As the world grapples with the challenges of climate change, it's becoming increasingly clear that sustainable living is not just a buzzword, but a necessity. The way we live our lives has a significant impact on the environment, and it's up to us to make conscious choices that reduce our carbon footprint and promote sustainability.</p> <h2>What is sustainable living?</h2> <p>Sustainable living refers to a lifestyle that minimizes the use of Earth's resources and minimizes the negative impact on the environment. It involves making conscious choices about the way we live, work, and consume, with the goal of reducing our ecological footprint and promoting environmental sustainability.</p> <h2>Why is sustainable living important?</h2> <p>The importance of sustainable living cannot be overstated. The Earth's resources are finite, and our current rate of consumption is unsustainable. If we continue to live in a way that depletes natural resources and pollutes the environment, we risk irreversible damage to the planet and its ecosystems. Sustainable living is important for the health of the planet, but also for our own health and well-being.</p> <h2>Ways to live sustainably</h2> <p>There are many ways to live sustainably, and they all start with making small changes to our daily habits. Here are some examples:</p> <ul> <li>Reducing energy consumption: Simple actions like turning off lights and electronics when not in use, using energy-efficient light bulbs, and adjusting thermostat settings can make a big difference in reducing energy consumption.</li> <li>Conserving water: Taking shorter showers, fixing leaks, and using water-efficient appliances can help conserve water and reduce wastewater.</li> <li>Reducing waste: Recycling, composting, and avoiding single-use plastics can significantly reduce the amount of waste that ends up in landfills and oceans.</li> <li>Using public transportation or biking: Using public transportation, biking, or walking instead of driving can reduce greenhouse gas emissions and improve air quality.</li> <li>Buying sustainable products: Choosing products made from sustainable materials, buying in bulk, and avoiding products with excess packaging can help reduce waste and support sustainable practices.</li> </ul> <h2>Benefits of sustainable living</h2> <p>Living sustainably not only benefits the environment, but also our own health and well-being. Here are some of the benefits of sustainable living:</p> <ul> <li>Improved health: Reducing pollution and waste can improve air and water quality, which can lead to better health outcomes.</li> <li>Cost savings: Sustainable practices like reducing energy consumption and conserving water can save money on utility bills.</li> <li>Increased well-being: Living in harmony with nature and doing our part to protect the environment can lead to increased feelings of well-being and happiness.</li> <li>Community engagement: Sustainable living often involves community engagement, such as participating in local recycling programs or community gardens, which can foster a sense of community and connection.</li> </ul> <h2>Conclusion</h2> <p>Sustainable living is not just a trend or a buzzword, it's a necessity. The way we live our lives has a significant impact on the environment, and it's up to us to make conscious choices that reduce our carbon footprint and promote sustainability. By making small changes to our daily habits, we can live healthier, happier, and more sustainably. Let's work together to create a better future for ourselves and for future generations.</p>`,
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
        document.getElementById("content").classList.remove("holding");
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
        <div v-html="content" id="content" class="holding"></div>
      </article>
    </div>
  </div>
</template>
