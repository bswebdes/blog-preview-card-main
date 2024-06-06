<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Blog preview card',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
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
      class="container flex flex-col h-svh ml-auto mr-auto justify-center items-center"
    >
      <BlogCard />
    </div>
  </section>
</template>
