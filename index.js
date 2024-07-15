// ==UserScript==
// @name         Etw360ff
// @namespace    org.sessx6cf.etw360ff
// @version      0.1.1
// @description  Etw360ff
// @author       SessionHu
// @license      mit
// @match        https://teacher.ewt360.com/ewtbend/bend/index/index.html
// @grant        none
// ==/UserScript==

(function() {
    "use strict";
    if (window.location.href.search("play-videos") < 0) {
        // 不是视频
        return;
    }
    console.log("[Etw360ff] 开始学习了喵~");
    const sessEtw360ffIntervalId = window.setInterval(() => {
        // 自动播放
        const autoplaybtn = document.querySelector("button.vjs-big-play-button");
        if (autoplaybtn !== null && !document.querySelector(".vjs-has-started")) {
            autoplaybtn.click();
            console.log("[Etw360ff] 开始播放了喵~");
            // 隐私保护
            document.querySelector(".uname-nW4AD").innerText = "Etw360ff";
        }
        // 自动跳过答题
        const skipBtn = document.querySelector("div.btn.action-skip");
        if (skipBtn !== null) {
            skipBtn.click();
        }
        // 继续播放
        const continuePlayBtn = document.querySelector(`img[alt="继续播放"]`);
        if (continuePlayBtn !== null) {
            continuePlayBtn.click();
            console.log("[Etw360ff] 帮你点好了喵~ 不过咱还是要认真学习呢喵~");
        }
        // 提示播放结束
        const videoDuration = document.querySelector("span.vjs-duration-display");
        const videoCurrent = document.querySelector("span.vjs-current-time-display");
        if (videoCurrent !== null && videoDuration.innerText !== "0:00" && (videoDuration.innerText === videoCurrent.innerText)) {
            window.clearInterval(sessEtw360ffIntervalId);
            console.log("[Etw360ff] 结束了喵!");
            document.title = "播放结束";
            const warningblock = document.createElement("div");
            warningblock.style.backgroundColor = "rgba(0, 0, 0, .3)";
            warningblock.style.position = "fixed"
            warningblock.style.top = 0
            warningblock.style.right = 0
            warningblock.style.bottom = 0
            warningblock.style.left = 0
            warningblock.style.zIndex = "1145141919810";
            warningblock.innerHTML = `<h1 style="font-size:64px;color:#6cf;font-family:monospace;">播放结束! 可以退出了喵!</h1>`;
            warningblock.onclick = () => {
                warningblock.remove();
            };
            document.body.insertAdjacentElement("beforeend",warningblock);
        }
    }, 1000);
})();
