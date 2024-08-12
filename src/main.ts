import "./style.less";
/** ------ VUE 模式 start ------ */
import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
/** ------ VUE 模式 end ------ */

import { Audios } from "./Config";
import { loadFiles } from "./utils/loadFiles";
import { getQuery } from "senyou-tool";

/** 是否开发环境 */
const IsDev = location.href.indexOf("qq.com") < 0;

window.addEventListener("DOMContentLoaded", () => {
    loadAss();
});
async function loadAss() {
    // 加载首批资源
    const line = $(".m_loading .mid_wrap .prs_wrap .line");
    loadFiles(["index/"], (prs: number) => line.css("width", prs + "%"))
    loaded();

    // 初始化audio
    Audios.init();

    // 分步加载其他资源
    // await loadFiles(["choose/trans_climbing", "result_lottery/gold"]);
    // loadFiles(["choose/trans_kayak", "choose/shooting", "choose/running", "choose/trans_running", "choose/trans_shooting"]);
}

function loaded() {
    //
    console.log('-loaded-');

    // debug调试
    switch (getQuery("go")) {
        case "1":
            //
            break;
        case "2":
            //
            break;
    }
}