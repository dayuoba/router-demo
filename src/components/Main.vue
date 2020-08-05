<template>
  <div>
    Main Component
    <div data-key="profile" @click="handleClick">profile link</div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Main',
  methods: {
    handleClick(e) {
      this.$router.push('profile')
      console.log(e)
    }
  }
}

</script>
