// Source: http://two.framerjs.com/editor/index.html?path=quickies/navigation.js
// There's a bug in which the screens will stop showing after clicking a few times
// It's not you, it s a bug with this code.

//This will be the main scroll container view that you see upon loading.
//Sometimes Framer bugs out and it takes a bit longer to load, possibly because I have a lot of images that I imported for banners etc.It's communicating via get requests so yea.  

var contentView = new ScrollView({
  clip: true,
  height: 667,
  scrollHorizontal: false,
  style: {
    "backgroundColor": "grey"
  },
  width: 375,
});

//I didn't create a separate superview for the header / date views because they would always remain constant on both pages, so instead I created a superview container for the bottom card main section. 

headerView = new ImageView({
  width: 360,
  height: 120,
  html: "Clubfest",
  image: "images/bartonHall.jpg",
  style: {
    "backgroundColor": "#AF2929",
    "color": "white",
    "font": "arial",
    "font-weight": "bold",
    "font-size": "3em",
    "text-align": "center",
    "line-height": "120px"
  },
  superView: contentView
});

subTextView = new View({
  x: 0,
  y: 100,
  width: 360,
  height: 40,
  html: "Sunday, September 9th 1-4 PM",
  style: {
    "backgroundColor": "black",
    "color": "white",
    "font": "arial",
    "font-weight": "medium",
    "font-size": "12",
    "text-align": "center",
    "line-height": "40px"
  },
  superView: contentView
});

function displayView_mainView() {
  var view_mainView = new View({
    x: 0,
    y: 140,
    style: {
      "margin-top": "0px",
      "backgroundColor": "grey"
    },
    height: 893,
    width: 375,
    visibilty: true,
    superView: contentView
  });

  //Start of views on main page super view container I created below the header section.

  dailySun = new ImageView({
    x: 5,
    y: 30,
    width: 330,
    height: 150,
    image: "images/dailySun.png",
    style: {
      "margin-left": "2.2%",
      "border-bottom-right-radius": "6px",
    },
    visible: true,
    superView: view_mainView
  });

  //Event listener for clicking first card.
  //So it appears that the subviews of each super view are contained within an arra by order or view placed. 
  //We are effectively checking if the second subview that contains the cards visible attribute is set to false, before activating the new view creation.
  //If it isn't set to false, set it to false etc. 
  //Makes sure that previous subview card list has its visibile attribute set to false, prior to calling upon the new view creation.

  dailySun.on("click", function() {
    if(contentView.subViews[2].visible = false){
        displayView_cornellDailySun();
      } else {
         contentView.subViews[2].visible = false;
         displayView_cornellDailySun();
      }
    });
  
    //For some reason sometimes it works sometimes it doesn't, maybe an async issue? However, I did read that above that there is a navigational glitch. Framer.js is extremely buggy. 
   
    //Each of these are cards that represent on the main page. They are superviewed to the main view controller, so they are apart of it, and inherit values.
    //Unfortunately this is very reptitive, I was looking into extending classes via constructors so I didn't have to repeat so much code, but it seems that is only avaialable in the new framer versions.

    consultingCornell = new ImageView({
      x: 5,
      y: 200,
      width: 330,
      height: 150,
      image: "images/consulting.png",
      style: {
        "margin-left": "2.2%",
        "border-bottom-right-radius": "6px",
      },
      visible: true,
      superView: view_mainView
    });

    appDev = new ImageView({
      x: 5,
      y: 370,
      width: 330,
      height: 150,
      image: "images/appDev.png",
      style: {
        "margin-left": "2.2%",
        "border-bottom-right-radius": "6px",
      },
      visible: true,
      superView: view_mainView
    });

    yamataiClub = new ImageView({
      x: 5,
      y: 540,
      width: 330,
      height: 150,
      image: "images/yamatai.png",
      style: {
        "margin-left": "2.2%",
        "border-bottom-right-radius": "6px",
      },
      visible: true,
      superView: view_mainView
    });

    photoSociety = new ImageView({
      x: 5,
      y: 710,
      width: 330,
      height: 150,
      image: "images/photo.png",
      style: {
        "margin-left": "2.2%",
        "border-bottom-right-radius": "6px",
      },
      visible: true,
      superView: view_mainView
    });
}

//This function will call upon the daily sun card detail view, and populate it on click of the card.

