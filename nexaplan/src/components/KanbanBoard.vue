<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
    <div
      v-for="column in columns"
      :key="column"
      class="bg-gray-100 p-4 rounded shadow"
      @dragover.prevent
      @drop="dropTask(column)"
    >
      <h2 class="font-bold mb-4">{{ column }}</h2>
      <div
        v-for="task in tasks.filter(t => t.status === column)"
        :key="task.id"
        class="bg-white p-3 rounded shadow mb-2 cursor-move"
        draggable="true"
        @dragstart="dragStart(task)"
      >
        <h3 class="font-semibold">{{ task.title }}</h3>
        <p class="text-sm text-gray-600">{{ task.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const columns = ['To Do', 'In Progress', 'Done']

const tasks = ref([
  { id: 1, title: 'Setup NexaPlan', description: 'Initialize Vue + Tailwind project', status: 'To Do' },
  { id: 2, title: 'Design Dashboard', description: 'Create layout with charts', status: 'In Progress' },
  { id: 3, title: 'Implement Kanban', description: 'Drag & drop tasks', status: 'Done' }
])

const draggedTask = ref(null)

function dragStart(task) {
  draggedTask.value = task
}

function dropTask(column) {
  if (draggedTask.value) {
    draggedTask.value.status = column
    draggedTask.value = null
  }
}
</script>
