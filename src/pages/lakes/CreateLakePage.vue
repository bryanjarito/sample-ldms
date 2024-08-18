<script setup lang="ts">
import { ref } from 'vue'
import LakesTable from './widgets/LakesTable.vue'
import EditLakeForm from './widgets/EditLakeForm.vue'
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

const showAddUserModal = () => {
  userToEdit.value = null
  doShowEditUserModal.value = true
}

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
  <h1 class="page-title">Create Lake</h1>

  <VaCard>
    <VaCardContent>
      <div class="flex flex-col md:flex-row gap-2 mb-2 justify-between">
        <!-- <RouterLink to="/lake/lake-list/lake-create" aria-label="Visit home page">
          Add User
        </RouterLink>
        <VaButton @click="showAddUserModal">Add User</VaButton> -->
      </div>

      <EditLakeForm
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
    </VaCardContent>
  </VaCard>
</template>
