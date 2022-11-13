// The title of the page
let title = document.querySelector("title");
// The logo in the nav

// The "Find Your Course" button in the nav
let findYourCourse = document.querySelector(".navi_menu .highlight a");

// The heading that says "Learning Today, Leading Tomorrow"
let h1 = document.querySelector("h1");

// All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
let domNodeList = document.querySelectorAll(
  ".navi_menu_dropdown_nested-dropdown"
);

// The amount of campuses around the world
let amtCampuses = document.querySelector(
  'a[href="/locations"] div[class="facts_list_item_quantity"]'
);

// The number of instructors
let amtInstructors = document.querySelectorAll(".facts_list_item_quantity")[2];

// The logos of GA's featured clients and hiring partners

// GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)

// The input where you add your email to sign up for the newsletter (in the footer)
