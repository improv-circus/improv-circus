/**
 * @typedef {Object} TheaterData
 * @property {string} name
 * @property {LocationData} location
 * @property {string} link
 * @property {string} [icon]
 * @property {string} [logo]
 * @property {SocialData} [social]
 */

import {imageUrl} from "./modelUtils.js";
import {Location} from "./location.js";
import {Social} from "./social.js";

/**
 * @typedef {Object} Theater
 * @property {Location} [location]
 */
export class Theater {
  /**
   * Create a new theater
   * @param {string} key
   * @param {TheaterData} data
   */
  constructor(key, data) {
    this.key = key;
    this.name = data.name;
    this.link = data.link
    this.social = Social.fromData(data.social)

    if (data.location) {
      this.location = new Location(data.location)
    }

    if (data.icon) {
      this.icon = data.icon
    } else {
      this.logo = imageUrl('theaters', `${data.logo ?? key}.png`)
    }
  }
}
