export const AllFiles = import.meta.glob(["../assets/**/*.mp4", "../assets/**/*.svg", "../assets/**/*.png", "../assets/**/*.jpg", "../assets/**/*.mp3"], {
  import: "default",
  eager: true,
});

export const getAssetsFile = (url: string): string => {
  return AllFiles[`../assets/${url}`] as string;
};

export function PreloadImgs(list: string[], loadprogresscb?: Function) {
  return new Promise((resolve, _reject) => {
    let number = 0;
    const imgList = Object.keys(AllFiles)
      .filter((val) => val.match(new RegExp(list.join("|")))?.length)
      .map((val) => getAssetsFile(val.replace("../assets/", "")));

    function imgLoad(this: any) {
      if (number >= imgList.length) return resolve(null);

      number++;
      let prs = Math.floor((number / imgList.length) * 100);
      loadprogresscb?.(prs);
      this.src = imgList[number - 1];
    }

    let length = imgList.length > 10 ? 10 : imgList.length;
    for (let i = 0; i < length; i++) {
      let img = new Image();
      img.onload = imgLoad;
      img.onerror = imgLoad;
      img.src = imgList[i];
    }
  });
}
