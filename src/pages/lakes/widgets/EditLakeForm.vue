<script setup lang="ts">
import { PropType, computed, ref, watch } from 'vue'
import { useForm } from 'vuestic-ui'
import { Lake } from '../types'
// import UserAvatar from './UserAvatar.vue'
// import { useProjects } from '../../projects/composables/useProjects'
import { validators } from '../../../services/utils'

const props = defineProps({
  lake: {
    type: Object as PropType<Lake | null>,
    default: null,
  },
  saveButtonLabel: {
    type: String,
    default: 'Save',
  },
})

const defaultNewLake: Lake = {
  id: 1,
  englishName: '',
  droneShots: [],
  geoTag: '',
  gujaratiName: '',
  village: '',
  dimensions: '',
  partner: '',
  startDate: '',
  endDate: '',
  capacity: '',
  projectHead: '',
  projectHeadContact: '',
  supervisor: '',
  supervisorContact: '',
  fs: false,
  ss: false,
  wsi: false,
  prc: false,
  ha: false,
  cg: false,
  ec: false,
  ls: false,
  fwm: false,
  sd: false,
  mm: false,
}

const newLake = ref<Lake>({ ...defaultNewLake })

const isFormHasUnsavedChanges = computed(() => {
  return Object.keys(newLake.value).some((key) => {
    if (key === 'avatar' || key === 'projects') {
      return false
    }

    return newLake.value[key as keyof Lake] !== (props.lake ?? defaultNewLake)?.[key as keyof Lake]
  })
})

defineExpose({
  isFormHasUnsavedChanges,
})

watch(
  () => props.user,
  () => {
    if (!props.user) {
      return
    }

    newUser.value = {
      ...props.user,
      avatar: props.user.avatar || '',
    }
  },
  { immediate: true },
)

const avatar = ref<File>()

const makeAvatarBlobUrl = (avatar: File) => {
  return URL.createObjectURL(avatar)
}

watch(avatar, (newAvatar) => {
  newUser.value.avatar = newAvatar ? makeAvatarBlobUrl(newAvatar) : ''
})

const form = useForm('add-user-form')

const emit = defineEmits(['close', 'save'])

const onSave = () => {
  if (form.validate()) {
    emit('save', newUser.value)
  }
}

// const roleSelectOptions: { text: Capitalize<UserRole>; value: UserRole }[] = [
//   { text: 'Admin', value: 'admin' },
//   { text: 'User', value: 'user' },
//   { text: 'Owner', value: 'owner' },
// ]

// const { projects } = useProjects({ pagination: ref({ page: 1, perPage: 9999, total: 10 }) })
</script>

<template>
  <VaForm v-slot="{ isValid }" ref="add-user-form" class="flex-col justify-start items-start gap-4 inline-flex w-full">
    <div class="self-stretch flex-col justify-start items-start gap-4 flex">
      <div class="flex gap-4 flex-col md:flex-row w-full">
        <VaInput
          v-model="newLake.englishName"
          label="Lake name in English"
          class="w-full md:w-1/2"
          :rules="[validators.required]"
          name="englishName"
        />
        <VaInput
          v-model="newLake.gujaratiName"
          label="Lake name in Gujarati"
          class="w-full md:w-1/2"
          :rules="[validators.required]"
          name="gujaratiName"
        />
      </div>
      <div class="flex gap-4 flex-col md:flex-row w-full">
        <VaInput
          v-model="newLake.geoTag"
          label="Geo Tag"
          class="w-full md:w-full"
          :rules="[validators.required]"
          name="geoTag"
        />
      </div>
      <div class="flex gap-4 flex-col md:flex-row w-full">
        <VaInput
          v-model="newLake.village"
          label="Village"
          class="w-full md:w-1/2"
          :rules="[validators.required]"
          name="village"
        />
        <VaInput
          v-model="newLake.dimensions"
          label="Dimensions"
          class="w-full md:w-1/2"
          :rules="[validators.required]"
          name="dimensions"
        />
      </div>
      <div class="flex gap-4 flex-col md:flex-row w-full">
        <VaInput
          v-model="newLake.partner"
          label="Partner"
          class="w-full md:w-1/2"
          :rules="[validators.required]"
          name="partner"
        />
        <VaInput
          v-model="newLake.capacity"
          label="Capacity"
          class="w-full md:w-1/2"
          :rules="[validators.required]"
          name="capacity"
        />
      </div>
      <div class="flex gap-4 flex-col md:flex-row w-full">
        <VaDateInput
          v-model="newLake.startDate"
          class="w-full md:w-1/2"
          label="Start Date"
          :rules="[validators.required]"
        />
        <VaDateInput
          v-model="newLake.endDate"
          class="w-full md:w-1/2"
          label="End Date"
          :rules="[validators.required]"
        />
      </div>
      <div class="flex gap-4 flex-col md:flex-row w-full">
        <VaInput
          v-model="newLake.projectHead"
          label="Project Head"
          class="w-full md:w-1/2"
          :rules="[validators.required]"
          name="projectHead"
        />
        <VaInput
          v-model="newLake.projectHeadContact"
          label="Project Head Contact"
          class="w-full md:w-1/2"
          :rules="[validators.required]"
          name="projectHeadContact"
        />
      </div>
      <div class="flex gap-4 flex-col md:flex-row w-full">
        <VaInput
          v-model="newLake.supervisor"
          label="Supervisor"
          class="w-full md:w-1/2"
          :rules="[validators.required]"
          name="supervisor"
        />
        <VaInput
          v-model="newLake.supervisorContact"
          label="Supervisor Contact"
          class="w-full md:w-1/2"
          :rules="[validators.required]"
          name="supervisorContact"
        />
      </div>
      <VaFileUpload
        v-model="newLake.droneShots"
        type="gallery"
        dropzone
        drop-zone-text="Upload site files here"
        upload-button-text="Upload files"
        file-types="image/*,video/*"
        label="Test"
      >
      </VaFileUpload>

      <div class="flex gap-2 flex-col-reverse items-stretch justify-end w-full sm:flex-row sm:items-center">
        <VaButton preset="secondary" color="secondary" @click="$emit('close')">Cancel</VaButton>
        <VaButton :disabled="!isValid" @click="onSave">{{ saveButtonLabel }}</VaButton>
      </div>
    </div>
  </VaForm>
</template>
