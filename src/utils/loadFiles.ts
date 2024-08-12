export const AllFiles = import.meta.glob(["../assets/*.jpg", "../assets/*.svg", "../assets/*.png", "../assets/**/*.png", "../assets/**/*.jpg", "../assets/**/*.mp3"], {
  import: "default",
  eager: true,
});

export const getAssetsFile = (url: string): string => {
  return AllFiles[`../assets/${url}`] as string;
};

export function loadFiles(list: any[], loadprogress?: any) {
  return new Promise((resolve, _reject) => {
    let loadprogresscb: any;
    // 完成加载图片数
    let loadNum = 0;
    const imgList = Object.keys(AllFiles)
      .filter((val) => val.match(new RegExp(list.join("|")))?.length)
      .map((val) => getAssetsFile(val.replace("../assets/", "")));

    function imgLoad(this: any) {
      if (loadNum >= imgList.length) return resolve(null);

      loadNum++;
      let prs = Math.floor((loadNum / imgList.length) * 100);
      loadprogresscb?.(prs);
      this.src = imgList[loadNum - 1];
    }

    loadprogresscb = loadprogress;
    let imgLength = imgList.length > 10 ? 10 : imgList.length;
    for (let i = 0; i < imgLength; i++) {
      let imgEle = new Image();
      imgEle.onload = imgLoad;
      imgEle.onerror = () => {
        console.error("图片加载错误：", imgEle.src);
        imgLoad();
      };
      // imgEle.setAttribute("crossOrigin", "anonymous");
      imgEle.src = imgList[i] as string;
    }
  });
}
