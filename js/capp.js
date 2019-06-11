var n_stars = 5 ;
var n_movies=8;
data = {"res": [{"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BMjIxOTEyMDM2MV5BMl5BanBnXkFtZTcwNDMyNDk5OA@@._V1_UY209_CR2,0,140,209_AL_.jpg", "m_release_year": "2011", "m_id": "42c18903357cd9508dc1753091d891f5a732eba98b002ded71f4eb4a75d54e5b", "m_title": "Fasel wa Na'ood"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BYWMwMjdmYmEtMTFjZS00Njc4LTkyMWEtZGY3MDRiNDczMmExXkEyXkFqcGdeQXVyNDkxMzY0Mjk@._V1_UY209_CR4,0,140,209_AL_.jpg", "m_release_year": "2015", "m_id": "bf176d63e5c1bd5f04f91f5ed45ef32f2753e4aee6909a15c45988668612593f", "m_title": "Ahwak"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BMjMxNTE3NTYyMl5BMl5BanBnXkFtZTcwNDc0MDQwOQ@@._V1_UY209_CR3,0,140,209_AL_.jpg", "m_release_year": "2012", "m_id": "1187ae1827b00863bece9bdf01be43aea3ff687ca5c0a9f360c4cfeff85c7c61", "m_title": "Harag W' Marag"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BM2FlYjc3MDItMmExOC00OTcyLTgzYWEtOWQ4YTk3YWRhYTNlXkEyXkFqcGdeQXVyNTIxMDY2Njk@._V1_UY209_CR39,0,140,209_AL_.jpg", "m_release_year": "2012", "m_id": "c81f9cee75f46884da07d60c7494db34a49d7bae7fb3dd5404635e2f68be0ebb", "m_title": "El-Markeb"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BMTU4MDU2MDkwNF5BMl5BanBnXkFtZTgwMDk4NjkzMDE@._V1_UY209_CR3,0,140,209_AL_.jpg", "m_release_year": "2013", "m_id": "f46f4288208683f2bbc6d03caf79415c84c62a979ecf59327623f4983426b0da", "m_title": "Rags & Tatters"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BY2ZmMDQ4NzItNjYzMS00NjNjLTgwOGYtOTcyZWQ3N2VmMTA1XkEyXkFqcGdeQXVyNjU0NTU1NjU@._V1_UY209_CR2,0,140,209_AL_.jpg", "m_release_year": "2006", "m_id": "73d6d9dee3fc4bde5e3a5baeb75d7ba4be9ea5bb0a2ac19132dd18037acca4c6", "m_title": "90 Minutes"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BZjFjZDE2MmYtNDkxZC00NDNhLWIwOGEtYTc1N2UyMjljM2FkXkEyXkFqcGdeQXVyMjg0MzMwNzg@._V1_UY209_CR2,0,140,209_AL_.jpg", "m_release_year": "2011", "m_id": "856d07eba75e51a20d6b9835836bb0fcac8e7a8f1bf270f115b4c24728094634", "m_title": "El Shoq"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BNmZlOTBlNWQtZDU4My00OTY5LWIxYTgtMzllNzI4ZDE1Y2RkXkEyXkFqcGdeQXVyNTIxMDY2Njk@._V1_UY209_CR2,0,140,209_AL_.jpg", "m_release_year": "2009", "m_id": "a2c9db592464b8db77ca241245fccb9a184169acf201f5bfd0d6d698153c1d75", "m_title": "Aaz Ashab"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BMWUxMTA1MGQtN2NhMy00MWM4LWFjMDgtYzEyMjkxMDVkNWI1XkEyXkFqcGdeQXVyMjQ0ODM4MDU@._V1_UY209_CR2,0,140,209_AL_.jpg", "m_release_year": "2015", "m_id": "7b7a1dd31b341da78b6a7898ed6231b268a5708ca9984fe6161751d5c4a1a380", "m_title": "Eyal Hirrifah"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BNWVlYTFiZWYtMjg5Ny00Mjg1LWE0ZWMtOWEwMmRhMjI3ODdiXkEyXkFqcGdeQXVyMzI4MTk3MTY@._V1_UY209_CR2,0,140,209_AL_.jpg", "m_release_year": "2014", "m_id": "1320159061102958e625138e1043bebd8de991263eea5c16962f49c4e1b41654", "m_title": "Abou Al Oureef"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BNGE1YzE0ZjUtOGVhNy00MzIzLWI3NWItNjk1NDUwZDBmZWRkXkEyXkFqcGdeQXVyNTIxMDY2Njk@._V1_UY209_CR13,0,140,209_AL_.jpg", "m_release_year": "2011", "m_id": "2540187eb8176e896bbbbeedbbc738f4d1b9ea13b030ce77eb69bbacea67d759", "m_title": "Eza'at Hubb"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BMjgwNjdiYzUtZmQ5MC00MGQ5LThmNjctNmFkMzYxYmM2YWU4XkEyXkFqcGdeQXVyNDkxMzY0Mjk@._V1_UX140_CR0,0,140,209_AL_.jpg", "m_release_year": "2007", "m_id": "13191524fcc5a9f09c8801c1f039d34fe3e19ec4497f716566890c0949113519", "m_title": "Taymour and Shafika"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BMTUxOTY4OTU0MF5BMl5BanBnXkFtZTgwNzg3NTkyNzE@._V1_UY209_CR3,0,140,209_AL_.jpg", "m_release_year": "2015", "m_id": "714cb5d0e2938f0a354f6ef72f027eac2c52af0ccf00d3e5788606530815725c", "m_title": "The Price"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BOTQ0NzQwNTU1Ml5BMl5BanBnXkFtZTgwOTI0OTk5MjE@._V1_UY209_CR4,0,140,209_AL_.jpg", "m_release_year": "2014", "m_id": "0682bd5564ac76f6be73afa37a97a832e8857b493b5d6a759072df2337d0b99d", "m_title": "Alnabatshy"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BMThiYTk2ZTUtMjk4ZS00ZmQxLWEyYTQtMzI0YzM5ZmM0Y2UxXkEyXkFqcGdeQXVyNjQyMzA3MTM@._V1_UY209_CR2,0,140,209_AL_.jpg", "m_release_year": "2013", "m_id": "bae192d74bb76327bd4040fbbd1dcbf22cd879f43d831149cd451bae492fabd7", "m_title": "Al Hafla"}, {"m_type": "movie", "m_img": "https://m.media-amazon.com/images/M/MV5BMTkyNjI4NTE2NF5BMl5BanBnXkFtZTgwNjkyMzI0MjE@._V1_UY209_CR6,0,140,209_AL_.jpg", "m_release_year": "2014", "m_id": "83c8f3e0766987e49772f0b437de95576025e94f9a9b169da0804e93c5da17d2", "m_title": "Sone'a Fee Misr"}]}


