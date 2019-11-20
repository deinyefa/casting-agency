# Casting Agency
## Introduction
This project is here to help casting agencies more easily handle and assign movies and their actors. Easily add, remove, and edit your movie listings and actors with this API. 

## Getting started
### Installing Dependencies
#### Python 3.x
To make sure you have the latest version of python running on your machine, follow the steps here in the [python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python).

#### Virtual Environment
When working on python projects, it is recommended that you run things on a virtual environment. This way, you will be able to run modules on different versions as needed. These instructions will get you set up on a mac. To see a more thorough walk-through or if you're running on another OS, take a look at the [python docs](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/).

 1. Install/upgrade pip `python3 -m pip install --user --upgrade pip`
 2. Install virtualenv `python3 -m pip install --user virtualenv`
 3. Create a virtual environment `python3 -m venv env`
 4. Activate it `source env/bin/activate`
 5. To deactivate: `deactivate`

#### PIP Dependencies
With the virtual environment run: 
```bash
pip install -r requirements.txt
```
This will install all the dependencies listed in `requirements.txt`.

### Running the server locally
To run the server locally, run:
```bash
export FLASK_APP=app.py;
flask run --reload
```
`export FLASK_APP=app.py;` needs to be run everytime a new terminal window is opened.
The `--reload` flag will reload the server when a file is changed.

