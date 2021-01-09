<template>
<nav class="z-depth-0 navbar">
    <div class="nav-wrapper white">
        <a href="#" class="brand-logo center grey-text text-darken-1">Jiniusz</a>
        <ul id="nav-mobile" class="menu left hide-on-med-and-down">
            <li><router-link to="" class="grey-text text-darken-1">WORK</router-link></li>
            <li><router-link to="" class="grey-text text-darken-1">ABOUT</router-link></li>
            <li class="menu-active "><router-link to="" class="grey-text text-darken-1">CONTACT</router-link></li>
        </ul>
        <ul id="nav-mobile" class="contract right hide-on-med-and-down">
            <li><a href="" class="grey-text text-darken-1"><i class="fab fa-github fa-lg"></i></a></li>
            <li><a href="" class="grey-text text-darken-1"><i class="fab fa-facebook fa-lg"></i></a></li>
            <li><a href="" class="grey-text text-darken-1"><i class="fab fa-instagram fa-lg"></i></a></li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar{
    margin-top: 65px;
    line-height: 30px;
}

.navbar .nav-wrapper ul li a{
    font-size: 0.82em;
    font-weight: 520;
}
.navbar .nav-wrapper ul.menu {
    margin-left: 132px;
    margin-top: 20px;
}
.navbar .nav-wrapper ul li.menu-active a {
    position: absolute;
    display: inline;
    border-bottom: 1px solid #757575;
}

.navbar .nav-wrapper .center{
    font-size: 1.2em;
    margin-top: 20px;
}

.navbar .nav-wrapper ul.contract {
    margin-right: 132px;
}
</style>