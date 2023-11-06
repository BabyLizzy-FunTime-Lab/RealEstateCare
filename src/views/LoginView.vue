<script>

export default {
  name: "LoginView",
}
</script>

<template>
<base-layout>
  <h2>Login</h2>
  <p>Needs username and password</p>
  <p>On login the userID gets updated in the state.</p>
  <p>If userID is null, all buttons lead to the login screen.</p>
  <p>User data is stored as json, no hashing for this prototype.</p>
</base-layout>
</template>

<style scoped lang="scss">

</style>
