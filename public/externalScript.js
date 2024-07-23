(function () {
  // Define functions only if they are not already defined
  if (typeof window.fetchAPI === "undefined") {
    function fetchAPI(date) {
      let result = [];
      const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
          return (s = (s * a) % m) / m;
        };
      };
      let random = seededRandom(date.getDate());

      for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
          result.push(i + ":00");
        }
        if (random() < 0.5) {
          result.push(i + ":30");
        }
      }
      return result;
    }
    window.fetchAPI = fetchAPI;
  }

  if (typeof window.submitAPI === "undefined") {
    function submitAPI(formData) {
      return true;
    }
    window.submitAPI = submitAPI;
  }
})();
