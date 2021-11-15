// Generated by https://quicktype.io
interface IModules {
    'apple-icon':                                                                                                                                                          string;
    asc:                                                                                                                                                                   string;
    bg:                                                                                                                                                                    string;
    bitcoin:                                                                                                                                                               string;
    blob:                                                                                                                                                                  string;
    cercuri:                                                                                                                                                               string;
    'chester-wade':                                                                                                                                                        string;
    'darken-night-sky-full-of-stars-fantasy-animation-made-of-magical-sparkly-light-particles-flickering-on-a-purple-blue-gradient-background_bajacpz7x_thumbnail-full01': string;
    denys:                                                                                                                                                                 string;
    desc:                                                                                                                                                                  string;
    dots:                                                                                                                                                                  string;
    etherum:                                                                                                                                                               string;
    'fabien-bazanegue':                                                                                                                                                    string;
    favicon:                                                                                                                                                               string;
    github:                                                                                                                                                                string;
    google:                                                                                                                                                                string;
    'img_3115':                                                                                                                                                              string;
    james:                                                                                                                                                                 string;
    julie:                                                                                                                                                                 string;
    'landing-page':                                                                                                                                                        string;
    logo:                                                                                                                                                                  string;
    lora:                                                                                                                                                                  string;
    'mark-finn':                                                                                                                                                           string;
    mike:                                                                                                                                                                  string;
    'night-sky-full-of-stars-fantasy-animation-made-of-magical-sparkly-light-particles-flickering-on-a-purple-blue-gradient-background_bajacpz7x_thumbnail-full01':        string;
    'nucleo-logo':                                                                                                                                                         string;
    path1:                                                                                                                                                                 string;
    path2:                                                                                                                                                                 string;
    path3:                                                                                                                                                                 string;
    path4:                                                                                                                                                                 string;
    path5:                                                                                                                                                                 string;
    patrat:                                                                                                                                                                string;
    'profile-page':                                                                                                                                                        string;
    ripp:                                                                                                                                                                  string;
    ryan:                                                                                                                                                                  string;
    'square-purple-1':                                                                                                                                                     string;
    square1:                                                                                                                                                               string;
    square2:                                                                                                                                                               string;
    square3:                                                                                                                                                               string;
    square4:                                                                                                                                                               string;
    square5:                                                                                                                                                               string;
    square6:                                                                                                                                                               string;
    triunghiuri:                                                                                                                                                           string;
    waves:                                                                                                                                                                 string;
}

/** convenient for use : get all images from 3rd template dir */
const files = require.context('blk-design-system-react/src/assets/img', false);

const kvPairs = files.keys().map(key => [key.split(/\.\/|\./).slice(-2)[0], files(key)]);
// console.log("[ kvPairs ]", kvPairs)

export const blkAssets = Object.fromEntries(kvPairs) as IModules;
// console.log("[ files fromEntries result ]" , modulesMap)

export const logo = require('src/assets/logo.png');

