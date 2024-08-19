<template>
  <Pie :data="props.data" :options="options2" />
</template>

<script lang="ts" setup>
import { Pie } from 'vue-chartjs'
import type { ChartOptions } from 'chart.js'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'
import { TPieChartData } from '../../../data/types'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
ChartJS.defaults.font.size = 15
const props = defineProps<{
  data: TPieChartData
  options?: ChartOptions<'pie'>
}>()

const options2: ChartOptions<'pie'> = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
  },
}
</script>
