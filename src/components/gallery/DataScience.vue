<template>
  <div class="gallery">
    <div class="container">
      <div class="row gallery-content">

        <div class="col s12 m6 l12">
          <div class="card white">
            <div class="card-content">
              <span class="card-title grey-text text-darken-3">ทำไมถึงสนใจ Data Science ?</span>
              <p class="grey-text text-darken-1">• เริ่มต้นจากการได้มีโอกาสลงเรียนวิชา introduction to data science ตอนเรียนปี 4</p>
              <p class="grey-text text-darken-1">• ทำให้มีโอกาสเปิดมุมมองความคิด ได้รับรู้ว่าการวิเคราะห์ตัวเลขข้อมูลต่างๆ สามารถนำไปสู่การ predict พฤติกรรมของผู้ใช้ได้อย่างไร</p>
              <p class="grey-text text-darken-1">• เป็นอีก 1 ความสนใจที่อยากหยิบมาทำโปรเจคอะไรบางอย่าง</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DataScience',
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
