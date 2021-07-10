/**
 * @name FastAvatar
 * @author Amir
 * @version 1.0.0
 * @description Show user avatar by clicking on profile picture.
 * @source https://github.com/Amir-78/BetterDiscord/blob/main/FastAvatar.plugin.js
 * @updateUrl https://raw.githubusercontent.com/Amir-78/BetterDiscord/main/FastAvatar.plugin.js
 * @authorLink https://github.com/Amir-78/BetterDiscord
 */

module.exports = class FastAvatar {
    start() {
        document.addEventListener("click", this.showAvatar, true);
        document.addEventListener("click", this.hideAvatar, true);

    }
    stop() {
        document.removeEventListener.bind(document, "click", this.showAvatar, true);
        document.removeEventListener.bind(document, "click", this.hideAvatar, true);

        let jQuery = document.getElementById("jQuery-FastAvatar")
        if(jQuery){
        document.getElementById("FastAvatar-Avatar").remove();
        }
    }

    load() {

        let jQuery = document.getElementById("jQuery-FastAvatar")

        if(!jQuery){
        console.log("BetterDiscord FastAvatar: Loading jQuery...");
        var script1 = document.createElement("script");
        script1.id = "jQuery-FastAvatar"
        script1.type = "text/javascript";
        script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js";
        document.head.appendChild(script1);
        }
    }


    showAvatar({ target }) {
        if (target.classList.contains("avatar-AvHqJA")) {
            let url = target.getElementsByTagName('img')[0].src;

            $("body").prepend(`<div class="layerContainer-yqaFcK" id="FastAvatar-Avatar"><div class="FastAvatar-BackDrop backdrop-1wrmKB withLayer-RoELSG" style="opacity: 0.85; background: hsl(0, calc(var(--saturation-factor, 1) * 0%), 0%);"></div><div class="layer-2KE1M9"><div class="focusLock-Ns3yie" role="dialog" aria-label="Image" tabindex="-1" aria-modal="true"><div class="modal-qgFCbT root-1gCeng fullscreenOnMobile-1bD22y" style="opacity: 1; transform: scale(1);"><div class="wrapper-2K4Z3k"><div class="imageWrapper-2p5ogY image-1tIMwV" style="width: 480px; height: 480px;"><img alt="" src="${url.replace(/(?:\?size=\d{3,4})?$/, "?size=2048")}" style="width: 480px; height: 480px;"></div><a class="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB downloadLink-1ywL9o" href="${url.replace(/(?:\?size=\d{3,4})?$/, "?size=2048")}" rel="noreferrer noopener" target="_blank" role="button" tabindex="0">Open original</a></div></div></div></div></div>`)

        }

    }

    hideAvatar({ target }) {
        if (target.classList.contains("FastAvatar-BackDrop")) {

            document.getElementById("FastAvatar-Avatar").remove();

        }


    }
}
