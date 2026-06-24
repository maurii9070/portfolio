<script setup lang="ts">
const { data: page } = await useAsyncData('index', async () => {
  for (let attempt = 0; attempt < 30; attempt++) {
    const result = await queryCollection('index').first()
    if (result) return result
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  return null
}, {
  default: () => null
})

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png'
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: 'pt-0! lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingProyectos :page />
    </UPageSection>
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <LandingHabilidades :page />
    </UPageSection>
    <LandingContacto :page />
  </UPage>
  <div
    v-else
    class="flex items-center justify-center min-h-[60vh]"
  >
    <UIcon
      name="i-lucide-loader-circle"
      class="size-8 text-muted animate-spin"
    />
  </div>
</template>
