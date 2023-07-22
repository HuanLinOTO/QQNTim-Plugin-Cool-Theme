// old

module.exports = class Entry {
    constructor (qqntim) {
        console.log(qqntim);
        // qqntim.windowLoadPromise.then(() => {
            // const wallpaperFile = process.env["QQ_WALLPAPER_FILE"];
            // if (wallpaperFile) {
            console.log(__dirname.replaceAll("\\","/"));
            console.log(__dirname);
            const wallpaperURL = encodeURI(`file://`+__dirname.replaceAll("\\","/")+`/wallpaper.jpg`);
            console.log(`[CoolTheme] Load WallPaper： ${wallpaperURL}`);
            document.body.style.background = `url(${wallpaperURL}) no-repeat`;
            document.body.style.backgroundSize = "100% 100%"
            // }
        // });
    };
}

// new 
// import { QQNTim } from "@flysoftbeta/qqntim-typings";
// // 例子：QQNT 启动时显示一条 Hello world! 控制台信息
// // `qqntim` 内包含了很多实用的 API，可以帮助你对 QQNT 做出修改
// export default class Entry implements QQNTim.Entry.Renderer {
//     constructor(qqntim: QQNTim.API.Renderer.API) {
//         console.log("Hello world!", qqntim);
//     }
// }