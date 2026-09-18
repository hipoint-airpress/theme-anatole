import "./css/tailwind.css"
import "./libs/github-markdown-css/github-markdown-light.css"
import "./css/style.scss"
// 只注册图标数据到 iconify 运行时(不产出 CSS),顺序无关紧要
import '@purge-icons/generated'

import Alpine from 'alpinejs'

// @ts-ignore
window.Alpine = Alpine

Alpine.start()


document.addEventListener("DOMContentLoaded", () => {

    const href = location.href; // http://localhost:8090/
    const pathname = location.pathname; // /
    const origin = location.origin; // http://localhost:8090
    const menuNodes = document.querySelectorAll(".nav .nav-item a")

    const menuNodesArray = Array.from(menuNodes)

    const homeMenu = menuNodesArray.find(node => {
        return [href, pathname, origin].includes(node.getAttribute("href") || '')
    })

    if (homeMenu) {
        homeMenu.parentElement?.classList.add("current")
        return
    }

    menuNodes.forEach(node => {
        const currentHref = node.getAttribute("href")

        if (!currentHref) {
            return
        }

        if ([href, pathname].includes(currentHref)) {
            node.parentElement?.classList.add("current")
            return
        }
    })
})

