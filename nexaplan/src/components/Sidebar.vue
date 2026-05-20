<template>
  <aside class="w-72 bg-gray-50 border-r h-screen p-6 space-y-6">
    <h2 class="text-lg font-bold text-gray-800 mb-4">Projects</h2>
    <div v-for="task in tasks" :key="task.id" class="bg-white rounded-lg shadow p-4">
      <h3 class="font-semibold text-gray-900">{{ task.title }}</h3>
      <p class="text-sm text-gray-600">{{ task.description }}</p>
    </div>
  </aside>
</template>

<script setup>
const tasks = [
  { id: 1, title: 'BrightBridge – Website Design', description: 'Design a framer website with modern templates.' },
  { id: 2, title: 'Github – Upload Dev Files & Images', description: 'Collaborate with Developers to handle the SaaS Project.' },
  { id: 3, title: '9TDesign – Mobile App Prototype', description: 'Ready prototype for testing user this week.' },
  { id: 4, title: 'Horizon – Dashboard Design', description: 'Design a dashboard comfortable with Vision Pro.' }
]
</script>
