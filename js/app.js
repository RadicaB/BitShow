(function (data, ui) {
  const searchInput = document.querySelector('#search-input');
  const searchDropdownEl = document.querySelector('#search-dropdown');
  const mainContentWrapper = document.querySelector('#main-content');
  const homeButtonEl = document.querySelector('#home-button');
  //console.log(searchInput);

  const onSearch = (e) => {
    const term = e.target.value;
    data.searchShow(term).then((shows) => {
      ui.clearDropdown();
      ui.renderSearchDropdown(shows);
    });
  };

  const onSearchDropdownClick = (e) => {
    const targetEl = e.target.parentElement;
    if (targetEl.getAttribute('class') !== 'search-item') {
      return;
    }
    ui.clearDropdown();
    const id = targetEl.getAttribute('id');
    data.getSingleTvShow(id).then((show) => {
      ui.renderSingleTvShowPage(show);    // ne radi cleardropdown
    });
  };

  const onSingleTvShowClick = (e) => {
    
    const targetEl = e.target.parentElement;
    console.log(e.target.parentElement);
    if (targetEl.getAttribute('class') === 'show-item') {
      const id = targetEl.getAttribute('id');
      data.getSingleTvShow('id').then((show) => {
      ui.renderSingleTvShowPage(show);
    });
    }
    else {
    console.log(e.target.getAttribute('id'));
      data.getSingleTvShow(e.target.getAttribute('id')).then((show) => {
        ui.renderSingleTvShowPage(show);
      });
    };
  };

  const onClikHomeButtonHeader = () => {
    data.getShows().then((shows) => {
      ui.renderHomePage(shows);
    });
  };

  onClikHomeButtonHeader();

  data.getShows().then((shows) => {
    ui.renderHomePage(shows);
  });

  
  searchInput.addEventListener('keyup', onSearch);
  searchDropdownEl.addEventListener('click', onSearchDropdownClick);
  //searchInput.addEventListener('blur', ui.clearDropdown);
  homeButtonEl.addEventListener('click', onClikHomeButtonHeader);
  mainContentWrapper.addEventListener('click', onSingleTvShowClick);
  searchDropdownEl.addEventListener('click', onSingleTvShowClick);

  })(dataModule, uiModule);






//Katarina

// (function (data, ui) {
//   const searchInput = $("#search-input");
//   const searchDropDownEl = $("#search-dropdown");
//   const mainContentWrapper = $("#main-content");
//   const homeButtonEl = $("#home-button");
//   const card = $(".card");
  
//   const onSearch = (e) => {
//     const term = e.target.value;
//     data.searchShow(term).then((shows) => {
//       ui.clearDropdown();
//       ui.renderSearchDropdown(shows);
//     });
//   };
  
//   const onSearchDropdownClick = (e) => {
//     if (!$(e.target).hasClass("search-item")) {
//       return;
//     }
//     ui.clearDropdown();
//     const id = $(e.target).attr("id");
//     data.getSingleTvShow(id).then((show) => {
//       ui.renderSingleTvShowPage(show);
//     });
//   };
  
//   const onSingleTvShowClick = (e) => {
//     const targetEl = $(e.target).parent();
//     if (!targetEl.hasClass("show-item")) {
//       return;
//     }
//     const id = targetEl.attr("id");
//     data.getSingleTvShow(id).then((show) => {
//       ui.renderSingleTvShowPage(show);
//     });
//   };
  
//   const onClickHomeButtonHandler = () => {
//     data.getShows().then((shows) => {
//       ui.renderHomePage(shows);
//     });
//   };
  
//   onClickHomeButtonHandler();
  
//   searchInput.on("keyup", onSearch);
//   searchDropDownEl.on("click", onSearchDropdownClick);
//   card.on("click", onSingleTvShowClick);
//   homeButtonEl.on("click", onClickHomeButtonHandler);
  
//   })(dataModule, uiModule);












// import * as ui from './ui.js';  Drugo
// import * as data from './app.js';

// function showInfoHandler(event) {
//   if (event.target.parentElement.tagName === "A" || event.target.tagName === "A") {
//     event.preventDefault();
//     data.setLocalStorage(event.target.id);
//     location.href = './show_info.html';
//   }
// }

// function searchHandler(event) {
//   const searchValue = $(`.search-box`).val();
//   data.fetchSearchShows(searchValue)
//   .then(ui.displaySearchList);
// }

// export const init = () => {
//   data.fetchShow()
//   .then(ui.displayTop50)
//   .catch(ui.failed);

//   $(`body`).on("click", showInfoHandler);
//   $(`.search-box`).on("keyup", searchHandler);
//   const id = localStorage.getItem("id");
//   data.fetchSeasonsAndCast(id)
//   .then(ui.displayOnShowInfo);
// }