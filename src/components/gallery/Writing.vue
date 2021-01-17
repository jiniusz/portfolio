<template>
  <div class="gallery">
    <div class="container">
      <div class="row gallery-content">

        <div class="col s12 m6 l12">
          <div class="card white">
            <div class="card-content">
              <span class="card-title grey-text text-darken-3">ทำไมถึงสนใจ Writing ?</span>
              <p class="grey-text text-darken-1">• เริ่มจากเป็นคนชอบอ่านหนังสือมากๆ ตั้งแต่สมัยเด็กๆ เป็นคนที่ชอบอ่านหนังสือการ์ตูนมากๆ</p>
              <p class="grey-text text-darken-1">• ทำให้ถูกปลูกฝังให้รักการอ่านมาตั้งแต่สมัยเด็กๆ นิสัยนี้ก็ติดตัวมาเรื่อยๆจนโต</p>
              <p class="grey-text text-darken-1">• จนมีโอกาสได้อ่านหนังสือประเภทอื่นๆนอกเหนือจากการ์ตูนบ้าง ช่วงที่เริ่มศึกษา Psychology ได้มีโอกาสอ่านหนังสือเกี่ยวกับการพัฒนาตัวเอง</p>
              <p class="grey-text text-darken-1">• เลยรักการอ่านมากยิ่งขึ้นไปอีกในช่วงนั้น จนพอโตมาตอนนี้รู้สึกว่าอยากคืนกำไรให้สังคมนักอ่านบ้าง</p>
              <p class="grey-text text-darken-1">• ตอนนี้กำลังดำเนินการอยู่ค้าบ จะเอาผลงานมาแปะนะ :)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Music',
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
