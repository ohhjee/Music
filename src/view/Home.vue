<template>
    <div>
        <nav></nav>
        <div class="lg:flex lg:space-x-3 mt-3 lg:mt-0">
            <side></side>

            <div class="w-full relative hidden lg:flex">
                <div class=" w-full lg:w-8/12 xl:w-7/12 bg-blue-300/40 lg:bg-blue-300/90 h-full rounded-[35px]">
                    <div
                        class="text absolute w-full flex flex-col items-start justify-center lg:block lg:w-1/2 h-full space-y-3 p-[2rem] z-10">
                        <div id="current" class="text-[14px] text-white">
                            Current playlist
                        </div>
                        <div>
                            <div class="w-full lg:w-2/3">
                                <div class="text-[40px] text-white">
                                    R & B Hits
                                </div>
                                <small class="text-white w-2/4">
                                    All mine, Lie again, petty call everyday. <br>
                                    Out of time, No love, Bad habit, <br>
                                    and so much more
                                </small>
                                <div class="mt-5">
                                    <div class="flex -space-x-1 overflow-hidden">
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                            alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute w-full h-full">
                        <div
                            class="bg-[url('../../assets/images/images/Vector.svg')] overflow-hidden rounded-[35px] h-full bg-no-repeat absolute top-0 left-0 bottom-0 lg:w-8/12 xl:w-7/12 bg-right-top right-0">
                        </div>

                        <div
                            class="bg-[url('../../assets/images/images/singer.png')] h-full bg-no-repeat bottom-0 left-0 top-0 bg-right-top right-0 absolute lg:w-8/12 xl:w-7/12">
                        </div>
                    </div>
                </div>
                <div class="sm:w-full lg:w-4/12 xl:w-5/12 lg:pl-5 space-y-4 h-full ">
                    <div class="text-[20px] font-bold text-white">
                        Top Charts
                    </div>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <div class="h-16 w-16 bg-red-500"></div>

                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                            sean swadder
                                        </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                2:34:45

                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <div class="h-16 w-16 bg-red-500"></div>

                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                            sean swadder
                                        </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                2:34:45
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <div class="h-16 w-16 bg-red-500"></div>
                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                            sean swadder
                                        </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                2:34:45
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" sm:w-full  lg:hidden space-y-5 ">
                <div class=" w-full  bg-blue-300/40 relative lg:bg-blue-300/90  rounded-[35px]">
                    <div
                        class="text relative w-full flex flex-col items-start justify-center lg:block h-full space-y-3 p-[2rem] z-10">
                        <div id="current" class="text-[14px] text-white">
                            Current playlist
                        </div>
                        <div>
                            <div class="w-full lg:w-2/3">
                                <div class="text-[40px] text-white">
                                    R & B Hits
                                </div>
                                <small class="text-white w-2/4">
                                    All mine, Lie again, petty call everyday. <br>
                                    Out of time, No love, Bad habit, <br>
                                    and so much more
                                </small>
                                <div class="mt-5">
                                    <div class="flex -space-x-1 overflow-hidden">
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                            alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute top-0 w-full h-full">
                        <div
                            class="bg-[url('../../assets/images/images/Vector.svg')] overflow-hidden rounded-[35px] h-full bg-no-repeat absolute top-0 left-0 bottom-0 w-full bg-right-top right-0">
                        </div>
                        <div
                            class="bg-[url('../../assets/images/images/singer.png')] h-full bg-no-repeat bottom-0 left-0 top-0 bg-right-top right-0 absolute lg:w-8/12 xl:w-7/12">
                        </div>
                    </div>
                </div>
                <div class="w-full hidden sm:block  space-y-4 h-full ">
                    <div class="text-[20px] font-bold text-white">
                        Top Charts
                    </div>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-md">
                            <div class="flex justify-between sm:items-center">
                                <div class="flex flex-col sm:flex-row ">
                                    <div class="h-16 w-16 bg-red-500"></div>
                                    <div class=" mt-2 sm:mt-0 sm:ml-4 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                            sean swadder
                                        </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                2:34:45
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-md">
                            <div class="flex justify-between sm:items-center">
                                <div class="flex flex-col sm:flex-row ">
                                    <div class="h-16 w-16 bg-red-500"></div>
                                    <div class=" mt-2 sm:mt-0 sm:ml-4 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                            sean swadder
                                        </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                2:34:45

                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-md">
                            <div class="flex justify-between sm:items-center">
                                <div class="flex flex-col sm:flex-row ">
                                    <div class="h-16 w-16 bg-red-500"></div>

                                    <div class=" mt-2 sm:mt-0 sm:ml-4 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                            sean swadder
                                        </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                2:34:45

                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full sm:hidden space-y-4 h-full ">
                <div class="text-[20px] font-bold text-white">
                    Top Charts
                </div>
                <div class="owl-carousel owl-theme block w-full z-[0] space-y-4 playlist" id="carousel">
                    <div class="w-full">
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-[30px]">
                            <div class="flex flex-col space-y-4 w-full justify-between items-center">
                                <div class="flex">
                                    <!-- <div class="h-16 w-16 bg-red-500"></div> -->
                                    <img src="../assets/images/images/Rectangle 14 (2).png" class="" alt="">
                                </div>
                                <div class="flex justify-between w-full items-center">

                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                            sean swadder
                                        </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                2:34:45

                                            </small>
                                        </div>
                                    </div>
                                    <div id="like">
                                        <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                            <HeartIcon class="w-5 h-5 text-[blue]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-[30px]">
                            <div class="flex flex-col space-y-4 w-full justify-between items-center">
                                <div class="flex">
                                    <!-- <div class="h-16 w-16 bg-red-500"></div> -->
                                    <img src="../assets/images/images/Rectangle 14 (2).png" class="" alt="">
                                </div>
                                <div class="flex justify-between w-full items-center">

                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                            sean swadder
                                        </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                2:34:45

                                            </small>
                                        </div>
                                    </div>
                                    <div id="like">
                                        <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                            <HeartIcon class="w-5 h-5 text-[blue]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-[30px]">
                            <div class="flex flex-col space-y-4 w-full justify-between items-center">
                                <div class="flex">
                                    <!-- <div class="h-16 w-16 bg-red-500"></div> -->
                                    <img src="../assets/images/images/Rectangle 14 (2).png" class="" alt="">
                                </div>
                                <div class="flex justify-between w-full items-center">

                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                            sean swadder
                                        </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                2:34:45

                                            </small>
                                        </div>
                                    </div>
                                    <div id="like">
                                        <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                            <HeartIcon class="w-5 h-5 text-[blue]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-10 ">
            <div class="title">
                <div class="text-[20px] mb-4 text-white">
                    New Release.
                </div>
            </div>
            <div class="flex space-x-4 w-full">
                <div class="owl-carousel owl-theme block w-full z-[0] car" id="car">
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle_1.png" class="rounded-md w-full " alt="Sample 2">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            life in a bubble
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (1).png" class="rounded-md w-full"
                            alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            Mountain
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (2).png" class="rounded-md w-full"
                            alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            limits
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (3).png" class="rounded-md w-full"
                            alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            everything black
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (4).png" class="rounded-md w-full"
                            alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            cancelled
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (5).png" class="rounded-md w-full"
                            alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            nomad
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (5).png" class="rounded-md w-full"
                            alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            nomad
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="owl-carousel owl-theme flex">
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            <div> Your Content </div>
            </div> 
        -->
        <!-- play function -->
        <div class="w-full bg-black/20  backdrop-blur-md px-5 py-[10px] fixed left-0 bottom-0">
            <div class="absolute w-full h-full top-0 left-0 bottom-0 -z-10 right-0">
                <div
                    class="bg-[url('../../assets/images/images/Rectangle 14 (1).png')] w-full h-full blur-sm bg-no-repeat">
                </div>
            </div>
            <div class="flex items-center justify-between  lg:container lg:mx-auto">
                <div class="w-2/12 md:w-1/12">
                    <!-- <div class=""></div> -->
                    <img src="../assets/images/images/Rectangle 14 (1).png" class="h-[50%] w-[50%]" alt="">
                </div>
                <div class="w-8/12 mx-auto ">

                    <!-- MUSIC CONTROLLER -->
                    <div class="items-center flex flex-col space-y-[.5rem] justify-center">

                        <div id="Music_controller" class="flex space-x-[2rem] items-center">

                            <div class="flex flex-row items-center space-x-[2rem]">
                                <!-- SHUFFLE -->
                                <div class="hidden sm:block">
                                    <!-- @click="shuffle" -->
                                    <div>
                                        <i class="fa-solid fa-shuffle text-white"></i>
                                    </div>
                                </div>
                                <!-- PREV -->
                                <div class="hidden sm:flex border rounded-full h-7 w-7 items-center justify-center"
                                    @click="control('prev')">
                                    <i
                                        class="fa-solid fa-backward-step text-white  flex items-center justify-center"></i>
                                </div>
                                <!-- PLAY -->
                                <div class="">
                                    <button @click="play()" v-if="!isPlaying"
                                        class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center ">
                                        <i
                                            class="fa-solid fa-play text-white flex items-center justify-center w-full"></i>
                                    </button>
                                    <div @click="pause()" v-else
                                        class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center ">
                                        <!-- <i class="fa-solid fa-play text-white flex items-center justify-center w-full"></i> -->
                                        <i
                                            class="fa-solid fa-pause text-white flex items-center justify-center w-full"></i>
                                    </div>
                                </div>
                                <!-- NEXT -->
                                <div>
                                    <div @click="control('next')"
                                        class="h-7 w-7 border rounded-full flex items-center justify-center">
                                        <i
                                            class="fa-solid fa-forward-step text-white flex items-center justify-center"></i>
                                    </div>
                                </div>
                                <!-- REPEAT -->
                                <div class="hidden sm:block">
                                    <div>
                                        <i class="fa-solid fa-repeat text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-white text-[14px]">
                            {{currentSong?.title}} - {{currentSong?.artist}}
                        </div>
                        <!-- TIMER -->
                        <div class="w-full hidden sm:block">
                            <div class="relative">
                                <div class="border w-full h-[2px] relative"></div>
                                <div class="absolute top-0 left-0 w-full">
                                    <div class="bg-[blue] w-7/12 h-[2px]"></div>
                                </div>
                            </div>
                            <div
                                class="h-6 w-6 flex items-center justify-center absolute top-[90px]  left-[61%]  md:top-[85px] xl:top-[6px] md:left-1/2 bg-white/20 rounded-full">
                                <div class="h-3 w-3 bg-white rounded-full flex items-center justify-center"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-2/12 hidden md:block h-[84.34px]">
                    <div class="flex items-center  justify-center space-x-2">
                        <div class=" w-4/12 md:w-3/12 lg:w-2/12">
                            <div class="" @click="volume()" v-if="!muted">
                                <i class="fa-solid fa-volume-high text-white"></i>

                            </div>
                            <div v-else @click="unMute()">
                                <i class="fa-solid fa-volume-xmark  text-white"></i>
                            </div>
                        </div>
                        <!-- <div class="w-full">
                                   <div class="relative">
                                     <div class="border w-full h-[2px] relative"></div>
                                    <div class="absolute top-0 left-0 w-full">
                                        <div class="bg-[blue] w-7/12 h-[2px]"></div>
                                    </div>
                                   </div>
                                    <div class="h-6 w-6 flex items-center justify-center absolute top-[37px] right-1/2 bg-white/20 rounded-full">
                                        <div class="h-3 w-3 bg-white rounded-full flex items-center justify-center"></div>
                                    </div>
                                </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import 'jquery';
