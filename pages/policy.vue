<script>
import { marked } from "marked";

export default {
  data() {
    return {
      policy: "",
    };
  },
  mounted() {
    fetch(
      "https://raw.githubusercontent.com/nodeca/babelfish/master/CHANGELOG.md"
    )
      .then((res) => res.text())
      .then((res) => {
        this.policy = marked.parse(res);
      });
  },
};
</script>

<template>
  <div class="text-white">
    <div v-html="policy"></div>
  </div>
</template>
