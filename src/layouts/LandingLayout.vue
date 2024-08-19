<template>
  <VaLayout class="h-full bg-[var(--va-background-secondary)]" :left="{ absolute: true }">
    <VaNavbar color="#fff" class="h-24 hidden md:inline-grid">
      <template #left>
        <VaNavbarItem class="logo ml-14">
          <img src="../assets/images/dholakia_logo.png" class="w-32" alt="" />
        </VaNavbarItem>
      </template>
      <template #right>
        <div class="flex gap-5 mr-14 text-lg">
          <VaNavbarItem class="hover:cursor-pointer hover:bg-[#00610E] hover:text-white p-2 rounded-md">
            Home
          </VaNavbarItem>
          <VaNavbarItem class="hover:cursor-pointer hover:bg-[#00610E] hover:text-white p-2 rounded-md">
            <a href="#lakes"> Lakes </a>
          </VaNavbarItem>
          <VaNavbarItem class="hover:cursor-pointer hover:bg-[#00610E] hover:text-white p-2 rounded-md">
            <a href="#rivers"> Rivers </a>
          </VaNavbarItem>
          <VaNavbarItem class="hover:cursor-pointer hover:bg-[#00610E] hover:text-white p-2 rounded-md">
            <a href="#dams"> Dams </a>
          </VaNavbarItem>
          <VaNavbarItem class="hover:cursor-pointer hover:bg-[#00610E] hover:text-white p-2 rounded-md">
            <a href="#trees"> Trees </a>
          </VaNavbarItem>
        </div>
      </template>
    </VaNavbar>
    <template #top>
      <VaNavbar color="#fff" class="inline-grid md:hidden py-2">
        <template #left>
          <VaButton
            preset="secondary"
            border-color="primary"
            :icon="showSidebar ? 'menu_open' : 'menu'"
            @click="showSidebar = !showSidebar"
          />
        </template>
        <template #center>
          <VaNavbarItem class="font-bold text-lg">
            <img src="../assets/images/dholakia_logo.png" class="w-20" alt="" />
          </VaNavbarItem>
        </template>
      </VaNavbar>
    </template>

    <template #left>
      <VaSidebar v-model="showSidebar" class="block md:hidden">
        <VaSidebarItem>
          <VaSidebarItemContent>
            <VaSidebarItemTitle> Home </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem>
          <VaSidebarItemContent>
            <VaSidebarItemTitle> Lakes </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem>
          <VaSidebarItemContent>
            <VaSidebarItemTitle> Rivers </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem>
          <VaSidebarItemContent>
            <VaSidebarItemTitle> Dams </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem>
          <VaSidebarItemContent>
            <VaSidebarItemTitle> Trees </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
      </VaSidebar>
    </template>
    <div class="w-full flex justify-center h-[500px]">
      <!-- <video class="w-11/12 object-cover rounded-2xl" autoplay muted loop>
        <source src="../assets/videos/video1.webm" type="video/webm">
      </video> -->
      <VaImage fit="cover" class="w-full" src="/samples/sample-image1.jpg" lazy />
    </div>
    <div class="grid md:grid-cols-2 h-[450px] mx-16 items-center mt-14 mb-44 md:mb-0">
      <div class="text-4xl font-bold px-3">
        We won the battle against "Water Scarcity" Panch Ganga Tirth - Triveni Sangam
      </div>
      <div class="text-lg px-3">
        <p>
          The Dholakia Foundation has made a significant contribution towards mitigating water scarcity in drought-prone
          Gujarat by building 111 lakes with the help of 400 people. This project has provided a water storage capacity
          of 550 crore liters to 20 villages and transformed 250 acres of deserted land into a beautiful lake, creating
          a Panch Ganga Triveni - Sangam.
        </p>
        <p class="mt-4">
          The inauguration of these lakes by PM Modi has brought much-needed relief to over 100,000 farmers, who now
          have access to a reliable water supply for their crops. Despite these efforts, 28% of households in rural
          Gujarat still lack access to safe drinking water. The Dholakia Foundation remains committed to continuing
          their efforts towards water conservation.
        </p>
      </div>
    </div>
    <div id="lakes" class="bg-gray-100 p-10 mt-24">
      <div class="flex justify-between mx-7 my-5">
        <div class="text-3xl font-bold">Lakes</div>
        <VaButton> More details... </VaButton>
      </div>
      <div class="grid md:grid-cols-3">
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Amrutba Sarovar</div>
        </div>
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Ramesh Garden Sarovar</div>
        </div>
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Naran Sarovar - Triveni Sangam</div>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-2 h-[450px] mx-16 items-center mt-14 mb-44 md:mb-0">
      <div class="text-4xl font-bold px-3">
        We won the battle against "Water Scarcity" Panch Ganga Tirth - Triveni Sangam
      </div>
      <div class="text-lg px-3">
        <p>
          The Dholakia Foundation has made a significant contribution towards mitigating water scarcity in drought-prone
          Gujarat by building 111 lakes with the help of 400 people. This project has provided a water storage capacity
          of 550 crore liters to 20 villages and transformed 250 acres of deserted land into a beautiful lake, creating
          a Panch Ganga Triveni - Sangam.
        </p>
        <p class="mt-4">
          The inauguration of these lakes by PM Modi has brought much-needed relief to over 100,000 farmers, who now
          have access to a reliable water supply for their crops. Despite these efforts, 28% of households in rural
          Gujarat still lack access to safe drinking water. The Dholakia Foundation remains committed to continuing
          their efforts towards water conservation.
        </p>
      </div>
    </div>
    <div id="rivers" class="bg-gray-100 p-10 mt-24">
      <div class="flex justify-between mx-7 my-5">
        <div class="text-3xl font-bold">Rivers</div>
        <VaButton> More details... </VaButton>
      </div>
      <div class="grid md:grid-cols-3">
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Amrutba Sarovar</div>
        </div>
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Ramesh Garden Sarovar</div>
        </div>
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Naran Sarovar - Triveni Sangam</div>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-2 h-[450px] mx-16 items-center mt-14 mb-44 md:mb-0">
      <div class="text-4xl font-bold px-3">
        We won the battle against "Water Scarcity" Panch Ganga Tirth - Triveni Sangam
      </div>
      <div class="text-lg px-3">
        <p>
          The Dholakia Foundation has made a significant contribution towards mitigating water scarcity in drought-prone
          Gujarat by building 111 lakes with the help of 400 people. This project has provided a water storage capacity
          of 550 crore liters to 20 villages and transformed 250 acres of deserted land into a beautiful lake, creating
          a Panch Ganga Triveni - Sangam.
        </p>
        <p class="mt-4">
          The inauguration of these lakes by PM Modi has brought much-needed relief to over 100,000 farmers, who now
          have access to a reliable water supply for their crops. Despite these efforts, 28% of households in rural
          Gujarat still lack access to safe drinking water. The Dholakia Foundation remains committed to continuing
          their efforts towards water conservation.
        </p>
      </div>
    </div>
    <div id="dams" class="bg-gray-100 p-10 mt-24">
      <div class="flex justify-between mx-7 my-5">
        <div class="text-3xl font-bold">Dams</div>
        <VaButton> More details... </VaButton>
      </div>
      <div class="grid md:grid-cols-3">
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Amrutba Sarovar</div>
        </div>
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Ramesh Garden Sarovar</div>
        </div>
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Naran Sarovar - Triveni Sangam</div>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-2 h-[450px] mx-16 items-center mt-14 mb-44 md:mb-0">
      <div class="text-4xl font-bold px-3">
        We won the battle against "Water Scarcity" Panch Ganga Tirth - Triveni Sangam
      </div>
      <div class="text-lg px-3">
        <p>
          The Dholakia Foundation has made a significant contribution towards mitigating water scarcity in drought-prone
          Gujarat by building 111 lakes with the help of 400 people. This project has provided a water storage capacity
          of 550 crore liters to 20 villages and transformed 250 acres of deserted land into a beautiful lake, creating
          a Panch Ganga Triveni - Sangam.
        </p>
        <p class="mt-4">
          The inauguration of these lakes by PM Modi has brought much-needed relief to over 100,000 farmers, who now
          have access to a reliable water supply for their crops. Despite these efforts, 28% of households in rural
          Gujarat still lack access to safe drinking water. The Dholakia Foundation remains committed to continuing
          their efforts towards water conservation.
        </p>
      </div>
    </div>
    <div id="trees" class="bg-gray-100 p-10 mt-24">
      <div class="flex justify-between mx-7 my-5">
        <div class="text-3xl font-bold">Trees</div>
        <VaButton> More details... </VaButton>
      </div>
      <div class="grid md:grid-cols-3">
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Amrutba Sarovar</div>
        </div>
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Ramesh Garden Sarovar</div>
        </div>
        <div class="px-7">
          <VaImage fit="cover" class="w-full h-72" src="/samples/sample-image2.jpg" lazy />
          <div class="text-lg">Naran Sarovar - Triveni Sangam</div>
        </div>
      </div>
    </div>
  </VaLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import { useBreakpoint } from 'vuestic-ui'

const showSidebar = ref(false)
// const breakpoint = useBreakpoint()
</script>