import { defineComponent, ref, onMounted } from 'vue';
import Nav from '../components/Nav.vue';
import Side from '../components/Side.vue';
import { Song } from '../model';

export default defineComponent({
    components: {
        Nav, Side
    },

    setup() {
        $(document).ready(function () {
            $('.car').owlCarousel({
                loop: true,
                responsiveClass: true,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    640: {
                        items: 2
                    },
                    768: {
                        items: 3

                    },
                    1024: {
                        items: 4
                    }
                }
            });
            $('.playlist').owlCarousel({
                loop: true,
                responsiveClass: true,
                margin: 10,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    640: {
                        items: 2
                    },
                    768: {
                        items: 3

                    },
                    1024: {
                        items: 4
                    }
                }
            });

        });

        const songs = ref<Song[]>([
            {
                id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
                title: 'Peace Be Unto You',
                artist: 'Asake',
                src: new URL('../assets/audio/Asake-Peace-Be-Unto-You-PBUY.mp3',
                    import.meta.url).href
            },
            {
                id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
                title: 'Buga',
                artist: 'kiss dan',
                src: new URL('../assets/audio/Kizz-Daniel-Buga-ft-Tekno-(JustNaija.com).mp3',
                    import.meta.url).href
            },
            {
                id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
                title: 'Back in uni',
                artist: 'BlaqBonez',
                src: new URL('../assets/audio/Blaqbonez-Back-In-Uni.mp3',
                    import.meta.url).href
            },
            {
                id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
                title: 'Terminator',
                artist: 'Asake',
                src: new URL('../assets/audio/Asake-Terminator-file-1-(JustNaija.com).mp3',
                    import.meta.url).href
            }

        ])

        const muted = ref<boolean>(false)
        const isPlaying = ref<boolean>(false)
        const shuffles = ref([])
        const index = ref(0)
        const currentSong = ref<Song | null>(null)
        const player = ref(new Audio())

        onMounted(() => {
            setMedia();
        })

        const setMedia = (music?: Song) => {
            const newSong = music ? music : songs.value[index.value];

            currentSong.value = newSong
            player.value.src = newSong.src
        }

        const volume = () => {
            player.value.muted = true
            muted.value = true
        }

        const play = () => {
            isPlaying.value = false

            if (currentSong.value == null) setMedia()

            player.value.play()

            player.value.addEventListener('ended', function () {
                index.value += 1

                if (index.value > songs.value.length - 1) index.value = 0;

                setMedia(songs.value[index.value])
                player.value.play()
            })

            isPlaying.value = true
        }

        const pause = () => {
            player.value.pause()
            isPlaying.value = false
        }

        const unMute = () => {
            player.value.muted = false
            muted.value = false
        }

        const control = (type: "next" | "prev") => {
            let SongIndex = 0

            if (type === "next") {
                index.value += 1
                SongIndex = index.value < songs.value.length ? index.value : 0
            };

            if (type === "prev") {
                index.value -= 1
                SongIndex = index.value > 0 ? index.value : 0
            };

            setMedia(songs.value[SongIndex])
            play()
        }

        return {
            muted,
            isPlaying,
            songs,
            currentSong,
            volume,
            play,
            pause,
            unMute,
            control,
        }
    }
})

