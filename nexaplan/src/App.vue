<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <Navbar />
      <Dashboard />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Dashboard from './pages/Dashboard.vue'
import { onMounted } from 'vue'
import { useProjectsStore } from './store/projects'

const store = useProjectsStore()

onMounted(() => {
  store.fetchData()
})
</script>
