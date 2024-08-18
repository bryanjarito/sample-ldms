<script setup lang="ts">
import { PropType, computed, ref, watch } from 'vue'
import { useForm, VaImage } from 'vuestic-ui'
import { Lake } from '../types'
import UserAvatar from './UserAvatar.vue'
import { useProjects } from '../../projects/composables/useProjects'
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

const doShowMediaModal = ref(false)

const defaultNewLake: Lake = {
  id: 1,
  englishName: "Lake 1",
  droneShots: [],
  geoTag: "https://www.google.com/maps/place/22%C2%B004'43.7%22N+80%C2%B020'58.7%22E/@22.078792,80.3470621,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.078792!4d80.349637?entry=ttu",
  gujaratiName: "Abhishe",
  village: "Village 1",
  dimensions: "123 x 2324",
  partner: "Bill Gates",
  startDate: "March 23, 2023",
  endDate: "September 03, 2024",
  capacity: "234234",
  projectHead: "Mark Zuckerberg",
  projectHeadContact: "09464846545",
  supervisor: "Elon Mask",
  supervisorContact: "09451516554",
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
  mm: false
}

const images = [
  '/samples/sample-image1.jpg',
  '/samples/sample-image2.jpg',
  '/samples/sample-image3.jpg',
  '/samples/sample-image4.jpg',
  '/samples/sample-image5.jpg'
]

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

const roleSelectOptions: { text: Capitalize<UserRole>; value: UserRole }[] = [
  { text: 'Admin', value: 'admin' },
  { text: 'User', value: 'user' },
  { text: 'Owner', value: 'owner' },
]

const { projects } = useProjects({ pagination: ref({ page: 1, perPage: 9999, total: 10 }) })

</script>

<template>
  <div class="self-stretch flex-col justify-start items-start gap-4 flex">
    <div class="flex gap-4 flex-col md:flex-row w-full">
      <div class="w-full md:w-1/2">
        <label class="font-bold">Lake name in English: </label>
        {{ newLake.englishName }}
      </div>
      <div class="w-full md:w-1/2">
        <label class="font-bold">Lake name in Gujarati: </label>
        {{ newLake.gujaratiName }}
      </div>
    </div>
    <div class="flex gap-4 flex-col md:flex-row w-full">
      <div class="w-full md:w-1/2">
        <label class="font-bold">Village: </label>
        {{ newLake.village }}
      </div>
      <div class="w-full md:w-1/2">
        <label class="font-bold">Dimensions: </label>
        {{ newLake.dimensions }}
      </div>
    </div>
    <div class="flex gap-4 flex-col md:flex-row w-full">
      <div class="w-full md:w-1/2">
        <label class="font-bold">Partner: </label>
        {{ newLake.partner }}
      </div>
      <div class="w-full md:w-1/2">
        <label class="font-bold">Capacity: </label>
        {{ newLake.capacity }}
      </div>
    </div>
    <div class="flex gap-4 flex-col md:flex-row w-full">
      <div class="w-full md:w-1/2">
        <label class="font-bold">Start Date: </label>
        {{ newLake.startDate }}
      </div>
      <div class="w-full md:w-1/2">
        <label class="font-bold">End Date: </label>
        {{ newLake.endDate }}
      </div>
    </div>
    <div class="flex gap-4 flex-col md:flex-row w-full">
      <div class="w-full md:w-1/2">
        <label class="font-bold">Project Head: </label>
        {{ newLake.projectHead }}
      </div>
      <div class="w-full md:w-1/2">
        <label class="font-bold">Project Head Contact: </label>
        {{ newLake.projectHeadContact }}
      </div>
    </div>
    <div class="flex gap-4 flex-col md:flex-row w-full">
      <div class="w-full md:w-1/2">
        <label class="font-bold">Supervisor: </label>
        {{ newLake.supervisor }}
      </div>
      <div class="w-full md:w-1/2">
        <label class="font-bold">Supervisor Contact: </label>
        {{ newLake.supervisorContact }}
      </div>
    </div>
    <div class="flex gap-4 flex-col md:flex-row w-full">
      <div class="w-full truncate">
        <label class="font-bold">Geo Tag: </label>
        <a :href="newLake.geoTag" class="va-link">
          {{ newLake.geoTag }}
        </a>
      </div>
    </div>
    <div class="flex gap-4 flex-col md:flex-row w-full">
      <div class="w-full sm:w-1/2">
        <label class="font-bold">Onsite Images: </label>
        <a @click="doShowMediaModal = !doShowMediaModal">
          <VaImage
            class="w-full md:w-1/2 lg:w-1/3 hover:cursor-pointer"
            :ratio="10/9"
            src="../../../../public/samples/sample-image1.jpg"
          />
          <div class="hover:cursor-pointer">5 items</div>
        </a>
      </div>
    </div>
    <VaModal
      v-slot="{ cancel, ok }"
      v-model="doShowMediaModal"
      fullscreen
      close-button
      hide-default-actions
      :noOutsideDismiss="true"
    >
      <viewer :images="images" class="flex">
        <img v-for="src in images" :key="src" :src="src" class="w-36 px-2">
      </viewer>
      <!-- <VaImage src="/samples/sample-image1.jpg" alt="" /> -->
    </VaModal>
  </div>
</template>
