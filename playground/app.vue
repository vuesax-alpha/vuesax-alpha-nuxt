<script setup lang="ts">
const navs = [
  {
    name: 'Main page'
  },
  {
    name: 'Discover'
  }
]

const navigateLink = ref('')

onMounted(() => {
  VsNotification({
    title: 'Success',
    content: 'This is a success message',
    color: 'success'
  })
})
</script>

<template>
  <section>
    <section class="mb-5">
      <vs-navbar v-model="navigateLink" center-collapsed left-collapsed>
        <vs-navbar-item v-for="(nav, i) in navs" :id="nav.name" :key="i">
          {{ nav.name }}
        </vs-navbar-item>

        <template #right>
          <vs-button icon type="transparent" color="dark">
            <vs-icon>
              <vs-icon-bell />
            </vs-icon>
          </vs-button>
        </template>
      </vs-navbar>
    </section>
  </section>
</template>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
