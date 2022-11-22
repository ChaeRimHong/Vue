Vue.component('gloval_cokmp', {
    template: `<div>이름 :  {{name}}<br>
<button @click="namechang">이름바꾸기</button><br>  </div>`,
    data() {
        return { name: '홍길동' }
    },
    methods: {
        namechang() {
            this.name = "한라산";
        }
    }
})
///////////////
new Vue({
    el: '#app1',

})
new Vue({
    el: '#app2',

})