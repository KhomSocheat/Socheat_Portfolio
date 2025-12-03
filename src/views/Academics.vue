<template>
  <section id="academics" class="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ $t('academics.title') }}</h2>
        <p class="text-gray-600 text-lg">{{ $t('academics.subtitle') }}</p>
        <div class="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-4"></div>
      </div>

      <!-- Education Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- ACLEDA University (Current) -->
        <div
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
          <div class="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 relative">
            <div class="absolute top-4 right-4">
              <span class="bg-green-400 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                {{ $t('academics.current') }}
              </span>
            </div>
            <div class="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 class="text-white text-xl font-bold mb-1">{{ $t('academics.education.university.school') }}</h3>
            <p class="text-indigo-100 text-sm">{{ $t('academics.education.university.duration') }}</p>
          </div>
          <div class="p-6">
            <h4 class="text-lg font-bold text-gray-900 mb-3">{{ $t('academics.education.university.degree') }}</h4>
            <div class="flex items-center gap-2 text-gray-600 mb-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-sm">{{ $t('academics.education.university.location') }}</span>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <div class="flex items-center gap-2 text-indigo-600">
                <div class="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span class="text-sm font-medium">In Progress</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ITI Associate -->
        <div
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
          <div class="bg-gradient-to-br from-blue-500 to-cyan-600 p-6">
            <div class="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-white text-xl font-bold mb-1">{{ $t('academics.education.iti.school') }}</h3>
            <p class="text-blue-100 text-sm">{{ $t('academics.education.iti.duration') }}</p>
          </div>
          <div class="p-6">
            <h4 class="text-lg font-bold text-gray-900 mb-3">{{ $t('academics.education.iti.degree') }}</h4>
            <div class="flex items-center gap-2 text-gray-600 mb-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-sm">{{ $t('academics.education.iti.location') }}</span>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <div class="flex items-center gap-2 text-blue-600">
                <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
               <span class="text-sm font-medium">Completed</span>
              </div>
            </div>
          </div>
        </div>

        <!-- High School -->
        <div
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
          <div class="bg-gradient-to-br from-purple-500 to-pink-600 p-6">
            <div class="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-white text-xl font-bold mb-1">{{ $t('academics.education.highschool.school') }}</h3>
            <p class="text-purple-100 text-sm">{{ $t('academics.education.highschool.duration') }}</p>
          </div>
          <div class="p-6">
            <h4 class="text-lg font-bold text-gray-900 mb-3">{{ $t('academics.education.highschool.degree') }}</h4>
            <div class="flex items-center gap-2 text-gray-600 mb-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-sm">{{ $t('academics.education.highschool.location') }}</span>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <div class="flex items-center gap-2  text-blue-600">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm font-medium">Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
