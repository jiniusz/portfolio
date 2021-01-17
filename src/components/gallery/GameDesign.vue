<template>
  <div class="gallery">
    <div class="container">
      <div class="row gallery-content">

        <div class="col s12 m6 l12">
          <div class="card white">
            <div class="card-content">
              <span class="card-title grey-text text-darken-3">ทำไมถึงสนใจ Game Design ?</span>
              <p class="grey-text text-darken-1">• ก็เริ่มจากเด็กติดเกมคนนึงนั้นแหละ จนมีโอกาสได้ทำเซิฟเวอร์เกมเอง ลองผิดลองถูกไปเรื่อย</p>
              <p class="grey-text text-darken-1">• จนเริ่มจับทางได้ว่า อ๋อ เราอยากให้ผู้เล่นทำแบบนี้ เราก็ต้องออกแบบระบบที่เอื้ออำนวยให้เขาคิดและกระทำในแบบที่เราต้องการ</p>
              <p class="grey-text text-darken-1">• กลายเป็นว่าได้ทักษะทางความคิดมาอีกอย่างเลย ชอบมากจนไปซื้อ Masterclass ของ Will Wright มาดูเลย 55555</p>
              <p class="grey-text text-darken-1">• ในอนาคตเป็นอีก 1 ความสนใจที่น่าจะถูกหยิบขึ้นมาทำโปรเจคอะไรบางอย่างแหละ ความรู้สึกผมบอกแบบนั้น</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GameDesign',
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
