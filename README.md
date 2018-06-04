# NYPLBase #

NYPLBase (or familiarly, "Base") provides a "base" for all NYPL web properties. Color palette, typeface, default styles, and a bit of structure is all built into this code package. (For those familiar with Twitter Bootstrap, it's like the Library's own Bootstrap but with fewer options.)

The idea is that anyone who's building a web project for the Library, whether one of our internal dev teams, or an external consultant group, can download and use this code as the style base, and not have to worry about getting our brand right--it's already in there. Even if you're not using the code, you can still look at the demo page as a style guide.

As of May 2018, only three applications are using NYPLBase: Locations App (previous Location-prototype), Research Collections, and Staff Profiles. Some of the older Drupal pages also use NYPLBase. Subsequent applications are using NYPL Design Toolkit, with the idea that NYPL Design Toolkit will supersede NYPLBase as the default.

## Usage ##
To update the styles for the apps that use NYPLBase, simply make a feature branch and make the changes. Then you need to use SASS to compile the changes to `min` files.

Please run
`sass css/style.scss:css/nyplbase.min.css --style compressed`. It should generate the min CSS and min CSS map under the name `nyplbase`.

Please go to the particular project's documentation for more details about testing the styles.

Locations App - https://github.com/NYPL/locations-app

## NYPL Deployment Process ##
The process requires access to NYPL's `UX-Static` repo and Jenkins accounts.

After the changes are approved, we need to update the changes in the `UX-Static` repo.

https://bitbucket.org/NYPL/ux-static/src/master/

In `UX-Static`, find the folder named `nyplbase`. Under `nyplbase`, you will see the folders of different versions. Create a new folder with the new version. In each folder, there are three folders that contain images, fonts, and CSS stylesheets. Copy the contents from the folder of previous version to the new folder that was just created. And in the CSS folder, paste the CSS min files we compiled from NYPLBase. Push the changes. If you have updates for fonts and images, copy them to the new folders respectively as well.

After pushing the changes, we need to deploy `UX-Static` with Jenkins. You can find the deployment jobs here
https://ci-sa.prod.aws.nypl.org/jenkins/view/Website%20Management%20(WWW)/search/?q=ux-static

There are two deployment jobs. One is for staging and one is for master. They both integrate with the branches of `UX-Static` repo respectively. Running the job on staging deployment will deploy the staging branch, for example.
