<script setup lang="ts">
const { data: projects } = await useAsyncData('landing-projects', async () => {
  for (let attempt = 0; attempt < 30; attempt++) {
    const result = await queryCollection('projects').order('date', 'DESC').limit(2).all()
    if (result && result.length > 0) return result
    await new Promise(resolve => setTimeout(resolve, 100))
  }
  return []
}, { default: () => [] })
</script>

<template>
  <div>
    <h2 class="text-left text-xl sm:text-xl lg:text-2xl font-medium text-highlighted">
      Proyectos destacados
    </h2>
    <div class="flex flex-col gap-5 mt-3">
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
        class="group"
      >
        <NuxtLink
          :to="project.url"
          target="_blank"
          class="block"
        >
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-sm font-semibold text-highlighted">
              {{ project.title }}
            </span>
            <span class="text-xs text-muted">
              · {{ new Date(project.date).getFullYear() }}
            </span>
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-3.5 text-muted transition-all opacity-0 group-hover:opacity-100"
            />
          </div>
          <p class="text-sm text-muted m-0 mt-1 line-clamp-2">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-1.5 mt-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs px-2 py-0.5 rounded-md bg-elevated/60 text-muted"
            >
              {{ tag }}
            </span>
          </div>
        </NuxtLink>
      </Motion>
      <UButton
        to="/projects"
        variant="link"
        size="sm"
        class="px-0 mt-1 self-start"
        label="Ver todos los proyectos"
      >
        <template #trailing>
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4 text-primary transition-all group-hover:translate-x-1"
          />
        </template>
      </UButton>
    </div>
  </div>
</template>
