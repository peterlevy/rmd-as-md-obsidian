import { Plugin } from 'obsidian';

export default class RmdAsMdPlugin extends Plugin {

  async onload() {
    super.onload();

    // register the view and extensions
    this.registerExtensions(["Rmd"], "markdown");
  }
}
