<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { global } = useAppConfig()
</script>

<template>
  <UPageSection
    v-if="page?.contact"
    id="contacto"
    :title="page.contact.title"
    :description="page.contact.description"
    :ui="{
      container: 'pt-0! gap-6 sm:gap-8',
      title: 'text-left text-2xl sm:text-3xl lg:text-4xl font-semibold',
      description: 'text-left mt-3 text-base sm:text-lg text-muted max-w-2xl'
    }"
  >
    <div class="flex flex-wrap gap-2 mt-2">
      <UButton
        :to="`mailto:${global.email}`"
        size="lg"
        color="neutral"
        icon="i-lucide-mail"
        label="Email"
      />
      <UButton
        :to="global.github"
        target="_blank"
        size="lg"
        color="neutral"
        variant="outline"
        icon="i-simple-icons-github"
        label="GitHub"
      />
      <UButton
        :to="global.linkedin"
        target="_blank"
        size="lg"
        color="neutral"
        variant="outline"
        icon="i-simple-icons-linkedin"
        label="LinkedIn"
      />
      <UButton
        to="https://drive.google.com/file/d/1PhpkqQxz42-pmgOBP4L5dWuXxtldg9Os/view?usp=sharing"
        target="_blank"
        size="lg"
        color="neutral"
        variant="outline"
        icon="i-lucide-file-text"
        label="Ver CV"
      />
    </div>
  </UPageSection>
</template>
