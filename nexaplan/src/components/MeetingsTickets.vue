<script setup>
import { useProjectsStore } from '../store/projects'
import { Pie, Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale)

const store = useProjectsStore()

const meetingsData = {
  labels: store.meetings.map(m => m.platform),
  datasets: [
    {
      data: store.meetings.map(() => 1),
      backgroundColor: ['#3b82f6', '#10b981']
    }
  ]
}

const ticketsData = {
  labels: store.tickets.map(t => t.user),
  datasets: [
    {
      label: 'Tickets',
      data: store.tickets.map(() => 1),
      backgroundColor: ['#f59e0b', '#ef4444', '#3b82f6']
    }
  ]
}
</script>