function fill_rate(star_name, x) {

    // un-coloring all starts
    for (i=1; i<=n_stars; i++){
        elem_id = star_name+i;
        document.getElementById(elem_id).style.color = "#ccc";
    }
    // coloring until the rate given
    for (i=1; i<=x; i++){
        elem_id = star_name+i;
        document.getElementById(elem_id).style.color = "#c59b08";
    }
}

function do_something(star_name, x) {

    fill_rate(star_name, x);

}


function getRandomMedia(){

    var html_str = "";
    document.getElementById("media").innerHTML = "";

    for (idx=0; idx<n_movies; idx++) {

        var media = data["res"][idx];
        var title = media["m_title"].substring(0,22);

        html_str += '<div class="movie">' ;
        html_str += '<figure class="movie-poster"><img src="'+ media["m_img"] +'" alt="#"></figure>' ;
        html_str += '<div class="movie-title"><a href="single.html">'+ title +'</a></div>' ;

        html_str += '<div class="rate">';

        var star_name = media['m_id'];

        for (i=n_stars; i>=1; i--){
            html_str += '<label id="'+ star_name +i+'" title="text" onclick="do_something(\''+ star_name +"\'," + i +')"></label>';
        }

        html_str += '</div>';
        html_str += '<div class="contact-form">';
        html_str += '<input type="submit" value="Rate It" style="display: block;">';
        html_str += '</div>';

        html_str += '</div>' ;
    }
    $("#media").append(html_str);

}
