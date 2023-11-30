<template>
  <div class="overflow-hidden">
    <div class="h-screen fixed inset-0 bg-black -z-50">
      <div
        class="lg:w-1/2 h-screen bg-gradient-to-b from-zinc-700 overflow-hidden"
      >
        <div id="int" class="h-full bg-zinc-950 fixed left-0 top-0 right-1/2">
          <div class="text-gray-500 lg:pl-24 p-5">
            <h1
              id="h"
              class="relative tracking-widest text-9xl mt-48 block bg-gradient-to-b from-zinc-50 to-slate-400 inline-block text-transparent bg-clip-text"
            >
              FSMD
            </h1>
            <p class="text-3xl mt-10">Share instantly.</p>
            <p class="text-3xl">
              Write in <span class="text-slate-200">markdown</span>
            </p>
            <p class="text-3xl">No account required.</p>
            <p class="text-3xl">Free forever</p>
            <div
              id="sep"
              class="relative w-full h-0.5 bg-gradient-to-l from-zinc-50 to-slate-400/0 my-20"
            ></div>
            <p class="text-xl">Documents are deleted after 7 days.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-1/2 lg:fixed right-10 top-1/2 -translate-y-1/2 -z-30" id="x">
      <img src="~assets/bg.svg"/>
    </div>
  </div>
</template>
<style>
@font-face {
  font-family: Geist Mono;
  font-variation-settings: "wght" 100;
  src: url("https://pham.codes/d/GeistMonoVF.woff2");
}

@font-face {
  font-family: Geist;
  font-variation-settings: "wght" 100;
  src: url("https://pham.codes/d/GeistVF.woff2");
}
#int {
  width: calc(100% - 1px);
}
#h {
  font-variation-settings: "wght" 48;
}
#h::before {
  top: 0;
  bottom: -30%;
  content: "";
  position: absolute;
  left: -100%;
  right: -100%;
  z-index: 1;
  background: repeating-linear-gradient(
    45deg,
    #00000020,
    #00000020 1px,
    transparent 1px,
    transparent 4px
  );
}
#h::after {
  top: 100%;
  bottom: -10%;
  content: "";
  position: absolute;
  left: 0%;
  right: -100%;
  background: linear-gradient(
    73deg,
    rgba(13, 82, 222, 0.6) 0%,
    rgba(10, 209, 186, 0.3) 25%,
    rgba(33, 193, 235, 0.6) 50%,
    rgba(196, 68, 255, 0.3) 75%,
    rgba(234, 197, 229, 0.6) 100%
  );
  opacity: 1;
  z-index: 0;
}
body {
  font-family: Geist, sans-serif;
  font-size: 16px;
}
#x:after{
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #D7D3D2, transparent);
  z-index: 998;
}
#x:before{
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: repeating-linear-gradient(
    45deg,
    #00000088,
    #00000055 1px,
    transparent 1px,
    transparent 6px
  );
  z-index: 999;
}
</style>

<script>
export default {
  name: 'App',
}
</script>