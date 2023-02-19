const dataModule = (function () {
    class TvShow {
      constructor(name, id, coverUrl, cast, seasons, summary) {
        this.name = name;
        this.id = id;
        this.coverUrl = coverUrl;
        this.seasons = seasons;
        this.summery = summary;
        this.cast = cast;
        };
  };

  class Season {
      constructor(startDate, endDate) {
      this.startDate = startDate;
      this.endDate = endDate;
    }
    getStartDateEndDate() {
      return `${this.startDate} - ${this.endDate}`;
    }
  }

    // class Season {
    //   constructor(startDate, endDate) {
    //       this.startDate = startDate;
    //         this.endDate = endDate;
    //     };
    // };

    const getShows = () => {
        return fetch(`http://api.tvmaze.com/shows`)
            .then(function (res) {
                return res.json();
            })
        
            .then(function (showsRawObjects) {
          return showsRawObjects.slice(0, 50).map(({ name, id, image }) => new TvShow(name, id, image.original));
        });
    };
  
    const getSingleTvShow = (id) => {
        //console.log(id);
        return fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(function (res) {
                return res.json();
            })
            .then(function (rawTvShow) {
                const tvSeasons = rawTvShow._embedded.seasons.map(
                    (s) => new Season(s.premiereDate, s.endDate)
                );
                const cast = rawTvShow._embedded.cast.map((a) => a.person.name);
                return new TvShow(rawTvShow.name, rawTvShow.id, rawTvShow.image.original, rawTvShow.summary, cast, tvSeasons);
            });
    };

    const searchShow = (query) => {
        return fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
          .then(function (res) {
            return res.json();
          })
          .then(function (showsRawObjects) {
            return showsRawObjects.slice(0, 10).map(({ show }) => {
              const { name, id, image } = show;
              const imageToUse = image ? image.original : '';
              return new TvShow(name, id, imageToUse);
            });
          });
      };

    return {getShows, getSingleTvShow, searchShow};
})();
  


//     const getShows = () => {
//       return $.ajax({
//         url: 'http://api.tvmaze.com/shows',
//         method: 'GET',
//         dataType: 'json'
//       })
//       .then((showsRawObjects) => {
//         const topRatedShows = showsRawObjects
//           .filter(show => show.rating.average)
//           .sort((a, b) => b.rating.average - a.rating.average)
//           .slice(0, 50);
//         return topRatedShows.map(({ name, id, image }) => new TvShow(name, id, image.medium));
//       });
//     };
    
      
//     const getSingleTvShow = (id) => {
//         return $.ajax({
//           url: `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`,
//           method: 'GET',
//           dataType: 'json',
//         })
//           .then(rawTvShow => {
//             const tvSeasons = rawTvShow._embedded.seasons.map(s => new Season(s.premiereDate, s.endDate));
//             const cast = rawTvShow._embedded.cast.map(a => a.person.name);
//             return new TvShow(rawTvShow.name, rawTvShow.id, rawTvShow.image.original, rawTvShow.summary, cast, tvSeasons);
//           });
//       };
    
//     const searchShow = (term) => {
//         return $.ajax({
//           url: `https://api.tvmaze.com/search/shows?q=${term}`,
//           method: 'GET',
//           dataType: 'json',
//         })
//           .then(showsRawObjects => showsRawObjects.slice(0, 10).map(({ show }) => {
//             const { name, id, image } = show;
//             const imageToUse = image ? image.original : '';
//             return new TvShow(name, id, imageToUse);
//           }));
//       }; 
      
//   return { getShows, getSingleTvShow, searchShow };

// })();














//entites Drugo


// class Show {
//     constructor(name, id, posterUrl, description, rating) {
//         this.name = name;
//         this.id = id;
//         this.posterUrl = posterUrl;
//         this.description = description;
//         this.rating = rating;
//     }

//     getShowName() {
//         return `${this.name}`;
//     }
// }
// class Season {
//     constructor(startDate, endDate, numOfSeasons) {
//         this.startDate = startDate;
//         this.endDate = endDate;
//         this.numOfSeasons = numOfSeasons;
//     }
//     getStartDateEndDate() {
//         return `${this.startDate} - ${this.endDate}`;
//     }
// }
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Actor extends Person {
//     constructor(name) {
//         super(name);
//     }
// }

// const url = {
//     shows: `http://api.tvmaze.com/shows`,
//     // seasonsAndCast: `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
// }

// export const fetchShow = () => {

//     return fetch(url.shows)
//         .then(response => {
//             return response.json();
//         })
//         .then(myResponse => {
//             const listOfAllShows = [];
//             myResponse.map(show => {
//                 const createdShow = new Show(show.name, show.id, show.image.original, show.summary, show.rating);
//                 listOfAllShows.push(createdShow);
//             })
//             listOfAllShows.sort((a, b) => {
//                 a = a.rating.average;
//                 b = b.rating.average;
//                 return b - a;
//             })
//             const top50Shows = listOfAllShows.slice(0, 50);
//             return top50Shows;
//         })
// }
// export const setLocalStorage = (id) => {
//     localStorage.setItem("id", id);
//     return id;
// }

// export const fetchSeasonsAndCast = (id) => {
//     return fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
//         .then(response => {
//             return response.json();
//         })
//         .then(myResponse => {
//             const listOfActors = [];
//             const listOfSeasons = [];
//             const seasonsArray = myResponse._embedded.seasons;
//             const castArray = myResponse._embedded.cast;
//             seasonsArray.map(item => {

//                 const createdSeason = new Season(item.premiereDate, item.endDate, item.length);
//                 listOfSeasons.push(createdSeason);
//             })
//             castArray.map(item => {
//                 const createdPerson = new Person(item.person.name)
//                 const createdActor = new Actor(createdPerson);
//                 listOfActors.push(createdActor);
//             })
//             const clickedShow = new Show(myResponse.name, myResponse.id, myResponse.image.original, myResponse.summary, myResponse.rating.average);
//             return {
//                 listOfActors,
//                 listOfSeasons,
//                 clickedShow
//             }
//         })
// }

// export const fetchSearchShows = (searchValue) => {
//     return fetch(url.shows)
//         .then(response => {
//             return response.json()
//         })
//         .then(myResponse => {
//             const listOfAllShows = [];
//             const listOfSearchedSuggestions = [];
//             myResponse.map(show => {
//                 const createdShow = new Show(show.name, show.id, show.image.original, show.summary, show.rating);
//                 listOfAllShows.push(createdShow);
//             })
//             listOfAllShows.forEach(show => {
//                 const lowerCasedName = show.name.toLowerCase();
//                 if (lowerCasedName.includes(searchValue)) {
//                     listOfSearchedSuggestions.push(show);
//                 }
//             })
//             const slicedList = listOfSearchedSuggestions.slice(0, 10);
//             return slicedList;
//         })
// }
