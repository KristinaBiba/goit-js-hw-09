const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let n=!1;const r=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3);t.addEventListener("click",(function(){n||(n=!0)})),e.addEventListener("click",(function(){n=!1,clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.59339bfb.js.map