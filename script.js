const portfolioSets = {
  "ai-characters": { index: "03", title: "AI 人物作品集", label: "AI CHARACTER STUDIES", caption: "AI CHARACTER", folder: "AI人物", files: ["微信图片_20260828115539_185_589.png", "image (1).png", "image (2).png", "image.png", "TT Image 2_1788091876108_0.png", "TT Image 2_1788091915028_0.png", "TT Image 2_1788091917923_0.png", "TT Image 2_1788091919436_0.png", "TT Image 2_1788091921397_0.png", "TT Image 2_1788091922821_0.png", "TT Image 2_1788091924444_0.png", "TT Image 2_1788091927436_0.png", "TT Image 2_1788091929476_0.png", "TT Image 2_1788091931544_0.png", "TT Image 2_1788091933644_0.png", "TT Image 2_1788091941325_0.png", "TT Image 2_1788091943545_0.png", "TT Image 2_1788091944795_0.png", "TT Image 2_1788091946621_0.png", "TT Image 2_1788091953536_0.png", "TT Image 2_1788091985481_0.png", "TT Image 2_1788091987960_0.png", "TT Image 2_1788093828662_0.png", "TT Image 2_1788093831748_0.png", "TT Image 2_1788093833845_0.png", "TT Image 2_1788093835696_0.png", "TT Image 2_1788093845293_0.png", "TT Image 2_1788093846765_0.png", "TT Image 2_1788093857741_0.png", "TT Image 2_1788101828604_0.png", "TT Image 2_1788102418067_0.png", "TT Image 2_1788102499407_0.png", "TT Image 2_1788182215235_0.png"] },
  upscale: { index: "04", title: "高清化作品集", label: "HIGH-RESOLUTION ENHANCEMENT", caption: "UPSCALE", folder: "高清化", files: ["第二次高清.png", "ComfyUI_00064_.png", "ComfyUI_00105_.png", "TT Image 2_1788410572387_0.png", "TT Image 2_1788428955010_0.png"] },
  consistency: { index: "05", title: "人物一致性作品集", label: "CHARACTER CONSISTENCY", caption: "CONSISTENCY", folder: "人物一致性", files: ["comfyui人物一致性flowwork.png", "ComfyUI_00106_.png", "ComfyUI_00107_.png", "ComfyUI_00108_.png", "ComfyUI_00109_.png", "ComfyUI_00110_.png", "ComfyUI_00111_.png", "ComfyUI_00112_.png", "ComfyUI_00113_.png", "ComfyUI_00114_.png", "ComfyUI_00115_.png", "ComfyUI_00116_.png", "ComfyUI_00117_.png", "ComfyUI_00118_.png", "ComfyUI_00119_.png", "ComfyUI_00120_.png", "ComfyUI_00121_.png", "ComfyUI_00122_.png", "ComfyUI_00123_.png", "ComfyUI_00124_.png", "ComfyUI_00125_.png", "ComfyUI_00126_.png", "ComfyUI_00127_.png", "ComfyUI_00128_.png", "ComfyUI_00129_.png", "ComfyUI_00130_.png", "ComfyUI_00131_.png", "ComfyUI_00132_.png", "ComfyUI_00133_.png", "ComfyUI_00134_.png", "ComfyUI_00135_.png", "ComfyUI_00136_.png", "ComfyUI_00137_.png", "ComfyUI_00138_.png", "ComfyUI_00139_.png", "ComfyUI_00140_.png", "ComfyUI_00141_.png", "ComfyUI_00142_.png", "ComfyUI_00143_.png", "ComfyUI_00144_.png", "ComfyUI_00145_.png", "ComfyUI_00148_.png", "ComfyUI_00149_.png", "ComfyUI_00150_.png", "ComfyUI_00151_.png", "ComfyUI_00152_.png", "ComfyUI_00153_.png", "ComfyUI_00154_.png", "ComfyUI_00155_.png", "ComfyUI_00156_.png"] }
};

document.querySelectorAll(".portfolio-section").forEach(section => {
  const set = portfolioSets[section.dataset.portfolio];
  const figures = set.files.map((file, index) => {
    const caption = file === "comfyui人物一致性flowwork.png" ? "WORKFLOW" : `${set.caption} / ${String(index + 1).padStart(2, "0")}`;
    return `<figure><img src="${set.folder}/${file}" alt="${set.title}"><figcaption>${caption}</figcaption></figure>`;
  }).join("");
  section.innerHTML = `<div class="section-head"><div><p class="index">${set.index}</p><h2>${set.title}</h2></div><span>${set.label}</span></div><div class="rail" tabindex="0" aria-label="${set.title}，横向浏览"><div class="rail-track landscape-track">${figures}</div></div><p class="scroll-hint"><span>←</span> 横向拖动 / 滚动查看 <span>→</span></p>`;
});

document.querySelectorAll(".rail").forEach(rail => {
  let down = false;
  let x = 0;
  let scrollStart = 0;
  rail.addEventListener("wheel", event => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) { event.preventDefault(); rail.scrollLeft += event.deltaY; }
  }, { passive: false });
  rail.addEventListener("pointerdown", event => { down = true; x = event.clientX; scrollStart = rail.scrollLeft; rail.setPointerCapture(event.pointerId); });
  rail.addEventListener("pointermove", event => { if (down) rail.scrollLeft = scrollStart - (event.clientX - x); });
  rail.addEventListener("pointerup", () => { down = false; });
  rail.addEventListener("pointercancel", () => { down = false; });
});
