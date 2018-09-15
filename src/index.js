import './scss/index.scss'
import Vue from 'vue';
import Reader from './components/Reader.vue'

var app = new Vue({
    el: '#app',
    data: {

    },
    components: {
        'reader': Reader
    }
});