</script>

<!-- <script setup lang="ts">

</script> -->
<!-- 
<script setup lang="ts">
import 'jquery'
import { SplideSlide } from '@splidejs/vue-splide';
import { HeartIcon, ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'
import Nav from '../components/Nav.vue';
import Side from '../components/Side.vue';
import { ref, onMounted } from 'vue'

$(document).ready(function () {
    $('.car').owlCarousel({
        loop: true,
        responsiveClass: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            768: {
                items: 3

            },
            1024: {
                items: 4
            }
        }
    });
    $('.playlist').owlCarousel({
        loop: true,
        responsiveClass: true,
        margin: 10,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            768: {
                items: 3

            },
            1024: {
                items: 4
            }
        }
    });

});

const muted = ref<boolean>(false)
const isPlaying = ref<boolean>(false)
const current = ref<{ title: string, artist: string, src: any }>({
    title: "", artist: "", src: ""
})
const index = ref(0)
const shuffles = ref([])
const song = ref<{ title: string, artist: string, src: any }[]>([
    {
        title: 'Peace Be Unto You',
        artist: 'Asake',
        src: new URL('../assets/audio/Asake-Peace-Be-Unto-You-PBUY.mp3',
            import.meta.url).href
    },
    {
        title: 'Buga',
        artist: 'kiss dan',
        src: new URL('../assets/audio/Kizz-Daniel-Buga-ft-Tekno-(JustNaija.com).mp3',
            import.meta.url).href
    },
    {
        title: 'Back in uni',
        artist: 'BlaqBonez',
        src: new URL('../assets/audio/Blaqbonez-Back-In-Uni.mp3',
            import.meta.url).href
    },
    {
        title: 'Terminator',
        artist: 'Asake',
        src: new URL('../assets/audio/Asake-Terminator-file-1-(JustNaija.com).mp3',
            import.meta.url).href
    }
])

