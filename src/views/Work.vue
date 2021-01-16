<template>
  <div class="work">
    <div class="container">
      <div class="row workcategories">
        <div class="col s12 m4 l4"><WorkCategories name="Business" details="กิจกรรมยามว่างและไม่ว่าง ขับเคลื่อนชีวิตให้ไปต่อ" slug="#/business-gallery"/></div>
        <div class="col s12 m4 l4"><WorkCategories name="Coding" details="ไม่อยากทำเป็นส่วนมาก แต่สลัดทิ้งไม่เคยได้" slug="#/coding-gallery"/></div>
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
