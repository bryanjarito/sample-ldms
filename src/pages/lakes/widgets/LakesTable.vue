<script setup lang="ts">
import { defineVaDataTableColumns, useModal } from 'vuestic-ui'
import { Lake } from '../types'
import { PropType, computed, toRef } from 'vue'
import { Pagination, Sorting } from '../../../data/pages/lakes'
import { useVModel } from '@vueuse/core'
import { Project } from '../../projects/types'

const columns = defineVaDataTableColumns([
  { label: 'English Name', key: 'englishName', sortable: true },
  { label: 'gujaratiName', key: 'gujaratiName', sortable: true },
  { label: 'geoTag', key: 'geoTag', sortable: true },
  { label: 'village', key: 'village', sortable: true },
  { label: 'droneShots', key: 'droneShots', sortable: true },
  { label: ' ', key: 'actions', align: 'right' },
])

const props = defineProps({
  lakes: {
    type: Array as PropType<Lake[]>,
    required: true,
  },
  loading: { type: Boolean, default: false },
  pagination: { type: Object as PropType<Pagination>, required: true },
  sortBy: { type: String as PropType<Sorting['sortBy']>, required: true },
  sortingOrder: { type: String as PropType<Sorting['sortingOrder']>, required: true },
})

const emit = defineEmits<{
  (event: 'edit-user', user: User): void
  (event: 'delete-user', user: User): void
  (event: 'update:sortBy', sortBy: Sorting['sortBy']): void
  (event: 'update:sortingOrder', sortingOrder: Sorting['sortingOrder']): void
}>()

const lakes = toRef(props, 'lakes')
const sortByVModel = useVModel(props, 'sortBy', emit)
const sortingOrderVModel = useVModel(props, 'sortingOrder', emit)

const roleColors: Record<UserRole, string> = {
  admin: 'danger',
  user: 'background-element',
  owner: 'warning',
}

const totalPages = computed(() => Math.ceil(props.pagination.total / props.pagination.perPage))

const { confirm } = useModal()

const onUserDelete = async (lake: Lake) => {
  const agreed = await confirm({
    title: 'Delete user',
    message: `Are you sure you want to delete ${lake.englishName}?`,
    okText: 'Delete',
    cancelText: 'Cancel',
    size: 'small',
    maxWidth: '380px',
  })

  if (agreed) {
    emit('delete-user', lake)
  }
}

const formatProjectNames = (projects: Project[]) => {
  if (projects.length === 0) return 'No projects'
  if (projects.length <= 2) {
    return projects.map((project) => project.project_name).join(', ')
  }

  return (
    projects
      .slice(0, 2)
      .map((project) => project.project_name)
      .join(', ') +
    ' + ' +
    (projects.length - 2) +
    ' more'
  )
}
</script>

<template>
  <VaDataTable
    v-model:sort-by="sortByVModel"
    v-model:sorting-order="sortingOrderVModel"
    :columns="columns"
    :items="lakes"
    :loading="$props.loading"
  >
    <template #cell(englishName)="{ rowData }">
      <div class="flex items-center gap-2 max-w-[230px] ellipsis">
        <!-- <UserAvatar :lake="rowData as Lake" size="small" /> -->
        {{ rowData.englishName }}
      </div>
    </template>

    <template #cell(gujaratiName)="{ rowData }">
      <div class="max-w-[120px] ellipsis">
        {{ rowData.gujaratiName }}
      </div>
    </template>

    <template #cell(geoTag)="{ rowData }">
      <div class="ellipsis max-w-[120px]">
        <a href="#" class="va-link">{{ rowData.geoTag }}</a>
      </div>
    </template>

    <template #cell(droneShots)="{ rowData }">
      <div class="ellipsis max-w-[120px]">
        <a href="#" class="va-link">{{ rowData.droneShots }}</a>
      </div>
    </template>

    <template #cell(village)="{ rowData }">
      {{ rowData.village }}
    </template>

    <template #cell(actions)="{ rowData }">
      <div class="flex gap-2 justify-end">
        <RouterLink :to="`${rowData.id}`" aria-label="Visit home page">
          <VaButton
            preset="primary"
            size="small"
            icon="visibility"
            aria-label="View lake"
          />
        </RouterLink>
        <VaButton
          preset="primary"
          size="small"
          icon="mso-edit"
          aria-label="Edit lake"
          @click="$emit('edit-user', rowData as Lake)"
        />
        <VaButton
          preset="primary"
          size="small"
          icon="mso-delete"
          color="danger"
          aria-label="Delete lake"
          @click="onUserDelete(rowData as Lake)"
        />
      </div>
    </template>
  </VaDataTable>

  <div class="flex flex-col-reverse md:flex-row gap-2 justify-between items-center py-2">
    <div>
      <b>{{ $props.pagination.total }} results.</b>
      Results per page
      <VaSelect v-model="$props.pagination.perPage" class="!w-20" :options="[10, 50, 100]" />
    </div>

    <div v-if="totalPages > 1" class="flex">
      <VaButton
        preset="secondary"
        icon="va-arrow-left"
        aria-label="Previous page"
        :disabled="$props.pagination.page === 1"
        @click="$props.pagination.page--"
      />
      <VaButton
        class="mr-2"
        preset="secondary"
        icon="va-arrow-right"
        aria-label="Next page"
        :disabled="$props.pagination.page === totalPages"
        @click="$props.pagination.page++"
      />
      <VaPagination
        v-model="$props.pagination.page"
        buttons-preset="secondary"
        :pages="totalPages"
        :visible-pages="5"
        :boundary-links="false"
        :direction-links="false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.va-data-table {
  ::v-deep(.va-data-table__table-tr) {
    border-bottom: 1px solid var(--va-background-border);
  }
}
</style>
