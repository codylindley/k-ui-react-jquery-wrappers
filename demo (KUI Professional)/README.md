# Before Running Demo:

***WARNING:*** Must npm install professional version of Kendo UI using credentials.

You'll need to setup a `.netrc` file on your local system. This file contains the login (username & password) of the account on telerik.com in which you purchased [Kendo UI professional](http://www.telerik.com/kendo-ui) or [DevCraft](http://www.telerik.com/devcraft).

Below are the instructions for both Windows and Mac users.

***On Windows:***

Create a text file called `\_netrc` in your home directory (e.g. `c:\users\jane\_netrc`).

Next, Declare a HOME environment variable.

EXAMPLE

```
C:\> SETX HOME %USERPROFILE%
```

Add the credentials using the format in the example above.

Git might have problems resolving your home directory if it contains spaces in its path—for example, `c:\Documents and Settings\jane`). Therefore, update your %HOME% environment variable to point to a directory having no spaces in its name.

***On Mac:***

Create a file called `.netrc` in your home directory `~/.netrc` (i.e `/User/USERNAME/.netrc`). Make sure you modify the file permissions to make it readable only to you.

Add your credentials to the `~/.netrc` (i.e `/User/USERNAME/.netrc`) file using the format from the example below.

EXAMPLE:

```
machine bower.telerik.com
    login my-telerik.identity@example.com-here
    password my-password-here
```

# Run Demo

Open this directory in a terminal and run the following npm script commands.

```
$ npm install
```

```
$ npm run webpack
```

then, in another tab/window:

```
$ npm run server
```

This will open a browser window with all of the KUI for React wrapper widgets running in a single page.
