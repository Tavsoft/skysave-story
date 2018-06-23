// ToDos:

// 1. Find a good avatar SVG
// Done

// 2. Find a lightweight world map SVG
// 3. Learn to draw line from a to b in SVG
// 4. Make the animation timeline

const animWait = "+=1.5";
const story = new TimelineMax();
story.set(".input-box", { transformPerspective: 800 });

story
  .to(".story-container", 0.1, {
    visibility: "visible"
  })
  .from(".avatar img", 0.6, {
    opacity: 0,
    y: 50
  })
  .to(
    ".avatar img",
    0.3,
    {
      x: 0,
      width: 150
    },
    "+=0.5"
  )
  .from(".meet", 0.4, {
    opacity: 0,
    y: 30
  })
  .from(".meet span", 0.3, {
    opacity: 0,
    y: 20
  })
  .to(
    ".one p",
    0.3,
    {
      opacity: 0,
      y: 30
    },
    "+=2"
  )
  .to(
    ".one img",
    0.3,
    {
      opacity: 0,
      y: 50
    },
    "-=0.1"
  )
  .from(".holidays", 0.4, {
    opacity: 0,
    y: 30
  })
  .to(
    ".holidays",
    0.3,
    {
      opacity: 0,
      y: 50
    },
    "+=2"
  )
  .from(".destinations", "0.4", {
    opacity: 0,
    y: 30,
    skew: "25deg"
  })
  .staggerFrom(
    ".destinations span",
    0.5,
    {
      opacity: 0,
      x: 20
    },
    0.2
  )
  .from(".duration", 0.3, {
    opacity: 0,
    y: 30
  })
  .to(
    ".duration",
    0.2,
    {
      opacity: 0,
      y: 30
    },
    animWait
  )
  .staggerTo(
    ".destinations span",
    0.3,
    {
      opacity: 0,
      x: 20
    },
    0.1,
    "+=0.2"
  )
  .to(".destinations", 0.3, {
    opacity: 0,
    y: 30,
    skew: "25deg"
  })
  .staggerFrom(
    ".two p",
    0.4,
    {
      opacity: 0,
      y: 30
    },
    0.2
  )
  .staggerTo(
    ".two p",
    0.3,
    {
      opacity: 0,
      y: 30
    },
    -0.2,
    "+=2.2"
  )
  .from(
    ".save",
    0.4,
    {
      opacity: 0,
      y: -20
    },
    "popInput"
  )
  .from(".inputs", 0.5, {
    opacity: 0,
    y: 30
  })
  .to(".avatar img", 0.3, {
    scale: 0.1,
    opacity: 0
  })
  .from(
    ".input-box",
    0.5,
    {
      opacity: 0,
      scale: 0.7,
      y: 30,
      skewX: "15deg"
    },
    "boxAppear"
  )
  .to(
    ".input-box",
    0.5,
    {
      x: -250
    },
    "boxAppear"
  )
  .to(
    ".inputs",
    0.5,
    {
      x: 250,
      y: 120
    },
    "boxAppear"
  )
  .to(
    ".home-before",
    0.1,
    {
      visibility: "hidden"
    },
    "+=0.4"
  )
  .from(".home-after", 0.2, {
    opacity: 0
  })
  .to(
    ".date-before",
    0.1,
    {
      visibility: "hidden"
    },
    "+=0.3"
  )
  .from(".date-after", 0.2, {
    opacity: 0
  })
  .to(
    ".destination1-before",
    0.1,
    {
      visibility: "hidden"
    },
    "+=0.2"
  )
  .from(".destination1-after", 0.2, {
    opacity: 0
  })
  .to(
    ".stay1-before",
    0.1,
    {
      visibility: "hidden"
    },
    "+=0.1"
  )
  .from(".stay1-after", 0.2, {
    opacity: 0
  })
  .to(".destination2-before", 0.1, {
    visibility: "hidden"
  })
  .from(".destination2-after", 0.2, {
    opacity: 0
  })
  .to(".stay2-before", 0.1, {
    visibility: "hidden"
  })
  .from(".stay2-after", 0.2, {
    opacity: 0
  })
  .to(".destination3-before", 0.1, {
    visibility: "hidden"
  })
  .from(".destination3-after", 0.2, {
    opacity: 0
  })
  .to(".stay3-before", 0.1, {
    visibility: "hidden"
  })
  .from(".stay3-after", 0.2, {
    opacity: 0
  })
  .to(".submit-btn-rect", 0.2, {
    fill: "#7ea1bb"
  })
  .to(".svg-plane", 0.5, {
    x: 800,
    y: 350,
    fill: "#60bcff"
  })
  .to(".svg-plane", 0.5, {
    rotation: -60
  })
  .to(".svg-plane", 0.5, {
    x: 40,
    y: -100,
    scale: 5.5
  })
  .to(
    ".input-box",
    1,
    {
      // rotationX: 10,
      rotationY: 100,
      // x: -200,
      y: 50,
      scale: 0.9,
      opacity: 0
    },
    "+=0.3"
  )
  .to(
    ".inputs",
    0.3,
    {
      opacity: 0,
      y: 30
    },
    "-=0.6"
  )
  .to(
    ".save",
    0.3,
    {
      opacity: 0,
      y: 20
    },
    animWait
  );

story.seek("popInput");
