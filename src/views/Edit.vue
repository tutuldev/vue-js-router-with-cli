<template>
  <div>
    <h3>This is Edit Page</h3>
    {{id}}
  </div>
</template>

<script>
export default {
name: 'edit',
data(){
  return{
    id:this.$route.params.id
  } 
    }

}
</script>
<!-- scoped diyle sob pege pabe na sudu ei page tei pabe -->
<style scoped>
h3 {
  color: red;
}
</style>