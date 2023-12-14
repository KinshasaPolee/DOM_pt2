# DOM Manipulation (Part Two)

# Introduction
This lab is the second of a two-part assignment in which you will manipulate the DOM using various tools and techniques. This portion of the activity focuses on making elements dynamic and interactive using DOM events and event-driven programming techniques.

# Objectives
Manipulate the DOM using JavaScript and DOM events.

# Part 1: Getting Started
Take a few moments to explore your code and re-familiarize yourself with it. Now that you have a deeper understanding of DOM manipulation concepts, if there is anything you would like to fix or change, now is the time to do so.

# Part 2: Adding Additional HTML and CSS
One of the most important features of an interactive user interface is feedback. The user needs to know that their actions are accomplishing something, even if it is something as simple as a button shifting color slightly or changing the cursor style when hovered, indicating that it is clickable.

# Part 3: Creating the Submenu
A submenu serves as an additional menu for users to select from, and offers more specific context to the top-level menu's options. We will start by using some DOM manipulation techniques to format the submenu before adding interaction to each menu component. All future steps should be completed within the index.js file. Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction.

# Part 4: Adding Menu Interaction
In order to add submenu links, we will need to restructure the menuLinks array within index.js. Update the menuLinks array.
Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs about, catalog, etc. when a link is clicked. Clicking anywhere other than on a link should do nothing.
Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected. Hint: Removing a non-existent class from an element does not cause an error!
Progress Check - Clicking any of the links should make that link active and clear the others. Clicking an active link should clear that link.

# Part 5: Adding Submenu Interaction
Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state. Hint: Caching the "link" object will come in handy for passing its subLinks array later.
Progress Check - Ensure that clicking CATALOG, ORDERS, etc. shows the submenu bar, and that clicking them again hides it. Clicking ABOUT should not show the submenu bar.
The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu.
Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.
The menu is almost complete! Now, we need to add interactions to the submenu items themselves.