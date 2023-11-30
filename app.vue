<template>
  <div class="">
    <div class="h-screen fixed inset-0 bg-black -z-50">
      <div
        class="lg:w-1/2 h-screen bg-gradient-to-b from-zinc-700 "
      >
        <div id="int" class="h-full bg-zinc-950 fixed left-0 top-0 right-1/2">
          <div class="text-gray-500 lg:pl-24">
            <h1
              id="h"
              class="md:px-4 relative tracking-widest text-9xl lg:mt-48 block bg-gradient-to-b from-zinc-50 to-slate-400 inline-block text-transparent bg-clip-text"
            >
              FSMD
            </h1>
            <p class="px-4 text-3xl mt-10">Got a thought? <br> <span class="text-slate-200">Share it instantly. </span></p>
            <p class="px-4 text-3xl">
              Write it in <span class="text-slate-200">markdown</span>.
            </p>
            <p class="px-4 text-3xl">No account required.</p>
            <p class="px-4 text-3xl">Free forever.</p>
            <div
              id="sep"
              class="px-4 relative w-full h-0.5 bg-gradient-to-l from-zinc-50 to-slate-400/0 my-20"
            >
            <div class="bg-gradient-to-b from-zinc-50 to-slate-400 text-2xl p-0.5 shadow-2xl hover:shadow-xl transition-all text-zinc-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 fixed lg:hidden">
              <button class="h-full w-full bg-slate-950 p-5 px-16">
                New Document
              </button>
            </div>
          </div>
            <p class="px-4 text-xl text-red-400 opacity-80">Documents are deleted after 7 days.</p>
            <br>
            <p class="px-4 text-xl text-gray-500">Open source project on <a target="_blank" href="https://github.com/Tnixc/fsmd" class="underline decoration-2 underline-offset-4 hover:text-white transition-all">github</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:fixed lg:right-10 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-z-30 lg:shadow-xl -translate-y-2/3" id="x">
      <img src="~assets/bg.svg"/>
      <div class="bg-gradient-to-b from-zinc-50 to-slate-400 text-2xl p-0.5 shadow-2xl hover:shadow-xl transition-all text-zinc-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 fixed z-[1000]">
        <button class="h-full w-full bg-slate-950 p-5 px-16">
          New Document
        </button>
      </div>
    </div>
  </div>
</template>
<style>
@font-face {
  font-family: Geist Mono;
  font-weight: 100;
  src: url("https://pham.codes/d/GeistMonoVF.woff2");
}

@font-face {
  font-family: Geist;
  font-weight: 100;
  src: url("https://pham.codes/d/GeistVF.woff2");
}

body {
  font-family: Geist, sans-serif;
  font-size: 16px;
  background: black;
}

#int {
  width: calc(100% - 1px);
}
#h {
  font-variation-settings: "wght" 50;
  transition: all 1s ease-out;
}
#h:hover{
  font-variation-settings: "wght" 100;

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
  background: linear-gradient(90deg, #EFF4FA, transparent);
  opacity: 1;
  z-index: 0;
}

#x:after{
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #EFF4FA, transparent);
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