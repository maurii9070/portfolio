<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <div v-if="page?.skills">
    <h2 class="text-left text-xl sm:text-xl lg:text-2xl font-medium text-highlighted">
      {{ page.skills.title }}
    </h2>
    <p
      v-if="page.skills.description"
      class="text-left mt-3 text-sm sm:text-md lg:text-sm text-muted"
    >
      {{ page.skills.description }}
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Motion
        v-for="(category, index) in page.skills.categories"
        :key="category.title"
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 * index }"
        :in-view-options="{ once: true }"
      >
        <div class="rounded-lg border border-default bg-elevated/50 p-4 h-full">
          <div class="flex items-center gap-2">
            <UIcon
              :name="category.icon"
              class="size-4 text-primary"
            />
            <span class="text-sm font-semibold text-highlighted">
              {{ category.title }}
            </span>
          </div>
          <div class="flex flex-wrap gap-1.5 mt-3">
            <span
              v-for="item in category.items"
              :key="item"
              class="text-xs px-2 py-0.5 rounded-md bg-default/60 text-muted"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </Motion>
    </div>
  </div>
</template>
