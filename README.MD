# authentication

## Register User & Admin

**POST /auth/register_admin**
----
Register User & Admin to the to do list app
* **Required Role:** `admin or user`
  
* **URL Params** 
  None
 
* **Data Params**  
```
  {
    email: string,
    fullname: string,
    password: string,
    role: {
            id_role: integer,
            role_name: string,
          }
  }
```
```
If you want to register admin, you will need access token as parameter
  {
    email: string,
    fullname: string,
    password: string,
    access_token: string,
  }
```

* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    "message": "Succesfully registered"
}
```
* **Error Response:**  
    * **Code:** 200
    **Content:** `{ error : "Email has been registered" }`  
    OR
    * **Code:** 200
    **Content:** `{ error : "Your email is invalid" }`  
    OR
    * **Code:** 200  
    **Content:** `{ error : "Your password is mismatch." }`
    OR
    * **Code:** 200  
    **Content:** `{ error : "Your password is invalid." }`


## Login 

**POST /auth/login**
----
Log in to the to do list app
* **Required Role:**`admin or user`
  
* **URL Params** 
  None
 
* **Data Params**  
```
  {
    email: string,
    password: string
  }
```

* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    user: [
       {"id": 2},
       {"email": "johndoe@example.com"},
       {"password": "1221312312"},
       {"role": "user"},
       {"accessToken": "awdkaowjdaonda92412h412"},
     ]
}
```

* **Error Response:**  
  * **Code:** 200
  **Content:** `{ error : "Your email or password is invalid" }`  


## Forgot Password 

**POST /auth/forgot**
----
Send the link to reset the password to email
* **Required Role:**`admin or user`
  
* **URL Params** 
  None
 
* **Data Params**  
```
  {
    email: string,
  }
```

* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    message: "Please check your email to change the password"
}
```
* **Error Response:**  
  * **Code:** 200
  **Content:** `{ error : "Your email is invalid" }`  

## Forgot Password 2

**GET /auth/forgot?id=:id_user&token=:token**
----
Sending new password and token to user
* **Required Role:**`admin or user`
  
* **URL Params** 
  *Required:* `id_user=[integer]`
  *Required:* `token=[string]`
 
* **Data Params**  
  None

* **Headers**  
  Content-Type: application/json
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    password: alsdn190
    jwt_token: kas9213nskbxd819
}
```

* **Error Response:**   
  * **Code:** 404
  **Content:** `{ error : "Not Found" }`  

## Update Password

**PATCH /auth/forgot**
----
Log in to the to do list app
* **Required Role:**`admin or user`
  
* **URL Params** 
  None
 
* **Data Params**  
```
  {
    email: string,
    password: string,
    forgot_password: string,
  }
```

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    message: "Your password has been changed!"
}
```

* **Error Response:**   
  * **Code:** 200
  **Content:** `{ error : "Your email is invalid" }`  
  OR
  * **Code:** 200  
  **Content:** `{ error : "Your password is invalid." }`


## Sign Out

**POST /auth/signout**
----
Signing out from the todo list app
* **Required Role:**`admin or user`
  
* **URL Params** 
  None
 
* **Data Params**  
  None

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    message: "Your have been logged out!"
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`  





# Users

* User object
```
{
  id_user: integer
  fullname: string
  email: string
  id_role: integer
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```

## Get users

**GET /users**
----
Get users registered in to do list app
* **Required Role:**`admin`
  
* **URL Params** 
  None
 
