const uiModule = (function () {
    const mainContentWrapperEl = document.querySelector('#main-content');
    const searchDropdownEl = document.querySelector('#search-dropdown');
  
    const renderHomePage = (shows) => {
      let html = `
              <h1>All TV Shows</h1>
              <div id="show-list">
              `;
  
      shows.forEach((show) => {
        html += `
               <div class="show-item" id="${show.id}">
               <img src="${show.coverUrl}" alt="show cover image"/>
               <p>${show.name}</p>
               </div>
              `;
      });
  
      html += `</div>`;    //dodajemo html za eachShow
      mainContentWrapperEl.innerHTML = html;
    };
  
    const renderSingleTvShowPage = (show) => {
        let castListHtml = '';
        
        show.seasons.forEach((string) => {    
          castListHtml += `
            <div class="cast-item">${string}</div>
          `;
        });
        //.catch(e => console.log(e));
        
        let seasonList = '';
        console.log(show);
        show.seasons.forEach(({ startDate, endDate }) => {
            seasonList += `
            <div class="season-item">${startDate} - ${endDate}</div>
            `;
        });

        const finalHtml = `
        <h1>${show.name}</h1>
        <div class="detail-wrapper">
        <img src="${show.coverUrl}" alt="show poster"/>
        <ul class="list-wrapper">
        <h2>Seasons ()</h2>${seasonList}
        <h2>Cast</h2>${castListHtml}
        </div>
        </div>
        <h2>Show Details</h2>${show.summary}
        `;
        mainContentWrapperEl.innerHTML = finalHtml;
      };
   
        const renderSearchDropdown = (shows) => {
        shows.forEach((show) => {
        const itemEl = document.createElement('div');
        itemEl.setAttribute('id', show.id);
        itemEl.classList.add('search-item');
        itemEl.textContent = show.name;
        searchDropdownEl.appendChild(itemEl);
      });
    };
  
    const clearDropdown = () => {
      searchDropdownEl.innerHTML = '';
    };

    return {renderHomePage, renderSearchDropdown, clearDropdown, renderSingleTvShowPage};
})();
  


// Katarina
// const uiModule = (() => {
  
//     const mainContentWrapperEl = $("#main-content");
//     let searchDropdownEl = $("#search-dropdown");
    
//     const renderHomePage = (shows) => {
//       searchDropdownEl.hide();
//       let html = `
//         <h1 id="title">Popular Shows</h1>
//         <div class="row text-center gx-5 gy-5" id="show-list">
//       `;
      
//       shows.forEach((show) => {
//           html += `
//             <div class="col-sm-6 col-md-4 col-lg-4 show-item  d-flex justify-content-center" id="${show.id}">
//               <div class="card" style="width: 70%">
//                 <img src="${show.coverUrl}" class="card-img-top" alt="show cover image">
//                 <h5 class="card-text">${show.name}</h5>
//               </div>
//             </div>
//           `;
//       });
      
//         html += `</div>`;
//         mainContentWrapperEl.html(html);
//       };
      
//       const renderSingleTvShowPage = (show) => {
//         let castListHtml = "";
//         show.cast.forEach((string) => {
//           castListHtml += `
//             <div class="cast-item">${string}</div>
//           `;
//         });
    
//         let seasonList = "";
//         show.seasons.forEach(({ startDate, endDate }) => {
//           seasonList += `
//             <div class="season-item">${startDate} - ${endDate}</div>
//           `
//         });
    
//         const finalHtml = `
//           <h1>${show.name}</h1>
//           <div class="detail-wrapper">
//             <img src="${show.coverUrl}" alt="show-cover">
//             <div class="list-wrapper">
//               <h2>Seasons</h2>
//               ${seasonList}
//               <h2>Cast</h2>
//               ${castListHtml}
//             </div>
//           </div>
//           <h2>Show Details</h2>
//           ${show.summary}
//         `;
    
//         mainContentWrapperEl.html(finalHtml);
//       };
  
//       const renderSearchDropdown = (shows) => {
//         searchDropdownEl.show();
//         shows.forEach((show) => {
//           const itemEl = $(`<li id="${show.id}" class="search-item">${show.name}</li>`);
//           searchDropdownEl.append(itemEl);
//         });
//       };
    
//       const clearDropdown = () => {
//         searchDropdownEl.hide();
//       };
    
//     return { renderHomePage, renderSingleTvShowPage, renderSearchDropdown, clearDropdown };
//   })();





//Drugo

// export const $searchInput = $(`.search-box`);

// export const displayTop50 = (list) => {
//     const $mainContainer = $(`.main`);
//     const $row = $(`<div class='row'>`);

//     list.forEach(show => {
//         const $card = $(`
//                 <div class='col-12 col-md-6 col-lg-4 show' id='${show.id}'>
//                     <a href='#'>
//                         <img src='${show.posterUrl}' id='${show.id}'>
//                         <h3 class='show-title' id='${show.id}'>${show.name}</h3>
//                     </a>
//                 </div>
//                 `)
//         $mainContainer.append($row);
//         $row.append($card);
//     })
// };

// export const failed = () => {
//     alert(`Something went wrong`);
// };

// export const displayOnShowInfo = ({clickedShow, listOfSeasons, listOfActors}) => {
//     const $mainContainer = $(`#show-info-main`)
//     const $chosenShowTitle = $(`<h3>${clickedShow.name}</h3>`)
//     const $ulSeasons = $(`<ul>`);
//     const $seasonsTitle = $(`<h4 class='showTitle'>`);
//     const $ulACtors = $(`<ul>`);
//     listOfSeasons.forEach(season => {
//         const $li = $(`<li>`);
//         $li.text(`${season.startDate} - ${season.endDate}`);
//         $ulSeasons.append($li);
//     })
//     listOfActors.forEach(actor => {
//         const $liActors = $(`<li>`);
//         $liActors.text(`${actor.name.name}`);
//         $ulACtors.append($liActors);
//     })
//     const $infoDisplay = $(`
//             <div class='row poster-and-lists'>
//                 <div class='col-12 col-md-6'>
//                     <img src='${clickedShow.posterUrl}' id='${clickedShow.id}' class='info-img'>
//                 </div>
//                 <div class='col-12 col-md-6'>
//                     <div class='row'>
//                         <div class='col-12'>
//                         <h4>Seasons (${listOfSeasons.length})</h4>
//                             <ul class='seasons'>
//                                 ${$ulSeasons.html()}
//                             </ul>
//                         </div>
//                     </div>
//                     <div class='row'>
//                         <div class='col-12'>
//                             <h4 class='cast'>Cast</h4>
//                             <ul class='actors'>
//                                 ${$ulACtors.html()}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class='row description'>
//                 <div class='col-12'>
//                     ${clickedShow.description}
//                 </div>
//             </div>
//             `);
//     $mainContainer.append($chosenShowTitle);
//     $mainContainer.append($infoDisplay);
// };

// export const displaySearchList = (listToDisplay) => {
//     const $searchDiv = $(`.search-dropdown`);
//     $searchDiv.css("display", "block")
//     const $ulSearch = $(`.dropdown-ul`);
//     $ulSearch.empty();
//     listToDisplay.forEach(show => {
//         const $liSearch = $(`
//                     <li >
//                         <a href='#' id='${show.id}'> ${show.name}</a>
//                     </li>
//                 `);

//         $ulSearch.append($liSearch);
//     })

// };

// export const reset = () => {
//     $(`.search-box`).val("");
//     $(`.dropdown-ul`).empty();
// };