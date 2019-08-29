import axios from "axios";

export default {
    getBooks: function(book) {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&download=epub&key=AIzaSyAKsCMZhTz13usAHFoB_PoFCk_KVxbh3OI");
    },
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    },
    deleteBook: function(id){
      return axios.delete("/api/books/" + id);
    },
    getSavedBooks: function(){
      return axios.get("/api/books")
    }
  };