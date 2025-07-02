// @ts-ignore
import QRCode from "qrcode";
// @ts-ignore
// window.QRCode = QRCode;
// import "./style.less";
// import "./style.scss";

// // import { Audios } from "./Config";
// // import { PreloadImgs } from "./utils/PreloadImgs";
// // import { getQuery } from "senyou-tool";

// /** 是否开发环境 */
// // @ts-ignore
// const IsDev = location.href.indexOf("qq.com") < 0;

// window.addEventListener("DOMContentLoaded", () => {
//     loadAss();
// });
// async function loadAss() {
//     // 加载首批资源
//     const line = $(".m_loading .mid_wrap .prs_wrap .line");
//     await PreloadImgs(["index/"], (prs: number) => line.css("width", prs + "%"))
//     loaded();

//     // 初始化audio
//     Audios.init();

//     // 分步加载其他资源
//     await PreloadImgs(["choose/"]);
//     // PreloadImgs(["choose/trans_kayak", "choose/shooting", "choose/running", "choose/trans_running", "choose/trans_shooting"]);
// }

// /** 首次加载完毕 */
// function loaded() {
//     //
//     console.log('-loaded-');

//     // debug调试
//     switch (getQuery("go")) {
//         case "1":
//             //
//             break;
//         case "2":
//             //
//             break;
//     }
// }