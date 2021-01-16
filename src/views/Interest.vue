<template>
  <div class="interest">
    <div class="container">
      <div class="row workcategories">
      <div class="col s12 m4 l4"><InterestCategories name="Psychology" details="พระอาทิตย์ ดาวเหนือ เข็มทิศนำทางชีวิต"/></div>
      <div class="col s12 m4 l4"><InterestCategories name="Game Design" details="การผจญภัยที่น่าตื่นเต้นอยู่เสมอ"/></div>
      <div class="col s12 m4 l4"><InterestCategories name="Graphic Design" details="ขาดไม่ได้ ทำให้ทุกอย่างดูดีขึ้น"/></div>
      <div class="col s12 m4 l4"><InterestCategories name="Writing" details="รักการอ่านมาก เลยอยากคืนกำไรสู่สังคมบ้าง"/></div>
      <div class="col s12 m4 l4"><InterestCategories name="Data Science" details="พ่อหมอ Jiniusz โหราศาสตร์ 2021"/></div>
      <div class="col s12 m4 l4"><InterestCategories name="Music" details="เพื่อนในทุกจังหวะของชีวิต"/></div>
      </div>
    </div>
  </div>
</template>

<script>
import InterestCategories from '@/components/InterestCategories.vue'

export default {
  name: 'Interest',
  components: {
    InterestCategories
  }
}
</script>

<style scoped>
@media screen and (max-width: 4416px){
    .interest .workcategories{
      margin-top: 100px;
      margin-bottom: 100px;
    }
}

@media screen and (max-width: 600px){
    .interest .workcategories{
      margin-top: 100px;
      margin-bottom: 100px;
      display: flex;
      flex-direction: column;
    }
}

.interest {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>