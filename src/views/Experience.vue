<template>
  <section id="experience" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ $t('experience.title') }}</h2>
        <p class="text-gray-600 text-lg">{{ $t('experience.subtitle') }}</p>
        <div class="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-4"></div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical Line -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>

        <!-- Experience Items -->
        <div class="space-y-12">
          <!-- Ministry of Information -->
          <div class="relative flex flex-col md:flex-row items-center">
            <!-- Left Side (Desktop) -->
            <div class="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <div
                class="bg-linear-to-br from-indigo-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition md:ml-auto">
                <div class="flex items-center gap-3 mb-3">
                  <div class="bg-indigo-600 p-2 rounded-lg">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span class="text-indigo-600 font-semibold text-sm">{{ $t('experience.current') }}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $t('experience.jobs.ministry.position') }}</h3>
                <p class="text-indigo-600 font-medium mb-3">{{ $t('experience.jobs.ministry.company') }}</p>
                <p class="text-gray-600 text-sm mb-4">{{ $t('experience.jobs.ministry.duration') }}</p>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2 text-gray-700">
                    <svg class="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ $t('experience.jobs.ministry.responsibilities.0') }}</span>
                  </li>
                  <li class="flex items-start gap-2 text-gray-700">
                    <svg class="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ $t('experience.jobs.ministry.responsibilities.1') }}</span>
                  </li>
                  <li class="flex items-start gap-2 text-gray-700">
                    <svg class="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ $t('experience.jobs.ministry.responsibilities.2') }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Center Timeline Dot -->
            <div
              class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg items-center justify-center">
              <div class="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>

            <!-- Right Side (Empty on Desktop) -->
            <div class="md:w-1/2"></div>
          </div>

          <!-- Add more experience items here if needed -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
