<template>
  <div
    id="card"
    class="p-6 bg-White flex flex-col gap-6 rounded-[1.25rem] shadow-black max-w-[384px]"
  >
    <img
      src="@/assets/images/illustration-article.svg"
      alt=""
      class="rounded-[10px] w-full h-auto"
    />
    <div class="flex flex-col gap-3 items-start">
      <p class="text-sm font-extrabold bg-Yellow py-1 px-3 rounded-[4px]">
        Learning
      </p>
      <p class="text-sm font-medium">Published 21 Dec 2023</p>
      <h2 class="text-2xl font-extrabold">HTML & CSS foundations</h2>
      <p class="text-Grey font-medium leading-[150%]">
        These languages are the backbone of every website, defining structure,
        content, and presentation
      </p>
    </div>
    <div class="flex gap-3 items-center">
      <img
        src="@/assets/images/greg.webp"
        width="64px"
        height="65px"
        alt="author.fullName"
        class="w-8 h-8"
      />
      <p class="text-sm font-extrabold">Greg Hooper</p>
    </div>
  </div>
</template>
