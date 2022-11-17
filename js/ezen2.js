 //전역
 Vue.component('global-component', {
    template:`<p>전역 컴퍼넌트 입니다. (상위 컴포넌트)</p>`
});

//지역
const local={
    template:`<p>지역 컴퍼넌트 입니다. (하위 컴포넌트) </p>`
};

new Vue({
    components:{
        'local-component':local
    },
    el:'#app',
    data:{
        message:'이곳은 메인입니다. '
    }
})