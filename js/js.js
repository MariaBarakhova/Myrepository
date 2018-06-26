var navItem = document.querySelector('.head a');
var tabItem = document.querySelector('.tab');

document.querySelector('.head').onclick = function(e) {
    var target = e.target;
    for (var i = 0; i < navItem.length; i++) {
        target ==navItem[i] && showContent(i);
       // if (target == navItem[i]) {
        //    showContent(i)
        //    console.log('index', i);
       // }
        //console.log(target);
    }
}


function hideContent (a) {
    for(var i = 0; i < tabItem.length; i++) {
        tabItem[i].classList.remove('show');
    }
}

function showContent (index) {
    console.log(tabItem[index]);
    hideContent();
    tabItem[index].classList.add('show');
}