* **Data Params**  
  None

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    users: [
             {<user_object>},
             {<user_object>},
             {<user_object>}
            ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`

## Update Users

**PATCH /users/:id_user**
----
Make some change in user

* **Required Role:**`admin or user`
  
* **URL Params** 
  *Required:* `id_user=[integer]`
 
* **Data Params**  
```
{
   fullname: string,
}
```

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
     {<user_object>}
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`


# Todo

* Todo object
```
{
  id_todo: integer
  id_user: integer
  title: string
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```



## Get todos

**GET /todos**
----
Get all the todos group that user have
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id_user=[integer]`
 
* **Data Params**  
  None

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    todos: [
             {
                "id_todo": 1,
                "title": "Grocery list"
             },
             {
                "id_todo": 2,
                "title": "Grocery list #2"
             },
             {
                "id_todo": 3,
                "title": "Today Todo"
             },
            ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`


## Get todo

**GET /todos/:id_todo**
----
Get 1 todo group in the user to see the task list
* **Required Role:**`user`

* **URL Params** 
  *Required:* `id_user=[integer]`
  *Required:* `id_todo=[integer]`
 
* **Data Params**  
  None

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
* **Code:** 200
  **Content:**  
```
{
    <todo_object>
}
```

* **Error Response:**   
* **Code:** 403
**Content:** `{ error : "You are not authorized" }`

## Create ToDo

**POST /todos**
----
Create a new todo group
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id_user=[integer]`
 
* **Data Params**  
```
  {
    title: string,
  }
```

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    "message": "Your to do has been successfuly saved.",
    "todo": [
              ????
            ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`
  OR
  * **Code:** 200
  **Content:** `{ error : "Your task is invalid" }`


## Update ToDo

**PATCH /todos/:id_todo**
----
Make changes on todo group
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id=[integer]`
  *Required:* `id_todo=[integer]`
 
* **Data Params**  
```
  {
    title: string,
  }
```

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    "message": "Your to do has been successfuly updated.",
    "todo": [
              ????
            ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`
  OR
  * **Code:** 200
  **Content:** `{ error : "Your task is invalid" }`

## Delete ToDo

**PATCH /user/:id/todo/:id_todo**
----
Delete the todo group
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id=[integer]`
  *Required:* `id_todo=[integer]`
 
* **Data Params**  
  None

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    "message": "Your to do has been Deleted.",
    "todo": [
              ????
            ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`
  OR
  * **Code:** 200
  **Content:** `{ error : "Your task is invalid" }`


# Todo List

* Todo List object
```
{
  id_todolist: integer
  id_todo: integer
  task: string
  id_status: int
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```



## Get todo lists

**GET /todos/:id_todo/todolists**
----
Get the task lists in todo group
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id_user=[integer]`
 
* **Data Params**  
  None

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    todos: [
             {
                "id_todolist": 1,
                "task": "Buy mango"
                "status": "Completed"
                "attachment": [
                                { 
                                  "id_attachment": 1
                                  "url": "?"
                                  "caption": "mango"
                                }
                              ]
             },
             {
                "id_todolist": 2,
                "task": "Buy orange"
                "status": "Completed"
                "attachment": [
                                { 
                                  "id_attachment": 1
                                  "url": "?"
                                  "caption": "mango"
                                }
                              ]
             },
            ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`

## Create todolists

**POST /todos/:id_todo/todolists/**
----
Creating task list
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id_todo=[integer]`
 
* **Data Params**  
```
  {
    task: string,
  }
```

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:**  
  * **Code:** 200
  **Content:**  
```
{
    "message": "Your task has been successfuly saved.",
    "todo": [
              <object todo list>
            ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`
  OR
  * **Code:** 200
  **Content:** `{ error : "Your task is invalid" }`


## Update ToDo List

**PATCH /todos/:id_todo/todolists/:id_todolist**
----
make changes in the todo list
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id_todo=[integer]`
  *Required:* `id_todolists=[integer]`
 
* **Data Params**  
```
  {
    task: string,
  }
```

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    "message": "Your to do has been successfuly updated.",
    "todo": [
              <object todo list>
            ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`
  OR
  * **Code:** 200
  **Content:** `{ error : "Your task is invalid" }`

## Delete ToDo Lists

**DELETE /todos/:id_todo/todolists/:id_todolist**
----
Delete todo
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id_todo=[integer]`
  *Required:* `id_todolist=[integer]`
 
* **Data Params**  
  None

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    "message": "Your task has been deleted permanently.",
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`
  OR
  * **Code:** 200
  **Content:** `{ error : "Your task is invalid" }`



# Attachment

* Attachment object
```
{
  id_attachment: integer
  id_todolist: integer
  url: string
  caption: string
  created_at: datetime(iso 8601)
  updated_at: datetime(iso 8601)
}
```



## Get attachment

**GET /todolists/:id_todolist/attachment**
----
Get the attachment in todo list
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id_todolist=[integer]`
 
* **Data Params**  
  None

* **Headers**  
  Content-Type: application/json  
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
  attachment: [
               { 
                 "id_attachment": 1
                 "url": "?"
                 "caption": "mango"
               }
              ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`



## Create attachment

**POST /todolists/:id_todolist/attachment**
----
Creating/Adding attachment to todo list
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id_todolist=[integer]`
 
* **Data Params**  
```
  {
    url: string,
    caption: string,
  }
```

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:**  
  * **Code:** 200
  **Content:**  
```
{
    "message": "Your attachment has been successfuly added.",
    "todo": [
              <object todo list>
            ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`
  OR
  * **Code:** 200
  **Content:** `{ error : "Your task is invalid" }`


## Update Attachment

**PATCH /todolists/:id_todolist/attachment/:id_attachment**
----
Make changes in the attachment
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id_todolist=[integer]`
  *Required:* `id_attachment=[integer]`
 
* **Data Params**  
```
  {
    url: string,
    caption: string,
  }
```

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    "message": "Your attachment has been successfuly updated.",
    "todo": [
              <object todo list>
            ]
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`
  OR
  * **Code:** 200
  **Content:** `{ error : "Your task is invalid" }`

## Delete Attachment

**DELETE /todolists/:id_todolist/attachment/:id_attachment**
----
Delete attachment
* **Required Role:**`user`
  
* **URL Params** 
  *Required:* `id_todolist=[integer]`
  *Required:* `id_attachment=[integer]`
 
* **Data Params**  
  None

* **Headers**  
  Content-Type: application/json
  Authorization: JWT Token
* **Success Response:** 
  * **Code:** 200
  **Content:**  
```
{
    "message": "Your attachment has been deleted permanently.",
}
```

* **Error Response:**   
  * **Code:** 403
  **Content:** `{ error : "You are not authorized" }`
  OR
  * **Code:** 200
  **Content:** `{ error : "Your task is invalid" }`
