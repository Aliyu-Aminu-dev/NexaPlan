<template>
  <header class="bg-white shadow px-6 py-4 flex items-center justify-between">
    <!-- Left: Filters -->
    <nav class="flex space-x-6">
      <button class="text-gray-700 font-medium hover:text-blue-600">Today</button>
      <button class="text-gray-700 font-medium hover:text-blue-600">This Week</button>
      <button class="text-gray-700 font-medium hover:text-blue-600">This Month</button>
      <button class="text-gray-700 font-medium hover:text-blue-600">Reports</button>
    </nav>

    <!-- Center: Search -->
    <div class="flex-1 mx-6">
      <input
        type="text"
        placeholder="Search Task, Meeting, Projects..."
        class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <!-- Right: Profile -->
    <div class="flex items-center space-x-4">
      <img src="@/assets/aung-swam-nyi-8OWcgGeB-Rk-unsplash.jpg" alt="Profile" class="w-10 h-10 rounded-full" />
      <div class="text-right">
        <p class="font-semibold text-gray-800">John Smith</p>
        <p class="text-sm text-gray-500">Project Manager</p>
      </div>
    </div>
  </header>
</template>
