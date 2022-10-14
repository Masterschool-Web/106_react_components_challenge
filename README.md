# React Components Challenge

In this challenge, you will have to break down an entire page design into small components.

How small? 

Well, that's depends on you!

But we will discuss when do we need to break it into smaller/bigger pieces. 

In the [solution branch](https://github.com/Masterschool-Web/react_components_challenge/tree/solution) you can find my approach to 

## ⚙️ Run the project

Inside the project's directory:
```npm start```
This should open a tab inside your browser with the project already running.

## 🎯 Goal

Unlike challenges we did before, there is no "one right answer" for this challenge.

The general goal is to break apart the code of the entire page into smaller pieces - or "Components". 

These components should be reusable. So for example, the `Card` component should be used for all card. 

We should not have a `MortyCard` and a `SummerCard`, but the data of "Morty" and "Summer" should be inserted into the `Card` component to present different cards. 

In other words, component should be general enough to be reused many time, and not too specific to be used only once (beside some exceptions).

## 🖌️  Design

The design is already created for you (in the css file). 
The entire page is working, you need to take it apart and make sure it is still working :)

<img width="1377" alt="design" src="https://user-images.githubusercontent.com/31222514/195375003-d7c32f4e-0b57-479f-9045-c2baec7cb1ea.png">

## ⚔️ Plan Of Attack

### Step 1 - visualize

Before start coding, visualize how you want to break down the design.

We will start by breaking the design into different areas.
- What are these areas in the current design? 

### Step 2 - Break to big pieces (areas)

We can break the design into the following areas:

<img width="910" alt="big_pieces" src="https://user-images.githubusercontent.com/31222514/195378052-2b46170c-2e90-41a6-932c-cfe7e8281011.png">

We can break this design into
- Navbar
- Main area (card container)
- Sidebar
- Footer

Inside `src` folder create a new `layout` folder.
Insie you can create a folder for each component.

Each component folder will have two files:
- `LayoutComponent.jsx`
- `layout_component.css`

For example:
- `Navbar.jsx`
- `navbar.css`

This way we can already have major components and make it easier to read the code inside `App.js`.

Once we did that, how can we break apart each area into smaller pieces?

### Step 3 - Break each piece to little pieces

We can see that the Avatar (the profile image) is reused across different areas:
- Navbar
- Sidebar (inside each card)
- Footer (for the author)

So if we create an `Avatar` component, we can import it into each area.
This way we can create a small piece once and reuse it every where! 

Break down more of the areas into smaller pieces!

Inside `src` folder create a new `layout` folder.
Insie you can create a folder for each component.

Each component folder will have two files:
- `Component.jsx`
- `component.css`

For example:
- `Avatar.jsx`
- `avatar.css`

For example:
<img width="1358" alt="components" src="https://user-images.githubusercontent.com/31222514/195376154-38259e8b-178f-4538-b23c-5f45c583b44c.png">

--------------

<p>
<img width="2%" src="https://user-images.githubusercontent.com/31222514/195368124-52fe1a51-3ee5-4e89-97e3-d121c6475429.png" alt="profile picture"/>
Challenge written by David Rajcher (https://github.com/David-L-R)
  </p>
