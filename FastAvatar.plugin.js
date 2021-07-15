/**
 * @name FastAvatar
 * @author Amir
 * @version 1.0.1
 * @description Show user avatar by clicking on profile picture.
 * @source https://github.com/Amir-78/BetterDiscord/blob/main/FastAvatar.plugin.js
 * @updateUrl https://raw.githubusercontent.com/Amir-78/BetterDiscord/main/FastAvatar.plugin.js
 * @authorLink https://github.com/Amir-78/BetterDiscord
 */

const config = {
    info: {
        name: "FastAvatar",
        authors: [{ name: "Amir", github_username: "Amir-78", discord_id: "654357339691941899" }],
        description: "Show user avatar by clicking on profile picture.",
        version: "1.0.1",
        github: "https://github.com/Amir-78/BetterDiscord/blob/main/FastAvatar.plugin.js",
        github_raw: "https://raw.githubusercontent.com/Amir-78/BetterDiscord/main/FastAvatar.plugin.js"
    },
    changelog: [
        {
            "title": "Fixed",
            "type": "fixed",
            "items": ["Stop plugin problem has been fixed.", "Image quality has been fixed."]
        }
    ]
};

class FastAvatar {


    getName() { return config.info.name; }
    getAuthor() { return config.info.authors.map(a => a.name).join(", "); }
    getDescription() { return config.info.description; }
    getVersion() { return config.info.version; }
    getRaw() { return config.info.github_raw; }

    load() {

        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing", `The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), this.getRaw());

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

    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing", `The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), this.getRaw());

        document.addEventListener("click", this.showAvatar);
        document.addEventListener("click", this.hideAvatar);

    }

    stop() {
        document.removeEventListener("click", this.showAvatar);
        document.removeEventListener("click", this.hideAvatar);

        let jQuery = document.getElementById("jQuery-FastAvatar")
        if (jQuery) {
            document.getElementById("jQuery-FastAvatar").remove();
        }
    }


    showAvatar({ target }) {
        if (target.classList.contains("avatar-AvHqJA")) {
            let url = target.getElementsByTagName('img')[0].src;

            $("body").prepend(`<div class="layerContainer-yqaFcK" id="FastAvatar-Avatar"><div class="FastAvatar-BackDrop backdrop-1wrmKB withLayer-RoELSG" style="opacity: 0.85; background: hsl(0, calc(var(--saturation-factor, 1) * 0%), 0%);"></div><div class="layer-2KE1M9"><div class="focusLock-Ns3yie" role="dialog" aria-label="Image" tabindex="-1" aria-modal="true"><div class="modal-qgFCbT root-1gCeng fullscreenOnMobile-1bD22y" style="opacity: 1; transform: scale(1);"><div class="wrapper-2K4Z3k"><div class="imageWrapper-2p5ogY image-1tIMwV" style="width: 128px; height: 128px;"><img alt="" src="${url.replace(/(?:\?size=\d{3,4})?$/, "?size=2048")}" style="width: 128px; height: 128px;"></div><a class="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB downloadLink-1ywL9o" href="${url.replace(/(?:\?size=\d{3,4})?$/, "?size=2048")}" rel="noreferrer noopener" target="_blank" role="button" tabindex="0">Open original</a></div></div></div></div></div>`)

        }

    }

    hideAvatar({ target }) {
        if (target.classList.contains("FastAvatar-BackDrop")) {

            document.getElementById("FastAvatar-Avatar").remove();

        }


    }


}
