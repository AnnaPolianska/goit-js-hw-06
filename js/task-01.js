const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories ${categories.length}`)



for( const categorie of categories){
    const titles = categorie.getElementsByTagName('h2');
   
    
    const nestedElements = categorie.getElementsByTagName('li')
    console.log(`Category : ${titles[0].textContent} 
    Elements :${nestedElements.length} `)
}
