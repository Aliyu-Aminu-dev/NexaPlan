import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [],
    invoices: {},
    meetings: [],
    tickets: []
  }),
  actions: {
    async fetchData() {
      try {
        const [projectsRes, invoicesRes, meetingsRes, ticketsRes] = await Promise.all([
          axios.get(`${API_URL}/projects`),
          axios.get(`${API_URL}/invoices`),
          axios.get(`${API_URL}/meetings`),
          axios.get(`${API_URL}/tickets`)
        ])
        this.projects = projectsRes.data
        this.invoices = invoicesRes.data
        this.meetings = meetingsRes.data
        this.tickets = ticketsRes.data
      } catch (err) {
        console.error('Failed to fetch data:', err)
      }
    },

    async addTask(projectId, task) {
      const project = this.projects.find(p => p.id === projectId)
      if (project) {
        project.tasks.push(task)
        await axios.put(`${API_URL}/projects/${projectId}`, project)
      }
    }
  }
})
