<script setup lang="ts">
import { ref } from 'vue'
// import LakesTable from './widgets/LakesTable.vue'
import LakeDetails from './widgets/LakeDetails.vue'
import LakeChecklist from './widgets/LakeChecklist.vue'
// import { Lake } from './types'
// import { useLakes } from './composables/useLakes'
// import { useModal, useToast } from 'vuestic-ui'

// const doShowEditUserModal = ref(false)

// const { ...usersApi } = useLakes()

// const userToEdit = ref<Lake | null>(null)

// const showEditUserModal = (lake: Lake) => {
//   userToEdit.value = lake
//   doShowEditUserModal.value = true
// }

// const showAddUserModal = () => {
//   userToEdit.value = null
//   doShowEditUserModal.value = true
// }

// const { init: notify } = useToast()

// const onUserSaved = async (lake: Lake) => {
//   if (userToEdit.value) {
//     await usersApi.update(lake)
//     notify({
//       message: `${lake.englishName} has been updated`,
//       color: 'success',
//     })
//   } else {
//     usersApi.add(lake)
//     notify({
//       message: `${lake.englishName} has been created`,
//       color: 'success',
//     })
//   }
// }

// const onUserDelete = async (lake: Lake) => {
//   await usersApi.remove(lake)
//   notify({
//     message: `${lake.englishName} has been deleted`,
//     color: 'success',
//   })
// }

const editFormRef = ref()

// const { confirm } = useModal()

// const beforeEditFormModalClose = async (hide: () => unknown) => {
//   if (editFormRef.value.isFormHasUnsavedChanges) {
//     const agreed = await confirm({
//       maxWidth: '380px',
//       message: 'Form has unsaved changes. Are you sure you want to close it?',
//       size: 'small',
//     })
//     if (agreed) {
//       hide()
//     }
//   } else {
//     hide()
//   }
// }
</script>

<template>
  <h1 class="page-title">Lake Details</h1>

  <VaCard class="mb-3">
    <VaCardTitle>Lake Information</VaCardTitle>
    <VaCardContent>
      <LakeDetails ref="editFormRef" />
    </VaCardContent>
  </VaCard>

  <VaCard>
    <VaCardTitle>Lake Checklist</VaCardTitle>
    <VaCardContent>
      <LakeChecklist ref="lakeChecklistRef" />
    </VaCardContent>
  </VaCard>
</template>
