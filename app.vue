<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Blog preview card',
  meta: [
    {
      charset: 'utf-8',
    },
  ],
  bodyAttrs: {
    class: 'bg-Yellow',
  },
});
</script>

<template>
  <section id="blogSection">
    <div
      class="container flex flex-col items-center justify-center ml-auto mr-auto h-svh"
    >
      <BlogCard />
    </div>
  </section>
</template>
