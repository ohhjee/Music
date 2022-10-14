<template>
    <div class="hidden lg:flex my-2 space-x-6">
        <div>
            <img src="../assets/images/images/logo.svg" class="" alt="">
        </div>
        <div class="flex items-center">
            <div class="h-full flex items-center absolute">
                <MagnifyingGlassIcon class="text-white w-4 h-4" />
    
            </div>
            <div class="">
                <input type="text" class="px-6 py-2 focus:outline-1  bg-transparent" placeholder="Search Artist">
    
            </div>
        </div>
    </div>
    <div class=" flex lg:hidden w-full justify-between">
        <div class="flex items-center space-x-3">
        <div class="w-10 h-10 flex m items-center space-y-2 justify-center flex-col">
            <span class="bg-white w-[100%] h-[.5vh]"></span>

            <span class="bg-white w-full h-[.5vh]"></span>


            <span></span>
    
        </div>
            <img src="../assets/images/images/logo.svg" class="" alt="">
        </div>
        <div class="flex items-center ">
            <div class="h-full flex items-center ">
                <MagnifyingGlassIcon class="text-white w-4 h-4" />
    
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>

</style>