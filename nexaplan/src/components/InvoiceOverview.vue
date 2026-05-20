<script setup>
import { useProjectsStore } from '../store/projects'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const store = useProjectsStore()

const invoiceData = {
  labels: ['Overdue', 'Not Paid', 'Partially Paid', 'Fully Paid', 'Draft'],
  datasets: [
    {
      label: 'Invoices',
      data: [
        store.invoices.overdue,
        store.invoices.notPaid,
        store.invoices.partiallyPaid,
        store.invoices.fullyPaid,
        store.invoices.draft
      ],
      backgroundColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#6b7280']
    }
  ]
}
</script>