**This project is currently hosted on [https://casting-agency.herokuapp.com](https://casting-agency.herokuapp.com)**

## API Reference

 - Base URL: The live backend can be accessed [here](https://casting-agency.herokuapp.com).
 - Authentication: Endpoints require different levels of authentication, depending on user roles.
	 - Casting Assistant
		 - Can view actors and movies
	 - Casting Director
		 - Can view actors and movies
		 - Can add or remove actors
		 - Can modify actors and movie information
	 - Executive Producer
		 - Can view actors and movies
		 - Can modify actors and movie information
		 - Can add or remove actors
		 - Can add or remove movies

### Getting Authenticated
To log, please visit this [Auth0 login interface](https://dev-deinyefa.auth0.com/authorize?audience=casting-agency&response_type=token&client_id=gZlfS8C3GgADzGL5UezkiwTTkNrPl5bR&redirect_uri=https://casting-agency.herokuapp.com). You will be redirected back to the hosted service with your authorization token in the browser bar. This token will be used to access the endpoints.

Three test users with different permission levels have been created in order to test the endpoints (tokens will expire every 2 hours):

 - Casting Assistant
	 - Email: casting.assistant@example.com
	 - Password: Password1
- Casting Director
	- Email: casting.director@example.com
	- Password: Password2
- Executive Director
	- Email: exective.director@example.com
	- Password: Password3

### Error Handling
Errors are returned as JSON objects that look something like this:
```
{
	"error": 404,
	"message": "resource not found",
	"success": false
}
```
The API will return objects like this when requests fail because of errors of type:
- 400: Bad Request (usually bad syntax)
- 401: Unauthorizied Request
- 404: Resource not found
- 405: Method not allowed
- 422: Unprocessable request
- 500: Internal server error

### Endpoints
#### Movies
##### GET /movies
- General:
	- Required permission: View actors and movies
	- Fetches available movies as an array of objects that contain a movie id, title, and release date
	- Request arguments: None
	- Response: all movies pagingated in tens, success value, and total number returned
- Sample: 
	```
	curl --header "Authentication: Bearer {TOKEN}" https://casting-agency.herokuapp.com/movies
	```
- Response: 
	```
	{
		"movies":  [
			{
				"id":  1,
				"release_date":  "2017-09-05",
				"title":  "Jungle Book"
			},
		],
		"success":  true,
		"total_movies":  1
	}
	```

##### POST /movies
- General:
	- Required permission: Post and delete movies
	- Posts a new movie to the database. Required fields are `title` and `release_date`
	- Request arguments: None
	- Response: all movies pagingated in tens, success value, newly created movie id, and total number returned
- Sample: 
	```
	curl -X POST --data '{"title": "Avengers Endgame", "release_date": "04-26-2019"}' --header "Authentication: Bearer {TOKEN}" https://casting-agency.herokuapp.com/movies
	```
- Response: 
	```
	{
		"movies":  [
			{
				"id":  1,
				"release_date":  "2017-09-05",
				"title":  "Jungle Book"
			},
			...
		],
		"success":  true,
		"created": 12,
		"total_movies":  12
	}
	```
	
##### PATCH /movies/<movie_id>
- General:
	- Required permission: Edit actors and movies
	- Edits a movie. Available fields are `title` and `release_date`
	- Request arguments: `movie_id`
	- Response: the updated movie
- Sample: 
	```
	curl -X PATCH --data '{"title": "Superman"}' --header "Authentication: Bearer {TOKEN}" https://casting-agency.herokuapp.com/movies/3
	```
- Response: 
	```
	{
		"movie": {
			"id":  3,
			"release_date":  "2019-10-04",
			"title":  "Superman"
		},
		"success":  true
	}
	```

##### DELETE /movies/<movie_id>
- General:
	- Required permission: Add and delete movies
	- Deletes a movie from the database.
	- Request arguments: `movie_id`
	- Response: the remaining movies and the deleted movie object
- Sample: 
	```
	curl -X DELETE --header "Authentication: Bearer {TOKEN}" https://casting-agency.herokuapp.com/movies/4
	```
- Response: 
	```
	{
		"movies":  [
			{
				"id":  1,
				"release_date":  "2017-09-05",
				"title":  "Jungle Book"
			},
			...
		],
		"deleted_movie": {
			"id": 4,
			"release_date": "03/20/2001",
			"title": "The way forward"
		}
		"success":  true
	}
	```

#### Actors
##### GET /actors
- General:
	- Required permission: View actors and movies
	- Fetches available actors as an array of objects that contain a actor id, name, age, and gender
	- Request arguments: None
	- Response: all actors pagingated in tens, success value, and total actors returned
- Sample: 
	```
	curl --header "Authentication: Bearer {TOKEN}" https://casting-agency.herokuapp.com/actors
	```
- Response: 
	```
	{
		"actors":  [
			{
				"age": 50,
				"gender": "female",
				"id":  2,
				"name":  "Jennifer Aniston"
			},
			...
		],
		"success":  true,
		"total_movies":  4
	}
	```

##### POST /actors
- General:
	- Required permission: Post and delete actors
	- Posts a new actor to the database. Required fields are `name`, `age`, and `gender`
	- Request arguments: None
	- Response: all actors pagingated in tens, success value, newly created actor id, and total number returned
- Sample: 
	```
	curl -X POST --data '{"name": "Sarah Jessica Parker", "age": 50, "gender": "female"}' --header "Authentication: Bearer {TOKEN}" https://casting-agency.herokuapp.com/actors
	```
- Response: 
	```
	{
		"actors":  [
			...
			{
				"age": 50,
				"gender":  "female",
				"id":  6,
				"name":  "Sarah Jessica Parker"
			},
		],
		"success":  true,
		"created": 6,
		"total_actors":  6
	}
	```
		
##### PATCH /actors/<actor_id>
- General:
	- Required permission: Edit actors and movies
	- Edits an actor. Available fields are `name`, `age`, and `gender`
	- Request arguments: `actor_id`
	- Response: the updated actor
- Sample: 
	```
	curl -X PATCH --data '{"gender": "female"}' --header "Authentication: Bearer {TOKEN}" https://casting-agency.herokuapp.com/actors/3
	```
- Response: 
	```
	{
		"actor": {
			"age":  50,
			"gender":  "female",
			"id": 3
			"name":  "Ini Edo"
		},
		"success":  true
	}
	```

##### DELETE /actors/<actor_id>
- General:
	- Required permission: Add and delete actors
	- Deletes an actor from the database.
	- Request arguments: `actor_id`
	- Response: the remaining actors and the deleted actor object
- Sample: 
	```
	curl -X DELETE --header "Authentication: Bearer {TOKEN}" https://casting-agency.herokuapp.com/actors/4
	```
- Response: 
	```
	{
		"actors":  [
			{
				"age": 50,
				"gender": "female",
				"id":  2,
				"name":  "Jennifer Aniston"
			},
			...
		],
		"deleted_movie": {
			"age": 50,
			"gender": "female",
			"id": 4,
			"name": "Jennifer Lopez"
		}
		"success":  true
	}
	```
