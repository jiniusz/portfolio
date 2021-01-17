<template>
  <div class="gallery">
    <div class="container">
      <div class="row gallery-content">

        <div class="col s12 m6 l12">
          <div class="card white">
            <div class="card-content">
              <span class="card-title grey-text text-darken-3">ทำไมถึงสนใจ Music ?</span>
              <p class="grey-text text-darken-1">• เริ่มจากช่วงเด็กๆ ที่บ้านชอบร้องคาราโอเกะกันอยู่เป็นประจำ โชคดีที่ Community ของที่บ้านมีนักร้องเสียงเพราะอยู่หลายคน 55555</p>
              <p class="grey-text text-darken-1">• ทำให้รักเสียงดนตรี การร้องเพลง จากตรงนั้น ตอนมัธยมศึกษาปีที่ 3 ผมมีโอกาสได้ขึ้นแสดงมินิคอนเสิร์ตที่จัดภายในโรงเรียน</p>
              <p class="grey-text text-darken-1">• เป็นอีกจุดเริ่มต้นของการหัดเล่นดนตรี มีโอกาสได้ทำเพลง 1 เพลงด้วยครับ แต่คงไม่ให้ฟังหรอกเขิน 55555555555555</p>
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
