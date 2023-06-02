<template>
  <div class="app">
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
    <backToExamListDialog />
  </div>
</template>

<script setup lang="ts">
  import layoutHeader from '@/components/layoutHeader.vue'
  import backToExamListDialog from '@/components/backToExamListDialog.vue'
</script>
<style lang="scss" scoped>
    .app {
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
        display: flex;
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
</style>
