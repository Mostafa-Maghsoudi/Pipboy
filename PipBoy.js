$(document).ready(function(){
    var weapons=[{
        "name":"44_pistol",
        "damage":48,
        "ammo":10,
        "fire_rate":6,
        "range":119,
        "accuracy":66,
        "weight":4.2,
        "value":9
    },
    {
        "name":"10mm_pistol",
        "damage":18,
        "ammo":16,
        "fire_rate":46,
        "range":119,
        "accuracy":61,
        "weight":4.2,
        "value":5.3
    },
    {
        "name":"assault_rifle",
        "damage":30,
        "ammo":30,
        "fire_rate":40,
        "range":119,
        "accuracy":7.2,
        "weight":13.1,
        "value":144
    }
]
  $('.div-weapons div').on("click", function(e){
     var current_target=$(e.currentTarget).attr('class');
     $('.div-weapons div').removeClass('active');
     $(e.currentTarget).addClass('active');

     for(i in weapons){
         if(weapons[i].name==current_target)
         {
            $('.damage').html(weapons[i].damage);
            $('.ammo').html(weapons[i].ammo);
            $('.fire_rate').html(weapons[i].fire_rate);
            $('.range').html(weapons[i].range);
            $('.accuracy').html(weapons[i].accuracy);
            $('.weight').html(weapons[i].weight);
            $('.value').html(weapons[i].value);
            
         }
     }
  })
})

