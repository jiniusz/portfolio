<template>
  <div class="row">
    <div class="col s12 m6 l12">
      <a :href="slug">
      <div class="card white">
        <div class="card-content">
          <span class="card-title grey-text text-darken-3">{{ name }}</span>
          <p class="grey-text">{{ details }}</p>
        </div>
      </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkCategories',
  props: {
    name: String,
    details: String,
    slug: String
  }
}
</script>


<style scoped>
@media screen and (max-width: 4416px){
    .card{
      height: 100%;
      width: 100%;
    }
    .card .card-image img{
      height: 100%;
      width: 100%;
    }
}

@media screen and (max-width: 992px){
    .card{
      height: 100%;
      width: 200%;
    }
    .card .card-image img{
      height: 100%;
      width: 200%;
    }
}

@media screen and (max-width: 750px){
    .card{
      height: 100%;
      width: 210%;
    }
    .card .card-image img{
      height: 100%;
      width: 210%;
    }
}

@media screen and (max-width: 720px){
    .card{
      height: 100%;
      width: 220%;
    }
    .card .card-image img{
      height: 100%;
      width: 220%;
    }
}

@media screen and (max-width: 680px){
    .card{
      height: 100%;
      width: 250%;
    }
    .card .card-image img{
      height: 100%;
      width: 250%;
    }
}

@media screen and (max-width: 600px){
    .card{
      height: 100%;
      width: 100%;
    }
    .card .card-image img{
      height: 100%;
      width: 100%;
    }
}
</style>
