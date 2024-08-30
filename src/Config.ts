import { getImg, getQuery } from "senyou-tool";
import { Howl, Howler } from "howler";
import gsap from "gsap";
import { getAssetsFile } from "./utils/PreloadImgs";

/** 小动画-加载中 */
window.showLoading = (isShow: boolean) => {
  let loadingEl = document.querySelector(".m-icon-loading") as HTMLDivElement;
  if (loadingEl.className.indexOf("hide") > -1 && isShow) return;
  isShow ? (loadingEl.style.display = "block") : (loadingEl.style.display = "none");
};

/** 基础通用信息提示弹窗，单位：毫秒
 * 设置time就会自动消失，不设置就会需要用户点击才消失
 */
window.showMsg = (msg: string, time?: number) => {
  let msgWrap = $(".m-msg");
  let msgEl = $(`<div class="item"><div class="content">${msg}</div></div>`);
  msgWrap.css("opacity") !== "1" && msgWrap.fadeIn(100);
  msgWrap.find(".container").append(msgEl);
  return new Promise((resolve, _reject) => {
    if (time) {
      msgEl.addClass("notips");
      setTimeout(() => {
        resolve(null);
        msgEl.remove();
        if (msgWrap.find(".container").children().length === 0) {
          msgWrap.fadeOut(100);
        }
      }, time);
    } else {
      msgWrap.one("click", () => {
        resolve(null);
        msgEl.remove();
        if (msgWrap.find(".container").children().length === 0) {
          msgWrap.fadeOut(100);
        }
      });
    }
  });
};

/** 异步设置自定义字体 */
export function setFontTo(name: string, path: string) {
  var newFontStyleSheet = document.createElement("style");
  newFontStyleSheet.textContent = `
                @font-face {
                  font-family: ${name};
                  src: url(${path});
                }
              `;
  document.head.appendChild(newFontStyleSheet);
}

/** 加载指定图片素材集 */
export const preLoadImg = (imgs: any) => {
  let imgsLoader: any = [];
  imgs.forEach((ele: any) => {
    imgsLoader.push(getImg(ele));
  });
  return Promise.all(imgsLoader);
};

/** 异步点击处理 */
export const awaitTap = (ele: string, cb?: any) => {
  return new Promise((resolve, _reject) => {
    $(ele).one("pointerup", async (e) => {
      e.stopPropagation();
      await cb?.();
      resolve(null);
    });
  });
};

/** 通用按钮点击动画 start */
$(".active_js").on("touchstart", (e) => {
  gsap.to(e.target, {
    scale: 0.87,
    duration: 0.1,
  });
});
$(".active_js").on("touchend", (e) => {
  gsap.to(e.target, {
    scale: 1,
    duration: 0.1,
  });
});
$(".active_js").on("touchcancel", (e) => {
  gsap.to(e.target, {
    scale: 1,
    duration: 0.1,
  });
});
/* 通用按钮点击动画 end */

/** 音效相关 */
export const Audios = {
  isMuted: false,
  bgm: {} as Howl,
  efect: {} as Howl,
  init: () => {
    Audios.bgm = new Howl({
      src: getAssetsFile("media/bgm.mp3"),
      loop: true,
      autoplay: !getQuery('to'), // 不存在调试参数时，自动播放
      volume: 0.5,
      onplay: () => {
        // $(".top_menu .btn_music").removeClass("off");
      },
    });
  },
  changeMute: () => {
    if (Audios.isMuted) {
      Audios.isMuted = false;
      Howler.mute(false);
    } else {
      Audios.isMuted = true;
      Howler.mute(true);
    }
  }
}

/** 页面前后台切换时 */
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // 打开媒体
    if (!Audios.isMuted) {
      Howler.mute(false);
    }
  } else {
    // 关闭媒体
    Howler.mute(true);
  }
});
