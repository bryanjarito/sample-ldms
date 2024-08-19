<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <DataSectionItem
      v-for="metric in dashboardMetrics"
      :key="metric.id"
      :title="metric.title"
      :value="metric.value"
      :change-text="metric.changeText"
      :up="metric.changeDirection === 'up'"
      :icon-background="metric.iconBackground"
      :icon-color="metric.iconColor"
    >
      <template #icon>
        <VaIcon v-if="metric.icon" :name="metric.icon" size="large" />
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-else v-html="metric.svgIcon"></div>
      </template>
    </DataSectionItem>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useColors } from 'vuestic-ui'
import DataSectionItem from './DataSectionItem.vue'

import river from '../../../assets/icons/dashboard-river.svg?raw'
import lake from '../../../assets/icons/dashboard-lake.svg?raw'
import dam from '../../../assets/icons/dashboard-dam.svg?raw'

interface DashboardMetric {
  id: string
  title: string
  value: string
  icon: string | null
  svgIcon: string | null
  changeText: string
  changeDirection: 'up' | 'down'
  iconBackground: string
  iconColor: string
}

const { getColor } = useColors()

const dashboardMetrics = computed<DashboardMetric[]>(() => [
  {
    id: 'rivers',
    title: 'Rivers',
    value: '159',
    svgIcon: river,
    icon: null,
    changeText: '$1, 450',
    changeDirection: 'down',
    iconBackground: 'inheret',
    iconColor: getColor('on-success'),
  },
  {
    id: 'dams',
    title: 'Check Dams',
    value: '43',
    svgIcon: dam,
    icon: null,
    changeText: '25.36%',
    changeDirection: 'up',
    iconBackground: 'inheret',
    iconColor: getColor('on-info'),
  },
  {
    id: 'trees',
    title: 'Trees',
    value: '3,200,923',
    svgIcon: lake,
    icon: null,
    changeText: '2.5%',
    changeDirection: 'up',
    iconBackground: 'inheret',
    iconColor: getColor('on-danger'),
  },
])
</script>
