(function() {
  'use strict';

  function click_latest_tab() {
    let selector = document.querySelector("iron-selector#chips.ytd-feed-filter-chip-bar-renderer[role='tablist']");
    if(!selector) {
      return;
    }
    let tabs = selector.getElementsByTagName("yt-chip-cloud-chip-renderer");
    if(tabs.length == 0) {
      return;
    }
    let regexp = /新しい順|Latest|Terbaru|Más recientes|Mais recentes|Neueste|Les plus récentes|Più recenti|最新|최신순/;
    if(!regexp.test(tabs[0].innerText)) {
      return;
    }
    tabs[0].dispatchEvent(new MouseEvent("click"));
    //tabs[0].click();
  }

  click_latest_tab();
  document.addEventListener("yt-navigate-finish", () => setTimeout(() => click_latest_tab(), 200), true);
  //document.body.addEventListener("yt-page-data-updated", () => setTimeout(() => click_latest_tab(), 200), true);

})();