const player = ref(new Audio())

current.value = song.value[index.value]
player.value.src = current.value.src

function volume() {
    player.value.muted = true
    muted.value = true
}

function unmute() {
    player.value.muted = false
    muted.value = false

}

// function shuffle() {
//     const numb = Math.floor(Math.random() * song.value.length)

//     current.value = song.value[numb]

//     shuffles.value.unshift({ text: song.value.src })

//     isPlaying.value = true

//     player.value.addEventListener('ended', () => {
//         index.value += 1

//         if (index.value > song.value.length - 1) {
//             index.value = 0
//         }
//         current.value = song.value[index.value]
//         plays(current.value)
//     })
//     plays(current.value)

// }

function plays() {
    console.log('songs')
    // if (typeof songs.src !== "undefined") {
    //     current.value = songs;
    //     player.value.src = current.value?.src
    // }
    // player.value.play()
    // player.value.addEventListener('ended', function () {
    //     index.value += 1
    //     if (index.value > song.value.length - 1) {
    //         index.value = 0
    //     }
    //     current.value = song.value[index.value]
    //     plays(current.value)
    // })
    // isPlaying.value = true
}

function pause() {
    player.value.pause()
    isPlaying.value = false
}

function next() {
    index.value++
    if (index.value > song.value.length - 1) {
        index.value = 0
    }
    current.value = song.value[index.value]
    // plays(current.value)
}

function prev() {
    index.value -= 1
    if (index.value < 0) {
        index.value = song.value.length - 1
    }
    current.value = song.value[index.value]
    // plays(current.value)

}
</script> -->

<style lang="scss">
.owl-carousel {
    .owl-stage-outer {
        .owl-stage {
            display: flex !important;

            .owl-item {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>