# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

Answer: It moves the div "sidebar" 20px down and 20px to the right relative to the static position.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

Answer: The div "footer" is stuck at the bottom of the page, even when scrolling, compared to relative where it moves when the webpage is scrolled.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

Answer: ```position: absolute``` makes the position of the element relative to the top-left corner of the webpage, not relative to any parent containers. This is different from fixed because a container with ```position: fixed``` does not allow it to move with the webpage when you scroll, compared to absolute, where it does.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

Answer: z-index makes it so that whichever has the greater z-index, it would appear on top of other elements with lower z-index. Swapping z-index values would make the bottom layer at the top and the top layer at the bottom.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    Answer: We have to change the position left value of .notice to be higher so that the box moves more to the right. For me, I changed the value from 400px to 450px.
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    Answer: When the ```position: relative```, it moved more down because of the elements before it taking up space, relative to the parent containers and the containers around it. When ```position: fixed```, it moved back to where it was, where it moved relative to the top-left corner of the webpage, but now it doesn't move with the webpage when its scrolled.
    * What do you observe on about the effect of z-index on .notice and .content boxes?
    Answer: When the z-index is higher on the .notice box, it moved a layer higher than the .content box, because the .content box has a lower z-index.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    Answer: ```static``` is the default position value, where it follows the document flow, one after another. ```relative``` remains in document flow but it can be moved top, bottom, left, and right from its original position. ```absolute``` moves the element relative to an element it is under that has a position value other than static, or it moves relative to the top-right corner of the webpage; uses top, bottom, left, right. ```fixed``` works similar to ```absolute``` but when the webpage is scrolled, the element does not move with the webpage and stays ttuck there, unlike in ```absolute```.

    b.  How does absolute positioning depend on its parent element?

    Answer: An absolutely positioned element is positioned relative to its nearest ancestor that has a position value other than static.

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    Answer: ```position: sticky``` allows an element to stick within its parent container during scrolling; it sticks to the nearest scrollable element it is under, while ```position: fixed``` keeps an element fixed relative to the viewport regardless of scrolling.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

    Answer: I would use fixed for important pop-ups in the webpage, like when some parts of the website are changed or when there are reminders of when and where a school event is happening in. I would use static and relative for normal information that is part of the main chunk of the webpage. Absolute can also be used when I want to show a striking visual for my website, like when I want to show important school details and event details at the top or at the start of the page.
