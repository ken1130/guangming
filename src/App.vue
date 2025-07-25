<script setup>
</script>

<template>
  <div id="app">
    <nav class="navigation">
      <router-link to="/" class="nav-link">首頁</router-link>
      <span class="divider">|</span>
      <router-link to="/about" class="nav-link">關於我們</router-link>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>
