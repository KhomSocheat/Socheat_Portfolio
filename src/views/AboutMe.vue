<template>
  <section id="about" class="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ">
            {{ $t('about.title') }}
          </span>
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto ">{{ $t('about.subtitle') }}</p>
      </div>

      <!-- Content Card -->
      <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <!-- Bio -->
        <div class="mb-10">
          <p class="text-gray-700 text-lg mb-4 leading-relaxed">
            {{ $t('about.bio1') }}
          </p>
          <p class="text-gray-700 text-lg leading-relaxed">
            {{ $t('about.bio2') }}
          </p>
        </div>

        <!-- Personal Info Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
            <div class="shrink-0 w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 font-medium">{{ $t('about.name') }}</p>
              <p class="text-gray-900 font-semibold">Khom Socheat</p>
            </div>
          </div>

          <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
            <div class="shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 font-medium">{{ $t('about.email') }}</p>
              <p class="text-gray-900 font-semibold">socheat@email.com</p>
            </div>
          </div>

          <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl">
            <div class="shrink-0 w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 font-medium">{{ $t('about.location') }}</p>
              <p class="text-gray-900 font-semibold">Phnom Penh, Cambodia</p>
            </div>
          </div>

          <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
            <div class="shrink-0 w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-500 font-medium">{{ $t('about.study') }}</p>
              <p class="text-gray-900 font-semibold">CADT</p>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="mb-10">
          <h4 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span class="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></span>
            {{ $t('about.skills') }}
          </h4>
          <div class="flex flex-wrap gap-3">
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">HTML/CSS</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">JavaScript</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">jQuery</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">Vue.js</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">Tailwind
              CSS</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">Node.js</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">Python</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">Django</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-violet-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">PHP</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">Laravel</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">C#</span>
            <span
              class="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition">Git</span>
          </div>
        </div>

        <!-- Download CV Button -->
        <div class="flex justify-center">
          <a href="#"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {{ $t('about.downloadCV') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
