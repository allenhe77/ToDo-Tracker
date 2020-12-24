# ToDo-Tracker

## Description

- This application will allow users to track their "to-dos" and organize them in "cards" (similar to trello or any other kanban board)

## Use Cases

- Great way for project groups to quickly organize and coordinate "todos"
   - Members will be able to see what "todos" (i.e tasks) other group members have completed or added in real-time

- Email Notifications of "todos" to help people keep track of their progress outside of the app

- Easily transfer your "cards" and "todos" to any platform by using the API (?)

## Features

- Create RESTful API for use with any platform (discord bots, mobile apps, websites, etc)
- For website, allow real-time viewing of updates to the "cards" and "todos" (users should be able to see other users editing, adding, removing "cards" or "todos")
- Email notifications for "todo" completion or "card" activity
- Monthly/ Weekly Emailing of "progress reports" (how many "todos" created & completed)

## Models
- "Cards" - categories in which "to-do's" are placed. 
    - Title (name of the card/ category)
    - Description (super short description of the card)
    - Visibility (public, private, restricted)
    - Access (public, private, restricted)
    - Operations:
        - Modify access and visibility 
        - Remove "todos" (one, many, regex)
        - Sort "todos" (date, alphanumeric, completedStatus)
        - View "todos"

- "Todos" - tasks or items 
    - completed status (true or false)
    - title (short description or name of the task)
    - details (in-depth description or explanation of task)
    - creation date
    - Operations:
        - Edit
        - Remove
        - Move (to another valid card)
         - Set completed status
 
 - "Users" - users of this application)
    - Username (unique identifier)
    - Nickname
    - Email (for notification purposes only and login reset)
    - Password
    - Group (to allow multiple people to modify the same set of cards)
    - Operations:
        - Signup 
        - Login
        - Edit (nickname, email, password)
        - View all "cards"

