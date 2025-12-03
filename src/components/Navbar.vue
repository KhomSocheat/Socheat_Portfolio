<template>
  <nav class="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo with Photo -->
        <div class="shrink-0">
          <a href="#home" class="flex items-center gap-3 group">
            <div class="relative w-12 h-12">
              <div
                class="absolute inset-0 bg-gradient-to-r  rounded-full blur opacity-40 group-hover:opacity-60 transition">
              </div>
              <img src="/photo/photo_2025-04-07_14-27-12.jpg" alt="Khom Socheat"
                class="relative w-14 h-13 rounded-full object-fit shadow-lg"
                loading="eager" fetchpriority="high">
            </div>
            <div class="hidden sm:block">
              <p class="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition">Khom Socheat</p>
              <p class="text-xs text-gray-500">Software Developer</p>
            </div>
          </a>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="#home"
            class="px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium">
            {{ $t('nav.home') }}
          </a>
          <a href="#about"
            class="px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium">
            {{ $t('nav.aboutMe') }}
          </a>
          <a href="#academics"
            class="px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium">
            {{ $t('nav.academics') }}
          </a>
          <a href="#experience"
            class="px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium">
            {{ $t('nav.experience') }}
          </a>
          <a href="#contact"
            class="px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium">
            {{ $t('nav.contact') }}
          </a>
        </div>

        <!-- Right Section: Language & Mobile Menu -->
        <div class="flex items-center gap-3">
          <!-- Language Dropdown -->
          <div class="relative">
            <button @click="isOpen = !isOpen"
              class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 rounded-lg transition shadow-sm border border-indigo-100">
              <img :src="currentFlag" :alt="currentLanguage" class="w-5 h-4 object-cover rounded-sm shadow-sm" />
              <span class="font-medium text-gray-700">{{ currentLanguage }}</span>
              <svg class="w-4 h-4 text-gray-500 transition-transform" :class="{ 'rotate-180': isOpen }" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div v-if="isOpen"
              class="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              <button @click="changeLanguage('en')"
                class="w-full px-4 py-3 text-left hover:bg-indigo-50 flex items-center gap-3 transition group">
                <img src="https://flagcdn.com/w40/us.png" alt="English"
                  class="w-6 h-4 object-cover rounded shadow-sm" />
                <span class="font-medium text-gray-700 group-hover:text-indigo-600">English</span>
              </button>
              <button @click="changeLanguage('km')"
                class="w-full px-4 py-3 text-left hover:bg-indigo-50 flex items-center gap-3 transition group">
                <img src="https://flagcdn.com/w40/kh.png" alt="Khmer" class="w-6 h-4 object-cover rounded shadow-sm" />
                <span class="font-medium text-gray-700 group-hover:text-indigo-600">ខ្មែរ</span>
              </button>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-100">
        <div class="flex flex-col space-y-1">
          <a href="#home" @click="mobileMenuOpen = false"
            class="px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium">
            {{ $t('nav.home') }}
          </a>
          <a href="#about" @click="mobileMenuOpen = false"
            class="px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium">
            {{ $t('nav.aboutMe') }}
          </a>
          <a href="#academics" @click="mobileMenuOpen = false"
            class="px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium">
            {{ $t('nav.academics') }}
          </a>
          <a href="#experience" @click="mobileMenuOpen = false"
            class="px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium">
            {{ $t('nav.experience') }}
          </a>
          <a href="#contact" @click="mobileMenuOpen = false"
            class="px-4 py-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition font-medium">
            {{ $t('nav.contact') }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const isOpen = ref(false);
const mobileMenuOpen = ref(false);

const currentLanguage = computed(() => {
  return locale.value === 'en' ? 'EN' : 'KM';
});

const currentFlag = computed(() => {
  return locale.value === 'en'
    ? 'https://flagcdn.com/w40/us.png'
    : 'https://flagcdn.com/w40/kh.png';
});

const changeLanguage = (lang) => {
  locale.value = lang;
  isOpen.value = false;
};
</script>
