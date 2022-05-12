// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseType = license; 
  if (licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-greens.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![Apache2.0 license](https://img.shields.io/badge/License-Apache2.0-green.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GNU Public License](https://img.shields.io/badge/License-GNUPublicv3.0-green.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLinks; 
    if (license === 'MIT') {
      licenseLinks = `[License: MIT](https://choosealicense.com/licenses/mit/)`
    } else if (license === 'GPLv3') {
      licenseLinks = `[Apache2.0 license](https://choosealicense.com/licenses/apache-2.0/)`
    } else if (license === 'GPL') {
      licenseLinks = `[GNU Public License](https://choosealicense.com/licenses/gpl-3.0/)`
    } else {
      license.license = "N/A"
    }
    return licenseLinks;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
}




module.exports = generateMarkdown;
