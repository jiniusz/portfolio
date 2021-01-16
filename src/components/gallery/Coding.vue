<template>
  <div class="gallery">
    <div class="container">
      <div class="row gallery-content">

        <div class="col s12 m6 l12">
          <div class="card white">
            <div class="card-content">
              <span class="card-title grey-text text-darken-3">ผลงานชิ้นที่ 0 : ปูพื้นฐานทักษะ Coding</span>
              <p class="grey-text text-darken-1">• เป็นครั้งแรกที่ตัดสินใจจะฝึกทักษะด้านนี้ หลังจากหนักแน่นมาตลอดว่าไม่เอา โปรแกรมมิ่ง 55555</p>
              <p class="grey-text text-darken-1">• รับรู้ว่าทักษะที่เรียนมาในมหาลัยเป็นทักษะโครตพื้นฐาน บน Production จริงๆมีอะไรที่ต้องรู้จักอีกมาก</p>
              <p class="grey-text text-darken-1">• เริ่มทำความรู้จักพื้นที่ที่ไม่รู้จัก ขยายๆขอบเขตความรู้ ความเข้าใจไปเรื่อยๆ ผ่านการทำโปรเจค</p>
              <p class="grey-text text-darken-1">• กำลังดำเนินการจะมาเขียนต่อแล้วกันนะ ...</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Coding',
}
</script>


<style scoped>
@media screen and (max-width: 4416px){
    .gallery .gallery-content{
      margin-top: 100px;
      margin-bottom: 100px;
    }
}

@media screen and (max-width: 600px){
    .gallery .gallery-content{
      margin-top: 100px;
      margin-bottom: 100px;
      display: flex;
      flex-direction: column;
    }
}

.gallery {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
