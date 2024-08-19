<script setup lang="ts">
import { ref, watch } from 'vue'
// import { useForm } from 'vuestic-ui'
// import { Lake } from '../types'
import { Checklist } from '../../checklist/types'
// import UserAvatar from './UserAvatar.vue'
// import { useProjects } from '../../projects/composables/useProjects'
// import { validators } from '../../../services/utils'

const checklist: Checklist = {
  fs: true,
  ss: true,
  wsi: true,
  prc: false,
  ha: false,
  cg: false,
  ec: false,
  ls: false,
  fwm: false,
  sd: false,
  mm: false,
}

const newChecklist = ref<Checklist>({ ...checklist })

const totalChecklist = Object.keys(newChecklist.value).length

const progress = ref(0)

const countDone = () => {
  progress.value = 0
  Object.keys(newChecklist.value).map((key) => {
    if (newChecklist.value[key]) {
      progress.value++
    }
  })
}
countDone()

watch(
  newChecklist.value,
  () => {
    countDone()
  },
  { deep: true },
)
</script>

<template>
  <div class="flex flex-col md:flex-row">
    <div class="flex w-full md:w-1/2 justify-center mb-10">
      <VeProgress :progress="((progress / totalChecklist) * 100).toFixed(1)">
        {{ ((progress / totalChecklist) * 100).toFixed(1) }}%
      </VeProgress>
    </div>
    <div class="flex flex-col">
      <VaCheckbox v-model="newChecklist.fs" label="Feasibility Study" class="mb-6" />
      <VaCheckbox v-model="newChecklist.ss" label="Site Selection" class="mb-6" />
      <VaCheckbox v-model="newChecklist.wsi" label="Water Source Identificaiton" class="mb-6" />
      <VaCheckbox v-model="newChecklist.prc" label="Permitting and Regulatory Compliance" class="mb-6" />
      <VaCheckbox v-model="newChecklist.ha" label="Hydrological Assessment" class="mb-6" />
      <VaCheckbox v-model="newChecklist.cg" label="Clearing and Grading" class="mb-6" />
      <VaCheckbox v-model="newChecklist.ec" label="Excavation and Construction" class="mb-6" />
      <VaCheckbox v-model="newChecklist.ls" label="Lining and Sealing" class="mb-6" />
      <VaCheckbox v-model="newChecklist.fwm" label="Filling and Water Management" class="mb-6" />
      <VaCheckbox v-model="newChecklist.sd" label="Shoreline Development" class="mb-6" />
      <VaCheckbox v-model="newChecklist.mm" label="Monitoring and Maintenance" />
    </div>
  </div>
</template>
