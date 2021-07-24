/**
 * @name FastAvatar
 * @author Amir
 * @version 1.0.4
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
        version: "1.0.4",
        github: "https://github.com/Amir-78/BetterDiscord/blob/main/FastAvatar.plugin.js",
        github_raw: "https://raw.githubusercontent.com/Amir-78/BetterDiscord/main/FastAvatar.plugin.js"
    },
    changelog: [
        {
            "title": "Fixed",
            "type": "fixed",
            "items": ["JQuery has been removed from the plugin.", "Some bugs has been fixed"]
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

        if (!global.ZeresPluginLibrary) {

            return BdApi.showConfirmationModal(
                "Library plugin is needed",
                [`The library plugin needed for ${config.info.name} is missing. Please click Download to install it.`], {
                confirmText: "Download",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                    });
                }
            }
            );


        }
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), this.getRaw());


    }

    start() {
        if (!global.ZeresPluginLibrary) {

            return BdApi.showConfirmationModal(
                "Library plugin is needed",
                [`The library plugin needed for ${config.info.name} is missing. Please click Download to install it.`], {
                confirmText: "Download",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                    });
                }
            }
            );


        }
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), this.getRaw());

        document.addEventListener("click", this.showAvatar);
        document.addEventListener("click", this.hideAvatar);

    }

    stop() {
                if (!global.ZeresPluginLibrary) {

            return BdApi.showConfirmationModal(
                "Library plugin is needed",
                [`The library plugin needed for ${config.info.name} is missing. Please click Download to install it.`], {
                confirmText: "Download",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                    });
                }
            }
            );


        }
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), this.getRaw());
        document.removeEventListener("click", this.showAvatar);
        document.removeEventListener("click", this.hideAvatar);

    }


    showAvatar({ target }) {
        if (target.classList.contains("avatar-AvHqJA")) {
            let url = target.getElementsByTagName('img')[0].src;

            let check = document.getElementById("FastAvatar-Avatar");
            if(check){
            document.getElementById("FastAvatar-Avatar").remove();
            }

            var fastAvatarContainerDiv = document.createElement('div');
            fastAvatarContainerDiv.className = "layerContainer-yqaFcK"
            fastAvatarContainerDiv.id = "FastAvatar-Avatar"

            var fastAvatarBackDrop = document.createElement('div');
            fastAvatarBackDrop.className = "FastAvatar-BackDrop backdrop-1wrmKB withLayer-RoELSG"
            fastAvatarBackDrop.style.cssText = "opacity: 0.85; background: hsl(0, calc(var(--saturation-factor, 1) * 0%), 0%);"

            var fastAvatarLayer = document.createElement('div');
            fastAvatarLayer.className = "layer-2KE1M9" 

            var fastAvatarFocusLock = document.createElement('div');
            fastAvatarFocusLock.className = "focusLock-Ns3yie" 
            fastAvatarFocusLock.setAttribute('role', 'dialog');
            fastAvatarFocusLock.setAttribute('aria-label', 'Image');
            fastAvatarFocusLock.tabIndex = -1
            fastAvatarFocusLock.setAttribute('aria-modal', 'true');

            var fastAvatarModal = document.createElement('div');
            fastAvatarModal.className = "modal-qgFCbT root-1gCeng fullscreenOnMobile-1bD22y" 
            fastAvatarModal.style.cssText = "opacity: 1; transform: scale(1);"

            var fastAvatarOpenLink = document.createElement('a');
            fastAvatarOpenLink.className = "anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB downloadLink-1ywL9o"
            fastAvatarOpenLink.rel = "noreferrer noopener"
            fastAvatarOpenLink.target = "_blank"
            fastAvatarOpenLink.tabIndex = 0
            fastAvatarFocusLock.setAttribute('role', 'button');
            fastAvatarOpenLink.text = "Open original"
            fastAvatarOpenLink.href = url.replace(/(?:\?size=\d{3,4})?$/, "?size=2048");

            var fastAvatarWrapper = document.createElement('div');
            fastAvatarWrapper.className = "wrapper-2K4Z3k" 

            var fastAvatarImageWrapper = document.createElement('div');
            fastAvatarImageWrapper.className = "imageWrapper-2p5ogY image-1tIMwV" 
            fastAvatarImageWrapper.style.cssText = "width: 128px; height: 128px;"

            var fastAvatarImage = document.createElement('img');
            fastAvatarImage.src = url.replace(/(?:\?size=\d{3,4})?$/, "?size=2048")
            fastAvatarImage.style.cssText = "width: 128px; height: 128px;"

            fastAvatarImageWrapper.appendChild(fastAvatarImage);
            fastAvatarWrapper.appendChild(fastAvatarImageWrapper);
            fastAvatarModal.appendChild(fastAvatarWrapper);
            fastAvatarModal.appendChild(fastAvatarOpenLink);
            fastAvatarFocusLock.appendChild(fastAvatarModal);
            fastAvatarLayer.appendChild(fastAvatarFocusLock);
            fastAvatarContainerDiv.appendChild(fastAvatarBackDrop);
            fastAvatarContainerDiv.appendChild(fastAvatarLayer);
            document.body.appendChild(fastAvatarContainerDiv);




        }

    }

    hideAvatar({ target }) {
        if (target.classList.contains("FastAvatar-BackDrop")) {

            document.getElementById("FastAvatar-Avatar").remove();

        }


    }


}