function displayView_cornellDailySun() {

  //We are going to create a new view here, that contains the new subviews for the detail sections, info, contact information etc.
  contentView.subViews[2].visible = false;
  //Tried debugging and added this as a double measure to turn off the previous cards view.

    var view_cornellDailySun = new View({
      x: 0,
      y: 140,
      style: {
        "margin-top": "0px",
        "backgroundColor": "white"
      },
      height: 520,
      width: 370,
      visibilty: true,
      scrollHorizontal: false,
      superView: contentView
    });

    var sunLogo = new ImageView({
      x: 0,
      height: 200,
      width: 390,
      image: "images/dailySun.jpg",
      style: {
        "color": "white",
        "padding": "20px",
      },
      visible: true,
      superView: view_cornellDailySun
    });

    var sunInfo = new ImageView({
      x: 0,
      y: 200,
      height: 50,
      width: 300,
      html: "The Cornell Daily Sun",
      style: {
        "background": "white",
        "color": "black",
        "font-size": "18px",
        "font-weight": "bold",
        "font-family": "Helvetica",
        "padding": "13px",
        "border-bottom": "3px solid #AF2929"
      },
      visible: true,
      superView: view_cornellDailySun
    });

    //There 100% has to be a better method of putting an icon next to a block of text than creating two views...maybe something to do with inputting manual div and span components into the html.
    //^I started attempting that for the underline feature because text-decoration = underline is not a thing in framer .on methods.
    //Possibly it would be nice to include a css icon, but that would require a style linking externally, on top of the fact that you can get the color specifications described within the wireframe.

    var infoButton = new ImageView({
      x: 0,
      y: 255,
      height: 21,
      width: 21,
      image: "images/infoButton.png",
      style: {
        "background": "white",
        "margin-top": "10px",
      },
      visible: true,
      superView: view_cornellDailySun
    });

    var informationSection = new ImageView({
      x: 32,
      y: 255,
      height: 500,
      width: 350,
      html: "Founded in 1880, The Sun is the oldest continuously independent college daily in the United States.<br>The Sun publishes a print edition on Monday, Tuesday and Thursday during the academic year and is free on newsstands and online. The Sun is staffed entirely by Cornell students, aside from a few full-time production and business positions, and operates out of an office building in downtown Ithaca.",
      style: {
        "background": "white",
        "color": "black",
        "width": "auto",
        "font-size": "12px",
        "font-family": "Arial",
        "margin-top": "10px",
        "padding-right": "8%",
      },
      visible: true,
      superView: view_cornellDailySun
    });

    var calendarImage = new ImageView({
      x: 0,
      y: 382,
      height: 21,
      width: 21,
      image: "images/calendar.png",
      style: {
        "background": "white",
        "margin-top": "10px",
      },
      visible: true,
      superView: view_cornellDailySun
    });

    var calendarDate = new ImageView({
      x: 32,
      y: 388,
      height: 500,
      width: 350,
      html: "<span id='txt'>First Meeting:</span> 9/8/18, GSH 142",
      style: {
        "background": "white",
        "color": "black",
        "width": "auto",
        "font-size": "12px",
        "font-family": "Arial",
        "margin-top": "10px",
        "padding-right": "8%",
      },
      visible: true,
      superView: view_cornellDailySun
    });

    var mailImage = new ImageView({
      x: 0,
      y: 429,
      height: 14,
      width: 21,
      image: "images/mail.png",
      style: {
        "background": "white",
        "margin-top": "10px",
      },
      visible: true,
      superView: view_cornellDailySun
    });

    var mailInfo = new ImageView({
      x: 32,
      y: 429,
      height: 500,
      width: 350,
      html: "<span id='mailText'>Editor@cornellsun.com</span>",
      style: {
        "background": "white",
        "color": "black",
        "width": "auto",
        "font-size": "12px",
        "font-family": "Arial",
        "margin-top": "10px",
        "padding-right": "8%",
      },
      visible: true,
      superView: view_cornellDailySun
    });

    //Event listener for clicking the cornellDailySun Info Page to redirect back to main card view.

    view_cornellDailySun.on("click", function() {
      displayView_mainView();
    //It's technically more efficient to just turn the previous attributes to true, instead of creating three layers on top of each other. 
    //This function call actually builds another card view layer above the info view. This might attribute to why there is some weird after image glitch occasionally.
    //Framer is buggy and for some reason won't respond to just turning the attributes to true for visbility.
    });
} 
//Calling the function that populates the main view upon loading.

displayView_mainView();
