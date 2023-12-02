<template>
  <div
    id="vertsep"
    class="top-1/6 absolute left-1/2 z-[10000] hidden h-screen w-1 lg:block"
  ></div>
  <div class="absolute inset-0 -z-50 h-screen">
    <div class="pr-0 text-gray-500 lg:pl-24">
      <div
        id="h"
        class="relative block bg-gradient-to-b from-zinc-50 to-slate-400 bg-clip-text text-9xl tracking-widest text-transparent md:px-4 lg:mt-48"
      >
        FSMD
      </div>
      <div class="mt-10 px-4 text-3xl">
        Got a thought? <br />
        <span class="text-slate-200">Share it instantly. </span>
      </div>
      <div class="px-4 text-3xl">
        Write it in <span class="text-slate-200">markdown</span>.
      </div>
      <div class="px-4 text-3xl">No account required.</div>
      <div class="px-4 text-3xl">Free forever.</div>
      <br />
      <nuxt-link
        to="/policy"
        class="px-4 text-3xl text-teal-400/70 underline decoration-4 underline-offset-8 transition-all hover:text-teal-300"
        >Policy and info
        <Icon
          name="material-symbols:arrow-outward-rounded"
          color="currentColor"
        />
      </nuxt-link>
      <div
        id="sep"
        class="relative my-20 h-0.5 w-full bg-gradient-to-l from-zinc-50 to-slate-400/0 px-4"
      >
        <div
          class="ml-auto mr-0 w-fit translate-y-1/2 bg-gradient-to-b from-teal-300 to-blue-300 p-0.5 text-2xl text-zinc-50 shadow-2xl transition-all hover:shadow-xl lg:hidden"
        >
          <a
            class="block h-full w-full whitespace-nowrap bg-slate-950 p-5 px-16 text-center"
            href="https://github.com"
          >
            New Document
          </a>
        </div>
      </div>
      <div class="px-4 pt-20 text-xl text-red-400 lg:pt-4">
        Documents are deleted after 14 days of inactivity.
      </div>
      <br />
      <div class="px-4 text-xl text-gray-500">
        Open source project on
        <a
          target="_blank"
          href="https://github.com/Tnixc/fsmd"
          class="text-blue-400/50 underline decoration-2 underline-offset-4 transition-all hover:text-blue-300"
          >Github</a
        >
        by
        <a
          target="_blank"
          href="https://tnixc.space"
          class="text-blue-400/50 underline decoration-2 underline-offset-4 transition-all hover:text-blue-300"
          >Tnixc</a
        >
      </div>
    </div>
  </div>
  <div
    class="hidden lg:absolute lg:left-1/2 lg:right-10 lg:top-1/2 lg:-z-30 lg:block lg:-translate-y-1/2 lg:shadow-xl"
    id="x"
  >
    <img src="~assets/bg.svg" />
    <div
      class="absolute left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-teal-300 to-blue-300 p-0.5 text-2xl text-zinc-50 shadow-2xl transition-all hover:shadow-xl"
    >
      <a
        class="block h-full w-full whitespace-pre bg-slate-950 p-5 px-16 text-center"
        href="https://github.com"
        >New Document</a
      >
    </div>
  </div>
</template>
<style scoped>
#int {
  width: calc(100% - 1px);
}
#h {
  font-variation-settings: "wght" 50;
  transition: all 1s ease-out;
}
#h:hover {
  font-variation-settings: "wght" 100;
}
#h::before {
  top: 0;
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  bottom: -0.25rem;
  background: repeating-linear-gradient(
    45deg,
    #00000020,
    #00000020 1px,
    transparent 1px,
    transparent 4px
  );
  max-width: 90vw;
}
#h::after {
  top: 100%;
  bottom: -0.25rem;
  content: "";
  position: absolute;
  left: 0%;
  right: -100%;
  background: linear-gradient(90deg, #eff4fa, transparent);
  opacity: 1;
  max-width: 90vw;
  z-index: 0;
}

#x:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #eff4fa, transparent);
  z-index: 998;
}
#x:before {
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
#vertsep {
  background: linear-gradient(
    180deg,
    transparent,
    #92c6fd,
    transparent,
    #23d5ab,
    transparent,
    #92c6fd,
    transparent
  );
  box-shadow: 5px 0 20px black;
  animation: shift-bg 10s linear infinite;
  background-size: 100% 200vh;
  opacity: 100%;
  mix-blend-mode: multiply;
}
@keyframes shift-bg {
  0% {
    background-position: left 0%;
  }
  100% {
    background-position: left 200vh;
  }
}
</style>
