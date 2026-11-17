// inthe fil each componen is a funtion that retures a string o f html code. The function is called  HTML
// our shared data
// a const holding text we want to use in our components
const sitename = " bright bean coffee";
// An ARRAY of objects :one per nav item
const navlinks = [
    {label : "Home", href: "index.html", page:"home"},
    {label : "About", href: "about.html", page:"about"},
    {label : "Contact", href: "contact.html", page:"contact"}
];
// our 1st component ...metadata
// small helper: makes text safe to sit inside an HTML attribute
function escapeAttribute(text){
    return String(text).replace(/&/g,"&amp;").replace(/"/g,"&quot;");
}
// titlle,description and robots ar parameters,so every page can send in its own values
function createMetadata(title, description, robots="index, follow"){
    // eveerty pagetitle end with the site name for example: "About | Bright Bean Coffee"
    const fullTitle='${title} | ${sitename}';
    return `
    <meta chrset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name = "robots"   content="${escapeAttribute(robots)}">
    <meta name = "description" content="${escapeAttribute(description)}">
    <tiltle>${escapeAttribute(fullTitle)}</title>
    `;
}
// header component
function createHeader(currentPage){
    // map turns every link object into a string of html code
    // join glues the strings together with nothing between them 
    // skip join and you ger unwanted connas between the links
    const links= navLinks
    .map((link)=> {
        // the teranry operator form part 1 :if this link is the current page 
        // add aria-current="page" otherwise nothign
        const ariaCurrent = link.page === currentPage ? 'aria-current="page"' : '';
        return`<li><a href ="${link.href}"${current}>${link.label}</a></li>`;
    })
    .join("");
    return`
    <a class="logo" href="index.html">${sitename}</a>
    <nav>
       <menu>   
           ${links}
      </menu> 
       </nav>
    `;
    }
    // footer component
    function createFooter(name ,year= new Date().getFullYear()){
        return`
        <p>&copy; ${year} ${(name)}.All right reserved.</p>
        <p>Some address</p>
        `;
    }
    // call to action component
    function createCallToAction(content){
        return`
        <h2>${content.heading}</h2>
        <p>${content.text}</p>
        <a class ="buttom" href="${content.link}">${content.buttonText}</a>
        `;


    }

// card compoment
function creatCard(tittle,text){
    return`
    <article class="card">
        <h3>${tittle}</h3>
        <p>${text}</p>
        </article>
    
    
    
    `
}
    
// html to page helper
// this function finds the element thet matches the selector and fills it with html
function render(selector,html){
    const element=document.querySelector(selector);
    // if the page does't have that placeholeder queryselector gives a null
    if(element=== null){
        console.log("Could not find"+selector+"on this page.");
        return;

    }
    element.innerHTML=html;
}
// like ender(),but for the head ."afterbegin" means at teh very start of the head we are dong 
// this so the metadata sits above the CSS
function renderHead(html){
    document.head.insertAdjacentHTML("afterbegin,",html);
}
