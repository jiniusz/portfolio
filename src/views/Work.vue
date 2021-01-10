<template>
  <div class="work">
    <div class="container">
      <div class="row workcategories">
        <div class="col s12 m4 l6"><WorkCategories/></div>
        <div class="col s12 m4 l6"><WorkCategories/></div>
        <div class="col s12 m4 l6"><WorkCategories/></div>
        <div class="col s12 m4 l6"><WorkCategories/></div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkCategories from '@/components/WorkCategories.vue'

export default {
  name: 'Work',
  components: {
    WorkCategories
  }
}
</script>

<style scoped>
@media screen and (max-width: 4416px){
    .work .workcategories{
      margin-top: 100px;
      margin-bottom: 100px;
    }
}

@media screen and (max-width: 970px){
    .work .workcategories{
      margin-top: 100px;
      margin-bottom: 100px;
    }
}

@media screen and (max-width: 600px){
    .work .workcategories{
      margin-top: 100px;
      margin-bottom: 100px;
      display: flex;
      flex-direction: column;
    }
}

.work {
  margin: 0;
  padding: 0;
  height: 100%;
}


</style>
