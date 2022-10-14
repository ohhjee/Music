<template>
    <div class="lg:flex lg:flex-col lg:space-y-5 items-center justify-center hidden">
        <div class="w-[3rem] rounded-t-full rounded-b-full bg-black/50 flex justify-center items-center px-3 py-4">
            <div class="flex flex-col space-y-7 items-start justify-center">
                <router-link to="#" class="flex items-center">
                    <HomeIcon class="w-6 h-6 text-[blue]" />
                </router-link>
                <router-link to="#" class="flex items-center">
                    <MusicalNoteIcon class="w-6 h-6 text-white" />
                </router-link>
                <router-link to="#" class="flex items-center">
                    <RadioIcon class="w-6 h-6 text-white" />
                </router-link>
                <router-link to="#" class="flex items-center">
                    <CpuChipIcon class="w-6 h-6 text-white" />
                </router-link>
            </div>
        </div>
        <div class="w-[3rem] rounded-t-full rounded-b-full bg-black/50 flex justify-center items-center px-3 py-4">
            <div class="flex flex-col space-y-7 items-start justify-center">
                <router-link to="#" class="flex items-center">
                    <UserIcon class="w-6 h-6 text-white" />
                </router-link>
                <router-link to="#" class="flex items-center">
                    <ArrowRightOnRectangleIcon class="w-6 h-6 text-white" />
                </router-link>
    
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { HomeIcon, MusicalNoteIcon, RadioIcon, CpuChipIcon ,UserIcon, ArrowRightOnRectangleIcon} from '@heroicons/vue/24/outline'
</script>

<style scoped>

</style>