const tabsItem = document.querySelectorAll('.tabs')
const listItem = document.querySelectorAll('.tabs-content');
tabsItem[0].addEventListener('click', getTabs)




function getTabs(event){
    for(i=0; i < tabsItem[0].children.length; i++){
        if(tabsItem[0].children[i] === event.target){
            listItem[0].children[i].classList.remove('hidden');
            tabsItem[0].children[i].classList.add("active")
        } else {
            listItem[0].children[i].classList.add("hidden")
            tabsItem[0].children[i].classList.remove("active")
        }
    }
}
// event.target.className += ;

