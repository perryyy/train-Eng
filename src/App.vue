<template>
  <div class="app">
    <div class="container">
      <div class="header">
        <layoutHeader/>
      </div>
      <div class="content">
        <div class="aside" v-if="false">
          aside
        </div>
        <div class="main">
          <transition name="fade">
            <RouterView />
          </transition>
        </div>
      </div>
      <el-backtop
        class="hidden-xs-only"
        :right="50"
        :bottom="50"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import layoutHeader from '@/components/layoutHeader.vue'
</script>
<style lang="scss" scoped>
  @import 'normalize.css/normalize.css';
  @import 'element-plus/theme-chalk/display.css';
  .app {
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .header {
        flex-grow: 1;
        height: 10vh;
      }
      .content {
        width: inherit;
        min-height: 90vh;
        height: fit-content;
        display: flex;
        background-color: #E5EAF3;
        .aside {
          width: 15%;
        }
        .main {
          flex: 1;
          .fade-enter-active, .fade-leave-active {
            transition: opacity 0.5s;
          }
          .fade-enter, .fade-leave-to {
            opacity: 0;
          }
        }
      }
    }

  }
</style>
