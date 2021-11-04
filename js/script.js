$('#search-button').on('click', function(){

    $.ajax({
        url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
        type: 'get',
        dataType: 'json',
        data: {
            race: 'fish',
            num: '12',
            offset: 0,

        },
        success: function (result) {
            if (result.page != 0) {
                let movies = result.data;
                console.log(movies);

                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card" id="navbar-example2">
                                <img src="`+data.card_images[0].image_url+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+data.name+`</h5>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                <h4 id="scrollspyHeading1">Overview</h4>
                                    <p class="card-text">`+data.desc+`</p>
                                </div>
                                </div>
                            </div>                    
                        </div>
                    `);
                });
                
            } else {
                $('#movie-list').html('<h1>Movie Not Found!</h1>');
            }
        }
    })
});

$('#upcoming-button').on('click', function(){

    $.ajax({
        url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
        type: 'get',
        dataType: 'json',
        data: {
            race: 'reptile',
            num: '12',
            offset: 0,

        },
        success: function (result) {
            if (result.page != 0) {
                let movies = result.data;
                console.log(movies);

                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card" id="navbar-example2">
                                <img src="`+data.card_images[0].image_url+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+data.name+`</h5>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                <h4 id="scrollspyHeading1">Overview</h4>
                                    <p class="card-text">`+data.desc+`</p>
                                </div>
                                </div>
                            </div>                    
                        </div>
                    `);
                });
                
            } else {
                $('#movie-list').html('<h1>Movie Not Found!</h1>');
            }
        }
    })
});