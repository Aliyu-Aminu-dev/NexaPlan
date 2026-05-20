<template>
  <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Projects Overview -->
    <div class="bg-white p-6 h-[600px] rounded shadow">
      <h2 class="font-bold mb-4">Projects Overview</h2>
      <Doughnut :data="projectsData" :options="chartOptions" />
    </div>

    <!-- Income vs Expense -->
    <div class="bg-white p-6 h-[600px] rounded shadow">
      <h2 class="font-bold mb-4">Income vs Expense</h2>
      <Line :data="incomeExpenseData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'
import { Doughnut, Line } from 'vue-chartjs'

ChartJS.register(
  Title, Tooltip, Legend,
  ArcElement, LineElement, PointElement,
  CategoryScale, LinearScale
)

const chartOptions = { responsive: true, maintainAspectRatio: false }

const projectsData = {
  labels: ['In Progress', 'Completed', 'Not Started'],
  datasets: [
    {
      data: [14, 32, 54],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
    }
  ]
}

const incomeExpenseData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Income',
      data: [2400, 3200, 2800, 4000, 3500, 4200, 4400],
      borderColor: '#10b981',
      fill: false
    },
    {
      label: 'Expense',
      data: [1900, 2100, 2000, 2500, 2300, 2600, 2700],
      borderColor: '#ef4444',
      fill: false
    }
  ]
}
</script>
