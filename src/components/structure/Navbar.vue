<template>
<nav class="z-depth-0 navbar">
    <div class="nav-wrapper white">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons grey-text text-darken-1">menu</i></a>
        <ul class="menu left hide-on-med-and-down">
            <li><a class="active" href="#">Work</a></li>
            <li><a href="#about">Interest</a></li>
            <li><a href="#contract">Who am i</a></li>
        </ul>
    </div>
</nav>

<ul class="sidenav" id="mobile-demo">
    <li><a class="active" href="#">Work</a></li>
    <li><a href="#about">Interest</a></li>
    <li><a href="#contract">Who am i</a></li>
</ul>
</template>

<script>

export default {
    name: 'Navbar',
    data(){
        return{
            mobileView: false
        }
    },
    methods: {
        handleView() {
            this.mobileView = window.innerWidth <= 768;
        }
    },
    beforeMount() {
        this.handleView();
        window.addEventListener('reize', this.handleView);
    }
}
</script>

<style scoped>
@media screen and (max-width: 4416px){
    .navbar{
        margin-top: 85px;
    }
}
@media screen and (max-width: 768px){
    .navbar{
        margin-top: 0px;
    }
}

.nav-wrapper{
    min-height: 100%;
    position: relative;
}

.navbar .nav-wrapper ul.menu {
    margin-left: 132px;
    font-size: 0.82em;
    font-weight: 520;
}

.navbar .nav-wrapper ul.menu li a{
    color: #e53935;
}

.navbar .nav-wrapper ul li.menu-active a {
    position: absolute;
    display: inline;
    border-bottom: 1px solid #757575;
}

.navbar .nav-wrapper ul.contract {
    margin-right: 132px;
}
</style>