<script>
export default {
    name: "App",
    methods: {
        testGetVuex() {
        console.log(this.$store);
        },
        changeColor(color) { 
            // 透過 dispatch 執行 Actions function
        this.$store.dispatch("changeColor", color);
        this.$store.dispatch(
            "changeTextContent",
            `Vuex state 狀態被改變了 ， 現在是 ${color}`
        }
        commitMutations(){

            this.$store.commit('Mutations Name', payload)
        }
    },
    computed: {
        textColor() {
        return this.$store.getters.colorNumber;
        },
        showText() {
        // 透過 this.$store.state 讀取 Vuex 的實體並取得了 state 的值    return this.$store.state.showText;
        }
    }
};
</script>