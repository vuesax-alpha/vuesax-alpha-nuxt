<script setup lang="ts">
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
      <vs-button>
        Click me
        <!-- <vs-icon>
          <vs-icon-home />
        </vs-icon> -->
      </vs-button>
    </section>
  </section>
</template>

<style>
.mb-5 {
  margin-bottom: 20px;
}
</style>
