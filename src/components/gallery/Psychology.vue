<template>
  <div class="gallery">
    <div class="container">
      <div class="row gallery-content">

        <div class="col s12 m6 l12">
          <div class="card white">
            <div class="card-content">
              <span class="card-title grey-text text-darken-3">ทำไมถึงสนใจ Psychology ?</span>
              <p class="grey-text text-darken-1">• เริ่มจากช่วงนั้นเหมือนจะมีอาการซึมเศร้า ทำแบบทดสอบของกรมสุขภาพจิตแล้วได้ระดับปานกลาง</p>
              <p class="grey-text text-darken-1">• ผนวกกับตอนนั้นเกรดตอนเรียนมหาลัยแย่มาก จนเกือบโดนรีไทร์เลยรู้สึกว่าเด็กที่รับผิดชอบการเรียนแบบเรา มันเกิดอะไรขึ้นกันแน่</p>
              <p class="grey-text text-darken-1">• เลยเริ่มหาความรู้เกี่ยวกับทางนี้ ทำมาเรื่อยๆสม่ำเสมอ ผลคือมีความสุขมาก กลายเป็นคนที่ทัศนคติใช้ได้คนนึงเลยแหละคิดว่านะ</p>
              <p class="grey-text text-darken-1">• แต่โลกยังมีอะไรอีกมากมายในค้นหา ให้อัพเกรดตัวเอง ยังมีหนังสือดีๆอีกมากรออยู่ :)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Psychology',
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
