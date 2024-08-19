<script setup lang="ts">
import { ref } from 'vue'
import TreesTable from './widgets/TreesTable.vue'
import EditTreeForm from './widgets/EditTreeForm.vue'
import { Lake } from './types'
import { useLakes } from './composables/useLakes'
import { useModal, useToast } from 'vuestic-ui'

const doShowEditUserModal = ref(false)

const { lakes, isLoading, filters, sorting, pagination, ...usersApi } = useLakes()

const userToEdit = ref<Lake | null>(null)

const showEditUserModal = (lake: Lake) => {
  userToEdit.value = lake
  doShowEditUserModal.value = true
}

// const showAddUserModal = () => {
//   userToEdit.value = null
//   doShowEditUserModal.value = true
// }

const { init: notify } = useToast()

const onUserSaved = async (lake: Lake) => {
  if (userToEdit.value) {
    await usersApi.update(lake)
    notify({
      message: `${lake.englishName} has been updated`,
      color: 'success',
    })
  } else {
    usersApi.add(lake)
    notify({
      message: `${lake.englishName} has been created`,
      color: 'success',
    })
  }
}

const onUserDelete = async (lake: Lake) => {
  await usersApi.remove(lake)
  notify({
    message: `${lake.englishName} has been deleted`,
    color: 'success',
  })
}

const editFormRef = ref()

const { confirm } = useModal()

const beforeEditFormModalClose = async (hide: () => unknown) => {
  if (editFormRef.value.isFormHasUnsavedChanges) {
    const agreed = await confirm({
      maxWidth: '380px',
      message: 'Form has unsaved changes. Are you sure you want to close it?',
      size: 'small',
    })
    if (agreed) {
      hide()
    }
  } else {
    hide()
  }
}
</script>

<template>
  <h1 class="page-title">Trees</h1>

  <VaCard>
    <VaCardContent>
      <div class="flex flex-col md:flex-row gap-2 mb-2 justify-between">
        <div class="flex flex-col md:flex-row gap-2 justify-start">
          <!-- <VaButtonToggle
            v-model="filters.isActive"
            color="background-element"
            border-color="background-element"
            :options="[
              { label: 'Active', value: true },
              { label: 'Inactive', value: false },
            ]"
          /> -->
          <VaInput v-model="filters.search" placeholder="Search">
            <template #prependInner>
              <VaIcon name="search" color="secondary" size="small" />
            </template>
          </VaInput>
        </div>
        <!-- <RouterLink to="/lake/lake-list/lake-create" aria-label="Visit home page">
          Add User
        </RouterLink>
        <VaButton @click="showAddUserModal">Add User</VaButton> -->
      </div>

      <TreesTable
        v-model:sort-by="sorting.sortBy"
        v-model:sorting-order="sorting.sortingOrder"
        :lakes="lakes"
        :loading="isLoading"
        :pagination="pagination"
        @editUser="showEditUserModal"
        @deleteUser="onUserDelete"
      />
    </VaCardContent>
  </VaCard>

  <VaModal
    v-slot="{ cancel, ok }"
    v-model="doShowEditUserModal"
    size="small"
    mobile-fullscreen
    close-button
    hide-default-actions
    :before-cancel="beforeEditFormModalClose"
  >
    <h1 class="va-h5">{{ userToEdit ? 'Edit user' : 'Add user' }}</h1>
    <EditTreeForm
      ref="editFormRef"
      :user="userToEdit"
      :save-button-label="userToEdit ? 'Save' : 'Add'"
      @close="cancel"
      @save="
        (user) => {
          onUserSaved(user)
          ok()
        }
      "
    />
  </VaModal>
</template>
