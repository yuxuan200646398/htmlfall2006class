// runs on every page it ues the coponents form the conmponents
// now we ask what page are we on/
const page=document.body.dataset.page;
// nwo that  we have our what page..now we can add our metadaa
const pageMeta={
    home:{
        title:"home",
        descriptions:"this is a home descriptions"

    },
     about:{
        title:"home",
        descriptions:"this is a aobut descriptions"
        
    },
     contact:{
        title:"home",
        descriptions:"this is a contact descriptions"
        
    }
}
// the cta content
const ctaContent={
    home:{
        heading:"ffffaafsfa",
        text:"lfhlfhf",
        buttonText:"ffffff",
        link:"index.html"
    },
    about:{
        heading:"676767676767",
        text:"67676676767",
        buttonText:"676767676767677",
        link:"contact.html"
    },
}
const favourites=[
    {title:"Espresso",text:"blah"},
    {title:"cold brew",text:"blah blah"},
    {title:"croissant",text:"blah blah blah"},

]
// build a page 
const meta =pageMeta[page];
renderHead(creatMetadata(meta.title,meta.description,meta.robots));
// fill in our page
render("#site-header",createHeader(page));
render("#site-header",createFooter(sitename));
render("#cta",createCallToAction(ctaContent[page]));

const cardHtml =favourites
.map((item)=> createCard(item.title.item.text))
.join("");

render("#card",cardsHtml)

