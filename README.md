#NYPLBase#
========
NYPLBase (or familiarly, "Base") provides a "base" for all NYPL web properties. Color palette, typeface, default styles, and a bit of structure is all built into this code package. (For those familiar with Twitter Bootstrap, it's like the Library's own Bootstrap but with fewer options.) 

The idea is that anyone who's building a web project for the Library, whether one of our internal dev teams, or an external consultant group, can download and use this code as the style base, and not have to worry about getting our brand right--it's already in there. Even if you're not using the code, you can still look at the demo page as a style guide.

At this moment, May 2018, only three applications are still using NYPLBase. They are Location-App(previous Location-prototype), Research Collections, and Staff Profiles. Along with some old drupal pages. The applications after these are using NYPL Toolkit.

##Usage##
To update the styles for the apps that use NYPLBase, simply make a feature branch and update the changes. Then you need to compile the changes by SASS commands to make it into min files.

Please run
`sass --watch css/style.scss:css/nyplbase.min.css --style compressed`. It should generate the min CSS and min CSS map under the name `nyplbase`. And then `ctrl + c` to terminate the `watch` session.

Now, we can test how this CSS file works on the application that requires changes. For example, at Location App, first disable the current styles sheet from cloudfront in `view/index.erb`by removing or commenting out the line, `<link rel="stylesheet" href="<%= settings.env_config['nyplbase'] %>" type="text/css" media="screen" />`.

And then, add `<link rel="stylesheet" href="css/nyplbaseTest.min.css" type="text/css" />` in the same file, `view/index.erb`. Last, create a new file named `nyplbaseTest.min.css` in the folder `public/css`. Run Location App, it should pick up the styles you created at NYPLBase.

##Deployment##