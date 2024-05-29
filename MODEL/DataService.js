export default class DataService{
    getAdat(vegpont, callback) {
        fetch(vegpont, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            callback(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      
       postAdat(vegpont, adat) {
        fetch(vegpont, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(adat),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
       putAdat(vegpont, adat, id) {
        fetch(vegpont + "/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(adat),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      deleteAdat(vegpont, id) {
        fetch(vegpont + "/" + id, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
}