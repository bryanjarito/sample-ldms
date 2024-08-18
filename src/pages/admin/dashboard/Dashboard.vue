<script lang="ts" setup>
import RevenueUpdates from './cards/RevenueReport.vue'
import ProjectTable from './cards/ProjectTable.vue'
import RevenueByLocationMap from './cards/RevenueByLocationMap.vue'
import DataSection from './DataSection.vue'
import YearlyBreakup from './cards/YearlyBreakup.vue'
import MonthlyEarnings from './cards/MonthlyEarnings.vue'
import RegionRevenue from './cards/RegionRevenue.vue'
import Timeline from './cards/Timeline.vue'
import PieChart from '../../../components/va-charts/chart-types/PieChart.vue'

const data = {
  labels: [
    'Number of lakes under construction',
    'Number of checkdams under construction',
    'Kms of river being rejuvinated (individually)'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [50, 100, 300],
    backgroundColor: [ '#4ac788', '#007fbc', '#06bee1'],
    hoverOffset: 4
  }]
};
</script>

<template>
  <h1 class="page-title font-bold">Dashboard</h1>
  <section class="flex flex-col gap-4">
    <!-- <div class="flex flex-col sm:flex-row gap-4">
      <RevenueUpdates class="w-full sm:w-[70%]" />
      <div class="flex flex-col gap-4 w-full sm:w-[30%]">
        <YearlyBreakup class="h-full" />
        <MonthlyEarnings />
      </div>
    </div> -->
    <DataSection />
    <div class="flex justify-center w-full">
      <div class="w-2/5">
        <PieChart :data="data"/>
      </div>
    </div>
    <!-- <div class="flex flex-col md:flex-row gap-4">
      <RevenueByLocationMap class="w-full md:w-4/6" />
      <RegionRevenue class="w-full md:w-2/6" />
    </div>
    <div class="flex flex-col md:flex-row gap-4">
      <ProjectTable class="w-full md:w-1/2" />
      <Timeline class="w-full md:w-1/2" />
    </div> -->
  </section>
</template>
