<script setup lang="ts">
useHead({
  title: 'Blog preview card',
  meta: [
    { name: 'description', content: 'Blog preview card - by Benny Schey' },
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
      <BlogCard name='Greg' />
    </div>
  </section>
</template>