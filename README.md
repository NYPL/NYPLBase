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

##Deployment to Location App##
After the changes are approved, we need to update the changes to the repo of `UX-Static`. The link is as below.

https://bitbucket.org/NYPL/ux-static/src/master/

In `UX-Static`, find the folder named, `nyplbase`. Under `nyplbase`, you will see the folders of different versions. Create a new folder with a new version. In each folder, there are three different folders that contains images, fonts, and CSS stylesheets. Copy the contents of the previous folder to the new folder that we just created. And in the CSS folder, paste the CSS min files we just compiled from NYPLBase. Push the changes.

After pushing the changes, we need to deploy UX-Static with Jenkins. You can find the interfaces here
https://ci-sa.prod.aws.nypl.org/jenkins/view/Website%20Management%20(WWW)/search/?q=ux-static

There are two deployment works. One is for staging and one is for master, that both integrate with the branches of `UX-Static` repo respectively. Run the job on staging deployment will deploy the staging branch, for example.

After deploy, go to the repo of Location App.

https://github.com/NYPL/locations-app

In the root, find the file, `lociator.json`. You will see different environments and their configurations. The configuration of `nyplbase` is the one points to the stylesheets from `UX-Static`. We have two different sources,

master: `//d2znry4lg8s0tq.cloudfront.net/nyplbase/0.2.0/css/nyplbase.min.css`
staging: `//d3rw2mydk59brd.cloudfront.net/nyplbase/0.2.0/css/nyplbase.min.css`

Change the source for the environment you want to have the updates. Also, make sure that the version(here is `0.2.0`, for example) is correct as the version you created in `UX-Static` repo.

Run `Location App` at the correct environment, and the updates should be applied.
