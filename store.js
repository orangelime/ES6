import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    // 在 state 建立狀態變數以及初始狀態
    state: {
        color: "",
        showText: "初始 Vuex 的 state 是空的，所以是黑色字體"
    },
    actions:{
        // actions 中有兩個函式 changeColor & changeTextContent
    // 這兩個函式上都有做一件事情 => context.commit()
    // context.commit()這個函式的作用是呼叫 Mutations function 執行改變 state 狀態
        changeColor(context, payload) {
            console.log("檢查 context 的內容有哪些東西：", context);
            context.commit("changeColor", payload);
        },
        changeTextContent(context, payload) {
            context.commit("changeTextContent", payload);
        }
    },
    mutations:{
        changeColor(state, payload) {
            // 獲取來自 state value 然後用  payload 的值取代 
            state.color = payload;
        },
        changeTextContent(state, payload) {
            state.showText = payload;
        }
    },
    getters:{
        // 預先處理轉換色碼
    colorNumber: (state, getters) => {
        switch (state.color) {
            case "red":
                return "#E76F51";
            case "green":
                return "#3B8560";
            case "blue":
                return "#3965BE";
            default:
                return "#000";
        }
    }
})